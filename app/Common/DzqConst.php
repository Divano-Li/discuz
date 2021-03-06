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

namespace App\Common;

class DzqConst
{
    //数据库bool类型查询
    const BOOL_YES = 1;

    const BOOL_NO = 0;

    //帖子列表接口作用域
    const SCOPE_NORMAL = 0;//常规列表

    const SCOPE_RECOMMEND = 1;//推荐列表

    const SCOPE_SEARCH = 2;//发现页搜索列表

    const SCOPE_PAID = 3;//付费站首页列表
}
