(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{DTiL:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=r(t("4gYi")),d=r(t("pNQN"));function r(e){return e&&e.__esModule?e:{default:e}}o.default={data:function(){return{vodTranscode:"",vodWatermark:"",vodExt:"",vodSize:"",subApplication:"",screenshot:"",vodTaskflowGif:"",vodUrlKey:"",vodUrlExpire:"",vodToken:"",videoDemand:!1}},created:function(){var e=this.$route.query.type;this.type=e,this.tencentCloudSms()},methods:{tencentCloudSms:function(){var e=this;this.appFetch({url:"forum_get_v3",method:"get",data:{}}).then((function(o){if(o.errors)e.$message.error(o.errors[0].code);else{if(0!==o.Code)return void e.$message.error(o.Message);var t=o.Data;e.vodTranscode=t.qcloud.qcloudVodTranscode,e.vodWatermark=t.qcloud.qcloudVodWatermark,e.vodExt=t.qcloud.qcloudVodExt,e.vodSize=t.qcloud.qcloudVodSize,e.subApplication=t.qcloud.qcloudVodSubAppId,e.screenshot=t.qcloud.qcloudVodCoverTemplate,e.vodTaskflowGif=t.qcloud.qcloudVodTaskflowGif,e.vodUrlKey=t.qcloud.qcloudVodUrlKey,e.vodUrlExpire=t.qcloud.qcloudVodUrlExpire,e.vodToken=t.qcloud.qcloudVodToken,e.videoDemand=t.qcloud.qcloudVodAutoPlay}}))},Submission:function(){var e=this;""!==this.vodTranscode?this.appFetch({url:"settings_post_v3",method:"post",data:{data:[{key:"qcloud_vod_sub_app_id",value:this.subApplication,tag:"qcloud"},{key:"qcloud_vod_transcode",value:this.vodTranscode,tag:"qcloud"},{key:"qcloud_vod_watermark",value:this.vodWatermark,tag:"qcloud"},{key:"qcloud_vod_cover_template",value:this.screenshot,tag:"qcloud"},{key:"qcloud_vod_ext",value:this.vodExt,tag:"qcloud"},{key:"qcloud_vod_size",value:this.vodSize,tag:"qcloud"},{key:"qcloud_vod_taskflow_gif",value:this.vodTaskflowGif,tag:"qcloud"},{key:"qcloud_vod_url_key",value:this.vodUrlKey,tag:"qcloud"},{key:"qcloud_vod_url_expire",value:this.vodUrlExpire,tag:"qcloud"},{key:"qcloud_vod_token",value:this.vodToken,tag:"qcloud"},{key:"qcloud_vod_auto_play",value:this.videoDemand,tag:"qcloud"}]}}).then((function(o){if(o.errors)e.$message.error(o.errors[0].code);else{if(0!==o.Code)return void e.$message.error(o.Message);e.$message({message:"提交成功",type:"success"}),e.tencentCloudSms()}})):this.$message("请填写转码模板")}},components:{Card:a.default,CardRow:d.default}}},OryB:function(e,o,t){"use strict";t.d(o,"a",(function(){return a})),t.d(o,"b",(function(){return d}));var a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("Card",{attrs:{header:"云点播配置"}}),e._v(" "),t("Card",{attrs:{header:"子应用："}},[t("CardRow",{attrs:{description:"请填写子应用 ID，如果没有开启子应用，此处留空即可，留空将自动采用主应用。"},scopedSlots:e._u([{key:"tail",fn:function(){return[t("a",{attrs:{href:"https://cloud.tencent.com/product/vod",target:"_blank"}},[e._v("未申请？点此申请")])]},proxy:!0}])},[t("el-input",{attrs:{clearable:""},model:{value:e.subApplication,callback:function(o){e.subApplication=o},expression:"subApplication"}})],1)],1),e._v(" "),t("Card",{attrs:{header:"转码模板："}},[t("CardRow",{attrs:{description:"腾讯云账户 - 云点播 - 视频转码模板中的模板ID。还需在回调设置中配置下回调URL，回调URL为：http(s)://当前域名/api/threads/notify/video?qvodtoken=云点播回调校验码，回调事件请选择”视频上传完成回调“和”视频转码完成回调“。"}},[t("el-input",{attrs:{clearable:""},model:{value:e.vodTranscode,callback:function(o){e.vodTranscode=o},expression:"vodTranscode"}})],1)],1),e._v(" "),t("Card",{attrs:{header:"水印模板："}},[t("CardRow",{attrs:{description:"腾讯云账户 - 云点播 - 视频处理设置 - 模板设置 - 水印模板中的模板ID，如果不填写则不启用视频水印。"}},[t("el-input",{attrs:{clearable:""},model:{value:e.vodWatermark,callback:function(o){e.vodWatermark=o},expression:"vodWatermark"}})],1)],1),e._v(" "),t("Card",{attrs:{header:"截图模板："}},[t("CardRow",{attrs:{description:"请填写腾讯云账户 - 云点播 - 视频处理设置 - 模板设置 - 截图模板中的模板ID，如果不填写则采用默认截图模板。"}},[t("el-input",{attrs:{clearable:""},model:{value:e.screenshot,callback:function(o){e.screenshot=o},expression:"screenshot"}})],1)],1),e._v(" "),t("Card",{attrs:{header:"动图封面任务流名称："}},[t("CardRow",{attrs:{description:"请填写腾讯云账户 - 云点播 - 视频处理设置 - 任务流设置中的任务流名称。如果创建新任务流，必须勾选“转动图”，选择合适的转动图gif模板并设置合适的时间段。如果填写了动图模板名称，则“截图模板”设置失效。"}},[t("el-input",{attrs:{clearable:""},model:{value:e.vodTaskflowGif,callback:function(o){e.vodTaskflowGif=o},expression:"vodTaskflowGif"}})],1)],1),e._v(" "),t("Card",{attrs:{header:"云点播防盗链 Key："}},[t("CardRow",{attrs:{description:"请填写腾讯云账户 - 云点播 - 分发播放设置 - 域名管理 - 设置中的Key 防盗链。"}},[t("el-input",{attrs:{clearable:""},model:{value:e.vodUrlKey,callback:function(o){e.vodUrlKey=o},expression:"vodUrlKey"}})],1)],1),e._v(" "),t("Card",{attrs:{header:"云点播防盗链签名有效期："}},[t("CardRow",{attrs:{description:"单位秒。过期后该 URL 将不再有效，返回 403 响应码。考虑到机器之间可能存在时间差，防盗链 URL 的实际过期时间一般比指定的过期时间长 5 分钟，即额外给出 300 秒的容差时间。建议过期时间戳不要过短，确保视频有足够时间完整播放。"}},[t("el-input",{attrs:{clearable:""},model:{value:e.vodUrlExpire,callback:function(o){e.vodUrlExpire=o},expression:"vodUrlExpire"}})],1)],1),e._v(" "),t("Card",{attrs:{header:"支持的视频扩展名:"}},[t("CardRow",{attrs:{description:"多个请用,隔开，例如 wmv,rm,mov,mpeg,mp4,3gp,flv,avi,rmvb"}},[t("el-input",{attrs:{clearable:""},model:{value:e.vodExt,callback:function(o){e.vodExt=o},expression:"vodExt"}})],1)],1),e._v(" "),t("Card",{attrs:{header:"支持的最大尺寸:"}},[t("CardRow",{attrs:{description:"单位：MB"}},[t("el-input",{attrs:{clearable:""},model:{value:e.vodSize,callback:function(o){e.vodSize=o},expression:"vodSize"}})],1)],1),e._v(" "),t("Card",{attrs:{header:"云点播回调校验码:"}},[t("CardRow",{attrs:{description:"根据云点播校验码，可以生成回调url，将回调url http(s)://当前域名/api/threads/notify/video?qvodtoken=云点播回调校验码 配置到云点播回调设置中，可以确保论坛的安全性"}},[t("el-input",{attrs:{clearable:""},model:{value:e.vodToken,callback:function(o){e.vodToken=o},expression:"vodToken"}})],1)],1),e._v(" "),t("Card",[t("CardRow",{attrs:{description:"开启后，用户在首页浏览帖子，帖子内视频自动播放，滑走后自动停止播放"}},[t("div",{staticClass:"demand-switch"},[t("p",{staticClass:"demand-switch__video"},[e._v("视频在首页自动播放")]),e._v(" "),t("el-switch",{attrs:{"active-color":"#336699","inactive-color":"#bbbbbb"},model:{value:e.videoDemand,callback:function(o){e.videoDemand=o},expression:"videoDemand"}})],1)])],1),e._v(" "),t("Card",{staticClass:"footer-btn"},[t("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.Submission}},[e._v("提交")])],1)],1)},d=[]},UTuH:function(e,o,t){"use strict";t.r(o);var a=t("OryB"),d=t("zSyx");for(var r in d)["default"].indexOf(r)<0&&function(e){t.d(o,e,(function(){return d[e]}))}(r);var l=t("KHd+"),s=Object(l.a)(d.default,a.a,a.b,!1,null,null,null);o.default=s.exports},voXb:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=r(t("QbLZ"));t("lpfh");var d=r(t("DTiL"));function r(e){return e&&e.__esModule?e:{default:e}}o.default=(0,a.default)({name:"tencent-cloud-config-sms-view"},d.default)},zSyx:function(e,o,t){"use strict";t.r(o);var a=t("voXb"),d=t.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){t.d(o,e,(function(){return a[e]}))}(r);o.default=d.a}}]);