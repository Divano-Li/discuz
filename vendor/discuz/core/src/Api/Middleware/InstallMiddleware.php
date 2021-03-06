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

namespace Discuz\Api\Middleware;

use App\Common\ResponseCode;
use Discuz\Common\Utils;
use Illuminate\Contracts\Routing\UrlGenerator;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

class InstallMiddleware implements MiddlewareInterface
{
    protected $url;

    public function __construct(UrlGenerator $url)
    {
        $this->url = $url;
    }

    /**
     * @inheritDoc
     */
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        Utils::outPut(ResponseCode::NOT_INSTALL);
        /*$status = 500;
        return DiscuzResponseFactory::JsonResponse([
            'errors' => [
                [
                    'status' => $status,
                    'code' => 'not_install',
                    'detail' => [
                        'installUrl' => $this->url->route('install.index')
                    ]
                ]
            ]
        ], $status);*/
    }
}
