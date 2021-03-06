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

namespace Discuz\Auth;

class Anonymous extends Guest
{
    /**
     * {@inheritdoc}
     */
    public $id = -1;

    /**
     * @var string
     */
    protected $username = '匿名用户';

    /**
     * {@inheritdoc}
     */
    public function __construct(array $attributes = [], $updated_at = '')
    {
        parent::__construct(array_merge($attributes, [
            'id' => $this->id,
            'username' => $this->getUsername($this->id),
            'updated_at' => $updated_at
        ]));

    }

    /**
     * @return string
     */
    public function getUsername($userId = null)
    {
        return $this->username;
    }

    public function getUserId()
    {
        return $this->id;
    }
}
