(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{OK1T:function(e,t,r){"use strict";r.r(t);var a=r("xZAy"),n=r.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(u);t.default=n.a},PtCn:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Card",{attrs:{header:"UCenter配置"}}),e._v(" "),r("Card",{attrs:{header:"APPID："}},[r("CardRow",{attrs:{description:"填写UCenter中该应用的APPID"}},[r("el-input",{model:{value:e.valueAppid,callback:function(t){e.valueAppid=t},expression:"valueAppid"}})],1)],1),e._v(" "),r("Card",{attrs:{header:"UCenter地址："}},[r("CardRow",{attrs:{description:"填写 UCenter 的 URL，结尾请不要加“/”"}},[r("el-input",{model:{value:e.valueUrl,callback:function(t){e.valueUrl=t},expression:"valueUrl"}})],1)],1),e._v(" "),r("Card",{attrs:{header:"通信秘钥："}},[r("CardRow",{staticClass:"span-right",attrs:{description:"只允许使用英文字母及数字，限 64 字节。应用端的通信密钥必须与此设置保持一致，否则该应用将无法与 UCenter 正常通信"}},[r("el-input",{model:{value:e.valueKey,callback:function(t){e.valueKey=t},expression:"valueKey"}})],1)],1),e._v(" "),r("Card",{staticClass:"footer-btn"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.submitConfiguration}},[e._v("提交")])],1)],1)},n=[]},iQIw:function(e,t,r){"use strict";r.r(t);var a=r("PtCn"),n=r("OK1T");for(var u in n)["default"].indexOf(u)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(u);var i=r("KHd+"),s=Object(i.a)(n.default,a.a,a.b,!1,null,null,null);t.default=s.exports},lBhJ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r("4gYi")),n=u(r("pNQN"));function u(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{valueAppid:"",valueUrl:"",valueKey:""}},created:function(){var e=this.$route.query.type;this.type=e,this.loadStatus()},methods:{loadStatus:function(){var e=this;this.appFetch({url:"forum_get_v3",method:"get",data:{}}).then((function(t){if(t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);var r=t.Data;e.valueKey=r.ucenter.ucenterKey,e.valueUrl=r.ucenter.ucenterUrl,e.valueAppid=r.ucenter.ucenterAppid}}))},submitConfiguration:function(){var e=this;this.appFetch({url:"settings_post_v3",method:"post",data:{data:[{key:"ucenter_appid",value:this.valueAppid,tag:"ucenter"},{key:"ucenter_url",value:this.valueUrl,tag:"ucenter"},{key:"ucenter_key",value:this.valueKey,tag:"ucenter"}]}}).then((function(t){if(t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);e.$message({message:"提交成功",type:"success"})}}))}},components:{Card:a.default,CardRow:n.default}}},xZAy:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r("QbLZ"));r("lpfh");var n=u(r("lBhJ"));function u(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)({name:"worth-mentioning-config-ucenter"},n.default)}}]);