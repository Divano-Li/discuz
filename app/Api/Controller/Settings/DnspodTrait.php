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

namespace App\Api\Controller\Settings;

use App\Common\ResponseCode;
use Discuz\Base\DzqLog;
use Discuz\Common\Utils;
use Discuz\Contracts\Setting\SettingsRepository;
use TencentCloud\Common\Credential;
use TencentCloud\Common\Profile\ClientProfile;
use TencentCloud\Common\Profile\HttpProfile;
use TencentCloud\Common\Exception\TencentCloudSDKException;
use TencentCloud\Dnspod\V20210323\DnspodClient;
use TencentCloud\Dnspod\V20210323\Models\CreateDomainAliasRequest;
use TencentCloud\Dnspod\V20210323\Models\CreateDomainRequest;
use TencentCloud\Dnspod\V20210323\Models\CreateRecordRequest;
use TencentCloud\Dnspod\V20210323\Models\DescribeDomainListRequest;
use TencentCloud\Dnspod\V20210323\Models\DescribeRecordListRequest;
use TencentCloud\Dnspod\V20210323\Models\ModifyRecordStatusRequest;

trait DnspodTrait
{
    /**
     * @var SettingsRepository
     */
    protected $settings;

    public $client;

    public function __construct(SettingsRepository $settings)
    {
        $this->settings = $settings;
    }

    protected function initDnspodClient(): DnspodClient
    {
        // https://console.cloud.tencent.com/api/explorer?Product=dnspod&Version=2021-03-23&Action=CreateRecord&SignVersion=
        $secretId = $this->settings->get('qcloud_secret_id', 'qcloud');
        $secretKey = $this->settings->get('qcloud_secret_key', 'qcloud');

        $cred = new Credential($secretId, $secretKey);
        $httpProfile = new HttpProfile();
        $httpProfile->setEndpoint('dnspod.tencentcloudapi.com');

        $clientProfile = new ClientProfile();
        $clientProfile->setHttpProfile($httpProfile);
        $this->client = new DnspodClient($cred, '', $clientProfile);
        return $this->client;
    }

    protected function commonDnspodDomain($type, $params, $errorMsg = '')
    {
        try {
            $this->initDnspodClient();

            switch ($type) {
//                case 'createDomainAlias':
//                    $req = new CreateDomainAliasRequest();
//                    $action = 'CreateDomainAlias';
//                    break;
                case 'createDomain':
                    $req = new CreateDomainRequest();
                    $action = 'CreateDomain';
                    break;
                case 'createRecord':
                    $req = new CreateRecordRequest();
                    $action = 'CreateRecord';
                    break;
                case 'describeRecordList':
                    $req = new DescribeRecordListRequest();
                    $action = 'DescribeRecordList';
                    break;
                case 'modifyRecordStatus':
                    $req = new ModifyRecordStatusRequest();
                    $action = 'ModifyRecordStatus';
                    break;
                case 'getDomainList':
                    $req = new DescribeDomainListRequest();
                    $action = 'DescribeDomainList';
                    break;
                default:
                    $req = new CreateRecordRequest();
                    $action = 'CreateRecord';
                    break;
            }

            $req->fromJsonString(json_encode($params));

            $resp = $this->client->$action($req);

            return json_decode($resp->toJsonString(), true);
        } catch (TencentCloudSDKException $e) {
            $errorData = ['errorCode' => $e->getErrorCode(), 'errorMsg' => $e->getMessage(), 'type' => $type, 'params' => $params];
            DzqLog::error('dnspodtrait_api_error', $errorData);
            unset($errorData['params']);
            Utils::outPut(ResponseCode::EXTERNAL_API_ERROR, $e->getMessage(), $errorData);
        }
    }

//    public function createDomainAlias($domainAlias = '', $domain = '')
//    {
//        return $this->commonDnspodDomain('createDomainAlias', [
//            'DomainAlias' => $domainAlias, //????????????
//            'Domain' => $domain // ?????????
//        ], '????????????????????????');
//    }

    public function createDomain($mainDomain = '')
    {
        return $this->commonDnspodDomain('createDomain', [
            'Domain' => $mainDomain // ?????????
        ], '??????????????????');
    }

    public function createRecord($mainDomain = '', $value = '', $recordType = '', $subDomain = 'www', $status = 'ENABLE', $recordLine = '??????')
    {
        $recordId = $this->getRecordId($mainDomain, $value, $recordType, $subDomain);
        if (!empty($recordId)) {
            return [];
        }

        return $this->commonDnspodDomain('createRecord', [
            'Domain' => $mainDomain, // ??????
            'RecordType' => $recordType, // ????????????????????? API ?????????????????????????????????????????????A ???
            'RecordLine' => $recordLine, // ????????????????????? API ????????????????????????????????????????????????
            'Value' => $value, // ??????????????? IP : 200.200.200.200??? CNAME : cname.dnspod.com.??? MX : mail.dnspod.com.???
            'SubDomain' => $subDomain, // ?????????????????? www??????????????????????????? @???
            'Status' => $status // ????????? ENABLE ??????????????? DISABLE?????????????????????
        ], '??????????????????????????????');
    }

    public function describeRecordList($mainDomain)
    {
        return $this->commonDnspodDomain('describeRecordList', [
            'Domain' => $mainDomain
        ], '??????????????????????????????');
    }

    public function getRecordId($mainDomain = '', $value = '', $type = '', $name = 'www'): int
    {
        $recordList = $this->describeRecordList($mainDomain);
        foreach ($recordList['RecordList'] as $val) {
            if (rtrim($val['Value'], '.') == rtrim($value, '.') && $val['Type'] == $type && $val['Name'] == $name) {
                return $val['RecordId'];
            }
        }
        return 0;
    }

    public function modifyRecordStatus($mainDomain, int $recordId, $status)
    {
        if (empty($recordId)) {
            return [];
        }

        return $this->commonDnspodDomain('modifyRecordStatus', [
            'Domain' => $mainDomain,
            'RecordId' => $recordId,
            'Status' => $status // ENABLE???DISABLE
        ], '????????????????????????');
    }

    public function getDomainList()
    {
        return $this->commonDnspodDomain('getDomainList', [], '????????????????????????');
    }

    public function getDomainArr(): array
    {
        $domainList = $this->getDomainList();
        $arr = [];
        foreach ($domainList['DomainList'] as $k => $value) {
            array_push($arr, $value['Name']);
        };
        return $arr;
    }

    // ??????????????????
    public function getSubDomain($speedDomain = '', $mainDomain = ''): string
    {
        return rtrim(str_replace($mainDomain, '', $speedDomain), '.');
    }
}
