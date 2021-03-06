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

namespace App\Listeners\WalletLog;

use App\Events\Wallet\Saved;
use App\Exceptions\WalletException;
use App\Models\UserWallet;
use App\Models\UserWalletLog;
use Discuz\Foundation\EventsDispatchTrait;
use Illuminate\Contracts\Bus\Dispatcher as BusDispatcher;
use Illuminate\Contracts\Events\Dispatcher as EventDispatcher;
use Illuminate\Support\Arr;

class SaveWalletLogToDatabase
{
    use EventsDispatchTrait;

    /**
     * @var BusDispatcher
     */
    protected $bus;

    public function __construct(EventDispatcher $eventDispatcher, BusDispatcher $bus)
    {
        $this->events = $eventDispatcher;
        $this->bus = $bus;
    }

    /**
     * @param Saved $event
     * @throws WalletException
     */
    public function handle(Saved $event)
    {
        $wallet = $event->wallet;
        $user = $event->user;
        $amount = $event->amount;
        $data = $event->data;

        $availableAmount = 0;
        $freezeAmount = 0;
        switch ($data['action'] ?? '') {
            case UserWallet::OPERATE_INCREASE:
                $availableAmount = $amount;
                break;
            case UserWallet::OPERATE_DECREASE:
                $availableAmount = -$amount;
                break;
            case UserWallet::OPERATE_INCREASE_FREEZE:
                $freezeAmount = $amount;
                break;
            case UserWallet::OPERATE_DECREASE_FREEZE:
                $freezeAmount = -$amount;
                break;
            case UserWallet::OPERATE_FREEZE:
                $availableAmount = -$amount;
                $freezeAmount = $amount;
                break;
            case UserWallet::OPERATE_UNFREEZE:
                $availableAmount = $amount;
                $freezeAmount = -$amount;
                break;
            default:
                throw new WalletException('operate_type_error');
        }

        // ???????????????????????????????????????????????????????????????
        if ($availableAmount == 0 && $freezeAmount == 0) {
            return;
        }

        // Create User Wallet Log
        UserWalletLog::createWalletLog(
            $user->id,                                  // ?????????????????? id
            $availableAmount,                           // ??????????????????
            $freezeAmount,                              // ??????????????????
            $data['change_type'],                       // ????????????
            $data['change_desc'],                       // ????????????
            Arr::get($data, 'cash_id', null),           // ???????????? id
            Arr::get($data, 'order_id', null),          // ???????????? id
            Arr::get($data, 'source_user_id', 0),       // ???????????????????????? id
            Arr::get($data, 'question_id', 0),          // ???????????? id
            Arr::get($data, 'post_id', 0),              // ????????????post id
            Arr::get($data, 'thread_id', 0)             // ????????????thread id

        );
    }
}
