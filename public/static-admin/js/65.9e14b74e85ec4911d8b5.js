(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"+DPk":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(n("QbLZ"));n("lpfh");var r=a(n("773k"));function a(t){return t&&t.__esModule?t:{default:t}}e.default=(0,i.default)({name:"worth-mentioning-config-applets-view"},r.default)},"773k":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(n("4gYi")),r=a(n("pNQN"));function a(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{loginStatus:"default",tableData:[{name:"H5微信授权登录",type:"h5",description:"用户在电脑网页使用微信扫码登录或微信内的H5、小程序使用微信授权登录",status:!0,icon:"iconH"},{name:"小程序微信授权登录",type:"applets",description:"用户在电脑网页使用微信扫码登录或微信内的H5、小程序使用微信授权登录",status:!1,icon:"iconxiaochengxu"},{name:"PC端微信扫码登录",type:"pc",description:"用户在PC的网页使用微信扫码登录",status:!0,icon:"iconweixin"}]}},methods:{configClick:function(t){this.$router.push({path:"/admin/worth-mentioning/config",type:"h5"})}},components:{Card:i.default,CardRow:r.default}}},MKE4:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card",{attrs:{header:"小程序配置"}}),t._v(" "),n("Card",{attrs:{header:"APPID："}},[n("CardRow",{attrs:{description:"填写申请小程序微信授权登录后，你获得的APPID"},scopedSlots:t._u([{key:"tail",fn:function(){return[n("span",{staticStyle:{color:"#336699"}},[t._v("未申请？点此申请")])]},proxy:!0}])},[n("el-input")],1)],1),t._v(" "),n("Card",{attrs:{header:"App secret："}},[n("CardRow",{attrs:{description:"填写申请小程序微信授权登录后，你获得的App secret"}},[n("el-input")],1)],1),t._v(" "),n("Card",{staticClass:"footer-btn"},[n("el-button",{attrs:{type:"primary",size:"medium"},on:{"click@click":function(e){return t.$router.push({path:"/admin/worth-mentioning-set"})}}},[t._v("提交")])],1)],1)},r=[]},UKiJ:function(t,e,n){"use strict";n.r(e);var i=n("MKE4"),r=n("ZK4i");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var u=n("KHd+"),o=Object(u.a)(r.default,i.a,i.b,!1,null,null,null);e.default=o.exports},ZK4i:function(t,e,n){"use strict";n.r(e);var i=n("+DPk"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=r.a}}]);