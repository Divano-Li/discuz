<?php

/*
 * Copyright (C) 2020 Tencent Cloud.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define('DISCUZ_START', microtime(true));

define('ARTISAN_BINARY', 'http');

require __DIR__ . '/../vendor/autoload.php';

$app = new Discuz\Foundation\Application(dirname(__DIR__));

$app->singleton(Discuz\Http\Server::class, Discuz\Http\Server::class);

$app->make(Discuz\Http\Server::class)->listen();
