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

namespace App\Api\Controller\AttachmentV3;

use App\Common\ResponseCode;
use App\Common\Utils;
use App\Models\Attachment;
use App\Models\AttachmentShare;
use App\Models\Thread;
use App\Repositories\UserRepository;
use Carbon\Carbon;
use Discuz\Base\DzqController;
use Discuz\Contracts\Setting\SettingsRepository;
use Illuminate\Contracts\Filesystem\Factory as Filesystem;
use Illuminate\Contracts\Routing\UrlGenerator;

class DownloadAttachmentController extends DzqController
{
    use DownloadAuthTrait;

    protected $filesystem;

    protected $settings;

    protected $url;

    protected $thread;

    protected $attachment;

    public function __construct(Filesystem $filesystem, SettingsRepository $settings,UrlGenerator $url)
    {
        $this->filesystem = $filesystem;
        $this->settings = $settings;
        $this->url = $url;
    }

    protected function checkRequestPermissions(UserRepository $userRepo)
    {
        $threadId =$this->inPut('threadId');
        $attachmentsId = $this->inPut('attachmentsId');
        $user = $this->user;

        $thread = Thread::getThreadTomInfoById($threadId);
        if (!$thread) {
            $this->outPut(ResponseCode::RESOURCE_NOT_FOUND);
        }
        $attachment = Attachment::getOneAttachment($attachmentsId);
        if(empty($attachment)){
            $this->outPut(ResponseCode::RESOURCE_NOT_FOUND);
        }

        $this->checkDownloadAttachment($thread,$user,$userRepo);

        if (!$userRepo->canDownloadThreadAttachment($this->user, $attachment->user_id)) {
            $this->outPut(ResponseCode::UNAUTHORIZED, '????????????????????????');
        }
        $this->thread = $thread;
        return true;
    }

    public function main()
    {
        $user = $this->user;

        $data = [
            'threadId' => $this->inPut('threadId'),
            'attachmentsId' => $this->inPut('attachmentsId'),
            'sign' => $this->inPut('sign')
        ];
        $this->dzqValidate($data,[
            'threadId' => 'required|int',
            'attachmentsId' => 'required|int'
        ]);

        if (!($user->isGuest())) {
            //??????????????????
            $downloadNum = (int)$this->settings->get('support_max_download_num', 'default');
            $todayTime = Utils::getTodayTime();

            $share = AttachmentShare::query()
                ->where('user_id',$user->id)
                ->whereBetween('updated_at', array($todayTime['begin'], $todayTime['end']));
            //?????????????????????
            $dayLimitCount = (int)$share->sum('is_downloaded');
            //???????????????????????????
            $share = $share->where('attachments_id',$data['attachmentsId'])
                ->where('is_downloaded','=',1);
            //?????????????????????????????????????????????????????????
            if($downloadNum > 0 && !($share->exists())){
                if($dayLimitCount >= $downloadNum){
                    app('log')->info("requestId???{$this->requestId},??????????????????????????????????????????");
                    return $this->outPut(ResponseCode::DOWNLOAD_NUMS_IS_TOPLIMIT);
                }
            }
        }

        $attachmentShare = null;
        if(empty($data['sign'])){
            //??????????????????
            if (!($user->isGuest())) {
                $count = AttachmentShare::query()
                    ->where(['attachments_id' => $data['attachmentsId'], 'user_id' => $user->id])
                    ->where('created_at', '>=', Carbon::now()->modify('-1 minutes'))
                    ->count('attachments_id');
                if ($count >= 2) $this->outPut(ResponseCode::NET_ERROR,'??????????????????????????????');
            }

            $docValue = json_decode($this->thread->value,true);
            if (!isset($docValue['docIds']) || !is_array($docValue['docIds']) || !in_array($data['attachmentsId'], $docValue['docIds'])) {
                $this->outPut(ResponseCode::RESOURCE_NOT_FOUND);
            }

            $sign = $this->sign($data);
            $attachmentShare = new AttachmentShare;
            $attachmentShare->sign = $sign;
            $attachmentShare->attachments_id = $data['attachmentsId'];
            $attachmentShare->user_id = $user->id;
            $attachmentShare->expired_at = Carbon::now()->modify('+10 minutes');
            $attachmentShare->save();
        }else{
            //?????????????????????
            $attachmentShare = AttachmentShare::query()
                ->where(['sign' => $data['sign'], 'attachments_id' => $data['attachmentsId']])
                ->where('user_id',$user->id)
                ->first();

            if (empty($attachmentShare)) {
                app('log')->info("requestId???{$this->requestId},?????????????????????");
                return $this->outPut(ResponseCode::RESOURCE_NOT_FOUND);
            }
            if(strtotime($attachmentShare->expired_at) < time()){
                app('log')->info("requestId???{$this->requestId},?????????????????????");
                return $this->outPut(ResponseCode::DOWNLOAD_RESOURCE_IS_INVALID);
            }

            $s1 = date_create(date('Y-m-d',time()));
            $s2 = date_create(date('Y-m-d',strtotime($attachmentShare->created_at)));
            $diff = date_diff($s1,$s2)->days;
            if(!empty($data['sign']) && $diff === 1){
                //?????????????????????????????????????????????
                $sign = $this->sign($data);
                $attachmentShare = new AttachmentShare;
                $attachmentShare->sign = $sign;
                $attachmentShare->attachments_id = $data['attachmentsId'];
                $attachmentShare->user_id = $user->id;
                $attachmentShare->expired_at = Carbon::now()->modify('+10 minutes');
                $attachmentShare->save();
            }
        }
        $shareSign = AttachmentShare::query()->where('sign',$attachmentShare->sign);
        if (!($user->isGuest())) {
            //??????????????????????????????????????????
            $dayUserCount = $share->sum('is_downloaded');
            if((int)$dayUserCount == 0){
                $shareSign->update([
                    'is_downloaded' => 1,
                    'updated_at' => Carbon::now()
                ]);
            }
        }
        //???????????????????????????
        $shareSign->update([
            'download_count' => intval($attachmentShare->download_count + 1),
        ]);
        $this->outPut(ResponseCode::SUCCESS);
    }

    //??????????????????
    public function sign($data)
    {
        $stringArr = openssl_random_pseudo_bytes(16);
        $stringArr[6] = chr(ord($stringArr[6]) & 0x0f | 0x40); // set version to 0100
        $stringArr[8] = chr(ord($stringArr[8]) & 0x3f | 0x80); // set bits 6-7 to 10
        $string =  vsprintf('%s%s%s%s%s%s%s%s',
            str_split(bin2hex($stringArr), 4));
        return md5($string.$data['threadId'].$data['attachmentsId']);
    }
}
