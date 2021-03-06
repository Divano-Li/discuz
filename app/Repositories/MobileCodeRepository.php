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

namespace App\Repositories;

use App\Models\MobileCode;

class MobileCodeRepository
{
    public function query()
    {
        return MobileCode::query();
    }

    /**
     * 取最新的一次验证码
     * @param $mobile
     * @param $type
     * @param int $state
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model|object|null
     */
    public function getSmsCode($mobile, $type, $state = 0)
    {
        return $this->query()->where([
            [compact('mobile')],
            [compact('type')],
            [compact('state')]
        ])->orderBy('id', 'desc')->first();
    }
}
