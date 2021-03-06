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

namespace App\Listeners\User;

use App\Events\Users\Registered;
use App\Models\Invite;
use Illuminate\Support\Arr;

class AddDefaultGroup
{
    /**
     * 设置默认用户组
     *
     * @param Registered $event
     */
    public function handle(Registered $event)
    {
        $code = Arr::get($event->data, 'code');

        if (! $code || ! Invite::lengthByAdmin($code)) {//管理员邀请也为普通会员
            $event->user->resetGroup();
        }
    }
}
