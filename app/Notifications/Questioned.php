<?php

/**
 * Copyright (C) 2020 Tencent Cloud.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace App\Notifications;

use App\Models\NotificationTiming;
use App\Models\Post;
use App\Models\Question;
use App\Models\User;
use App\Notifications\Messages\Database\QuestionedMessage;
use App\Notifications\Messages\MiniProgram\QuestionedAnswerMiniProgramMessage;
use App\Notifications\Messages\MiniProgram\QuestionedMiniProgramMessage;
use App\Notifications\Messages\Sms\QuestionedAnswerSmsMessage;
use App\Notifications\Messages\Sms\QuestionedSmsMessage;
use App\Notifications\Messages\Wechat\QuestionedAnswerWechatMessage;
use App\Notifications\Messages\Wechat\QuestionedWechatMessage;
use Discuz\Notifications\Messages\SimpleMessage;
use Discuz\Notifications\NotificationManager;
use Illuminate\Support\Collection;

/**
 * 问答通知
 *
 * @package App\Notifications
 */
class Questioned extends AbstractNotification
{
    public $user;

    public $question;

    public $data;

    protected $message;

    /**
     * @var array
     */
    public $tplId;

    /**
     * @var Collection
     */
    protected $messageRelationship;

    /**
     * @var array
     */
    protected $channels;

    public function __construct($message, User $user, Question $question, $data = [])
    {
        $this->message = app($message);

        // 提问人 / 被提问人
        $this->user = $user;
        $this->question = $question;
        $this->data = $data;

        /**
         * 初始化要发送的模板中，对应的 tplId
         */
        $this->initNoticeMessage();

        $this->setTemplate();
    }

    /**
     * 设置所有开启中的，要发送的模板
     * 查询到数据集合后，存放静态区域
     */
    protected function setTemplate()
    {
        self::getTemplate($this->tplId);
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        // 获取已开启的通知频道
        return $this->getNotificationChannels();
    }

    public function getTplModel($type)
    {
        return self::$tplData->where('notice_id', $this->tplId[$type])->first();
    }

    /**
     * @param string $type
     * @return SimpleMessage
     */
    public function getMessage(string $type)
    {
        return $this->messageRelationship->get($type);
    }

    public function toDatabase($notifiable)
    {
        $message = $this->getMessage('database');
        $message->setData($this->getTplModel('database'), $this->user, $this->question);

        return (new NotificationManager)->driver('database')->setNotification($message)->build();
    }

    public function toWechat($notifiable, $noticeTimingId)
    {
        $this->data['receiveUserId'] = !empty($notifiable->id) ? $notifiable->id : 0;
        $this->data['noticeId'] = collect($this->getTplModel('wechat'))->get('notice_id');

        NotificationTiming::updateSendData($noticeTimingId, [
            'userId' => $this->user->id,
            'contentData' =>[
                'id' => $this->question->id,
                'table' => get_class(new Question())
            ],
            'data' => $this->data
        ]);

        $message = $this->getMessage('wechat');
        $message->setData($this->getTplModel('wechat'), $this->user, $this->question, $this->data);

        return (new NotificationManager)->driver('wechat')->setNotification($message)->build();
    }

    public function toSms($notifiable)
    {
        $message = $this->getMessage('sms');
        $message->setData($this->getTplModel('sms'), $this->user, $this->question, $this->data);

        return (new NotificationManager)->driver('sms')->setNotification($message)->build();
    }

    public function toMiniProgram($notifiable)
    {
        $message = $this->getMessage('miniProgram');
        $message->setData($this->getTplModel('miniProgram'), $this->user, $this->question, $this->data);

        return (new NotificationManager)->driver('miniProgram')->setNotification($message)->build();
    }

    protected function initNoticeMessage()
    {
        /**
         * init database message
         *
         * @see QuestionedWechatMessage 给回答人发送微信通知
         * @see QuestionedAnswerWechatMessage 给提问人发送微信通知
         */
        $this->messageRelationship = collect();
        $this->messageRelationship['wechat'] = $this->message;

        // Set public database message relationship
        $this->messageRelationship['database'] = app(QuestionedMessage::class);

        // Set tpl ids
        if ($this->message instanceof QuestionedWechatMessage) {
            $this->tplId = [
                'database'    => 'system.question.asked',
                'wechat'      => 'wechat.question.asked',
                'sms'         => 'sms.question.asked',
                'miniProgram' => 'miniprogram.question.asked',
            ];
            $this->messageRelationship['sms'] = app(QuestionedSmsMessage::class);
            $this->messageRelationship['miniProgram'] = app(QuestionedMiniProgramMessage::class);
        } // Questioned Answer
        elseif ($this->message instanceof QuestionedAnswerWechatMessage) {
            $this->tplId = [
                'database'    => 'system.question.answered',
                'wechat'      => 'wechat.question.answered',
                'sms'         => 'sms.question.answered',
                'miniProgram' => 'miniprogram.question.answered',
            ];
            $this->messageRelationship['sms'] = app(QuestionedAnswerSmsMessage::class);
            $this->messageRelationship['miniProgram'] = app(QuestionedAnswerMiniProgramMessage::class);
        }
    }
}
