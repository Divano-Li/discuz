_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"/Nde":function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return h}));var r=n("lSNA"),a=n.n(r),i=(n("o0o1"),n("ls82"),n("yXPU"),n("+3IH")),o=n("dJ22");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={Code:"common_0001",Message:"\u9700\u8981\u8865\u5145\u6635\u79f0"},d={Code:"common_0002",Message:"\u9700\u8981\u8865\u5145\u9644\u52a0\u4fe1\u606f"},l={Code:"common_0003",Message:"\u9700\u8981\u8865\u5145\u6635\u79f0\u548c\u9644\u52a0\u4fe1\u606f"},f=-4009,p=2,b=-4007,h=function(e){var t=e.webConfig.setSite;return"1"===(t=void 0===t?{}:t).openExtFields},v=function(e){if(function(e){var t=Object(i.a)(e,"data.isMissNickname",!1),n=10===Object(i.a)(e,"data.userStatus"),r=Object(i.a)(e,"data.accessToken","");if(-8e3!==e.code){var a=Object(i.a)(e,"data.uid","");if(Object(o.a)({accessToken:r}),n&&t)throw c({uid:a},l);if(t)throw c({uid:a},u);if(n)throw c({uid:a},d)}}(e),0===e.code||e.code===f||e.code===b){var t=e.code,n=Object(i.a)(e,"data.userStatus",0),r=Object(i.a)(e,"data.uid","");if(0===t&&n===p){var a=Object(i.a)(e,"data.accessToken","");Object(o.a)({accessToken:a}),t=n}if(t)throw{Code:t,Message:Object(i.a)(e,"data.rejectReason",""),uid:r}}}},"5MUC":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("QWBl"),n("sMBO"),n("T63A"),n("tkto"),n("FZtP");var r=n("J4zp"),a=n.n(r),i={101:"IMAGE",102:"VOICE",103:"VIDEO",104:"GOODS",105:"QA",106:"RED_PACKET",107:"REWARD",108:"VOTE",109:"VOTE_THREAD",110:"FILE",111:"QA_IMAGE",10002:"IFRAME"};function o(e){var t={plugin:{}};return e&&Object.keys(e)&&Object.entries(e).forEach((function(e){var n=a()(e,2)[1];if(n){var r=n.tomId,o=n.body,s=n._plugin;i[r]?t[i[r]]=o:s&&(t.plugin[null===s||void 0===s?void 0:s.name]={tomId:r,body:o,_plugin:s})}})),t}},"7zbd":function(e,t,n){"use strict";n.r(t);n("ma9I"),n("qePV"),n("rB9j"),n("EnZy");var r,a=n("nKUr"),i=n("o0o1"),o=n.n(i),s=(n("ls82"),n("yXPU")),c=n.n(s),u=n("lwsE"),d=n.n(u),l=n("W8MJ"),f=n.n(l),p=n("7W2i"),b=n.n(p),h=n("a1gu"),v=n.n(h),m=n("Nsbk"),g=n.n(m),w=n("q1tI"),O=n.n(w),j=n("kMSe"),y=n("wdT/"),P=n.n(y),k=(n("RiVy"),n("B5JU")),x=n.n(k),S=n("sho3"),C=(n("IvHc"),n("QcND")),I=n("5MUC");function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g()(e);if(t){var a=g()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return v()(this,n)}}var D=Object(j.c)("user")(r=Object(j.d)(r=function(e){b()(n,e);var t=E(n);function n(e){var r;return d()(this,n),(r=t.call(this,e)).state={},r}return f()(n,[{key:"componentDidMount",value:function(){var e=c()(o.a.mark((function e(){var t,n,r,a,i,s,c,u,d,l,f;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.router.query.url){e.next=3;break}return e.abrupt("return");case 3:return t=this.props.router.asPath,n=decodeURI(t).split("?"),"".concat(n[1].split("=")[1],"?").concat(n[2].split("&")[0],"&").concat(n[2].split("&")[1]),r=n[2].split("&"),a=r[0].split("=")[1],i=r[2].split("=")[1],s=Number(r[1].split("=")[1]),e.next=12,this.getCanDownloadAttachment(i);case 12:if(c=e.sent,u=c.canDownloadAttachment,d=c.attachment,u){e.next=19;break}return P.a.warning({content:"\u6682\u2f46\u6743\u9650\u4e0b\u8f7d\u9644\u4ef6"}),x.a.redirect({url:"/"}),e.abrupt("return");case 19:return l=this.getAttachmentLink(s,d),f={sign:a,attachmentsId:s,threadId:i},e.next=23,this.downloadAttachment(f);case 23:e.sent&&(P.a.info({content:"\u6b63\u5728\u4e0b\u8f7d"}),window.location.href=l);case 25:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCanDownloadAttachment",value:function(){var e=c()(o.a.mark((function e(t){var n,r,a,i,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.readThreadDetail)({params:{threadId:Number(t)}});case 2:if(0!==(n=e.sent).code){e.next=6;break}return c=Object(I.a)(null===n||void 0===n||null===(r=n.data)||void 0===r||null===(a=r.content)||void 0===a?void 0:a.indexes),e.abrupt("return",{canDownloadAttachment:null===n||void 0===n||null===(i=n.data)||void 0===i||null===(s=i.ability)||void 0===s?void 0:s.canDownloadAttachment,attachment:c&&c.VOTE});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAttachmentLink",value:function(e,t){for(var n=0;n<(null===t||void 0===t?void 0:t.length);n++)if(t[n].id===e)return t[n].url}},{key:"downloadAttachment",value:function(){var e=c()(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.readDownloadAttachment)(t);case 2:if(0!==(null===(n=e.sent)||void 0===n?void 0:n.code)){e.next=6;break}return x.a.redirect({url:"/"}),e.abrupt("return",!0);case 6:return-7083===(null===n||void 0===n?void 0:n.code)&&(P.a.info({content:null===n||void 0===n?void 0:n.msg}),x.a.redirect({url:"/"})),-7082===(null===n||void 0===n?void 0:n.code)&&(P.a.info({content:null===n||void 0===n?void 0:n.msg}),x.a.redirect({url:"/"})),-4004===(null===n||void 0===n?void 0:n.code)&&P.a.info({content:null===n||void 0===n?void 0:n.msg}),-5001===(null===n||void 0===n?void 0:n.code)&&(P.a.info({content:null===n||void 0===n?void 0:n.msg}),x.a.redirect({url:"/"})),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)("div",{})}}]),n}(O.a.Component))||r)||r;t.default=Object(C.a)(D)},ALHM:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n("ma9I"),n("4mDm"),n("07d7"),n("5s+n"),n("PKPk"),n("3bBZ");var r=n("o0o1"),a=n.n(r),i=n("RIqP"),o=n.n(i),s=n("lSNA"),c=n.n(s),u=(n("ls82"),n("yXPU")),d=n.n(u),l=n("rGXy"),f=n("lY1M");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=["closeWindow","chooseImage","uploadImage","getLocalImgData","updateAppMessageShareData","updateTimelineShareData","getNetworkType"],v=!1;function m(){return g.apply(this,arguments)}function g(){return(g=d()(a.a.mark((function e(){var t,n,r,i,s,c,u=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.length>0&&void 0!==u[0]&&u[0],n=u.length>1&&void 0!==u[1]?u[1]:[],f.b.env("weixin")){e.next=4;break}return e.abrupt("return");case 4:return r=[],window.wx&&wx.config||(i=new Promise((function(e){var t=document.createElement("script");t.src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js",t.onload=function(){return e()},document.body.appendChild(t)})),r.push(i)),e.next=8,Promise.all(r);case 8:if(t&&!v){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,Object(l.getWXConfig)({params:{url:encodeURIComponent(window.location.href)}});case 12:if(0!==(s=e.sent).code||!s.data||!s.data.appId){e.next=21;break}return a=s.data,c={appId:a.appId,timestamp:a.timestamp,nonceStr:a.nonceStr,signature:a.signature},wx&&wx.config(b(b({debug:!1},c),{},{jsApiList:[].concat(h,o()(n))})),wx&&(wx.hasDoneConfig=!0),v=!0,e.abrupt("return",!0);case 21:console.error("\u521d\u59cb\u5316\u5fae\u4fe1jssdk\u5931\u8d25\uff01",s);case 22:return e.abrupt("return",!1);case 23:case"end":return e.stop()}var a}),e)})))).apply(this,arguments)}},E2vk:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("ma9I"),n("QWBl"),n("yq1k"),n("tkto"),n("JTJg"),n("FZtP");var r=n("lN2P"),a="/thread/post",i="/indexPages/thread/post/index";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.includes("?"),r=e;return Object.keys(t).forEach((function(e,a){r+="".concat(n||0!==a?"&":"?").concat(e,"=").concat(t[e])})),r}function s(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(!e.isLogin())return r.a.saveAndLogin(),!1;if(!t.publishNeedBindPhone&&!t.publishNeedBindWechat)return!0;var c="bind".concat(t.publishNeedBindPhone&&!e.mobile?"Mobile":"").concat(t.publishNeedBindWechat&&!e.isBindWechat?"Wechat":""),u="".concat(t.isSmsOpen?"mobile":"").concat("none"!==t.wechatEnv?"wechat":""),d="",l="",f={limitPublishType:n};if("h5"===t.platform){switch(n){case"comment":if("miniProgram"===t.wechatEnv){l="".concat(window.location.origin).concat(i);break}l="".concat(window.location.origin).concat(a);break;case"reply":if("miniProgram"===t.wechatEnv){l="/indexPages/thread/index?id=".concat(s);break}r.a.saveCurrentUrl(),l=r.a.getUrl()}(l=encodeURIComponent(l))&&(f.toPage=l)}switch(u){case"mobile":d=e.mobile?"":o("/user/bind-phone",f);break;case"wechat":d=e.isBindWechat?"":o("/user/wx-bind-qrcode",f);break;case"mobilewechat":switch(c){case"bindMobile":d=e.mobile?"":o("/user/bind-phone",f);break;case"bindWechat":d=e.isBindWechat?"":o("/user/wx-bind-qrcode",f);break;case"bindMobileWechat":f.bindPhone=1,d=e.isBindWechat||e.mobile?"":o("/user/wx-bind-qrcode",f)}}return d&&r.a.saveAndPush(d),"comment"===n&&r.a.setUrl("".concat(window.location.origin).concat(a)),!d}},FtgW:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={SUPPLEMENTARY:10}},IvHc:function(e,t,n){"use strict";var r=n("lN2P");t.a=r.a.saveAndLogin},JTJg:function(e,t,n){"use strict";var r=n("I+eb"),a=n("WjRb"),i=n("HYAF");r({target:"String",proto:!0,forced:!n("qxPZ")("includes")},{includes:function(e){return!!~String(i(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},QcND:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Q}));n("ma9I"),n("yq1k"),n("4mDm"),n("Rfxz"),n("07d7"),n("rB9j"),n("JTJg"),n("PKPk"),n("Rm1S"),n("UxlC"),n("3bBZ"),n("Kz25");var r=n("nKUr"),a=n("o0o1"),i=n.n(a),o=n("lSNA"),s=n.n(o),c=(n("ls82"),n("yXPU")),u=n.n(c),d=n("lwsE"),l=n.n(d),f=n("PJYZ"),p=n.n(f),b=n("W8MJ"),h=n.n(b),v=n("7W2i"),m=n.n(v),g=n("a1gu"),w=n.n(g),O=n("Nsbk"),j=n.n(O),y=n("q1tI"),P=n.n(y),k=n("kMSe"),x=n("n4oF"),S=n("zDaA"),C=n("sho3"),I=n("B5JU"),E=n.n(I),D=n("20a2"),A=n("bK+J"),U=n("/Nde"),N=n("MCNy"),R=n.n(N),M=n("pGE/"),T=n("Tk/S"),W=n("Xrmz"),L=n("ALHM"),_=n("E2vk"),B=n("yO9+"),J=n("lN2P"),q=n("FtgW");function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j()(e);if(t){var a=j()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return w()(this,n)}}function Q(t,n){var a,o=Object(k.c)("site")(a=Object(k.c)("user")(a=Object(k.c)("thread")(a=Object(k.c)("emotion")(a=Object(k.c)("commonLogin")(a=Object(k.d)(a=function(a){m()(s,a);var o=z(s);function s(e){var t,n;l()(this,s),(t=o.call(this,e)).handleWxShare=t.handleWxShare.bind(p()(t)),t.canPublish=t.canPublish.bind(p()(t));var r=e.serverUser,a=e.serverSite,i=e.serverEmotion,c=e.user,u=e.site,d=e.emotion;return a&&a.platform&&u.setPlatform(a.platform),a&&a.closeSite&&u.setCloseSiteConfig(a.closeSite),a&&a.webConfig&&u.setSiteConfig(a.webConfig),a&&a.pluginConfig&&u.setPluginConfig(a.pluginConfig),r&&r.userInfo&&c.setUserInfo(r.userInfo),r&&r.userPermissions&&c.setUserPermissions(r.userPermissions),r&&r.userPermissions&&c.setUserPermissions(r.userPermissions),i&&i.emojis&&d.setEmoji(i.emojis),n=Object(x.a)()?!a:!(u&&u.webConfig),t.state={isNoSiteData:n,isPass:!!Object(x.a)()},t}return h()(s,null,[{key:"getInitialProps",value:function(){var n=u()(i.a.mark((function n(r){var a,o,s,c,u,d,l,f,p,b,h,v;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,e.ctx=r,a="static",o={},u={},!Object(x.a)()){n.next=30;break}return h=r.req.headers,a=h&&!M.a.isEmptyObject(h)?Object(S.a)(h["user-agent"]):"static",Object(C.readEmoji)({},r),n.next=11,Object(C.readForum)({},r);case 11:if(o=n.sent,c={platform:a,closeSite:-3005===o.code?o.data:null,webConfig:o&&o.data||null},!o||0!==o.code||null===(f=o)||void 0===f||null===(p=f.data)||void 0===p||null===(b=p.user)||void 0===b||!b.userId){n.next=22;break}return n.next=16,Object(C.readUser)({params:{userId:o.data.user.userId}},r);case 16:return s=n.sent,n.next=19,Object(C.readPermissions)({},r);case 19:l=n.sent,d=s&&0===s.code?s.data:null,l=l&&0===l.code?l.data:null;case 22:return n.next=24,Object(C.readPluginList)({},r);case 24:if(0===(v=n.sent).code&&(c.pluginConfig=v.data),!o||0!==o.code||!t.getInitialProps){n.next=30;break}return n.next=29,t.getInitialProps(r,{user:d,site:c});case 29:u=n.sent;case 30:return n.abrupt("return",X(X({},u),{},{serverSite:c,serverUser:{userInfo:d,userPermissions:l}}));case 33:return n.prev=33,n.t0=n.catch(0),console.log("err",n.t0),n.abrupt("return",{serverSite:{},serverUser:{}});case 37:case"end":return n.stop()}}),n,null,[[0,33]])})));return function(e){return n.apply(this,arguments)}}()}]),h()(s,[{key:"componentDidMount",value:function(){var e=u()(i.a.mark((function e(){var t,r,a,o,s,c,u,d,l,f,p,b,h,v,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.state.isNoSiteData,a=this.props,o=a.serverUser,s=a.serverSite,c=a.user,u=a.site,d=a.emotion,f=!1,null!==(t=d.emojis)&&void 0!==t&&t.length||d.fetchEmoji(),u.setPlatform(Object(S.a)(window.navigator.userAgent)),!r){e.next=20;break}if(l=(null===s||void 0===s?void 0:s.webConfig)||null){e.next=18;break}return e.next=10,Object(C.readForum)({});case 10:return(p=e.sent).data&&u.setSiteConfig(p.data),e.next=14,Object(C.readPluginList)();case 14:0===(b=e.sent).code&&u.setPluginConfig(b.data),this.setAppCommonStatus(p),l=p.data||null;case 18:e.next=21;break;case 20:l=u?u.webConfig:null;case 21:if(u.initUserLoginEntryStatus(),!l||!l.user){e.next=38;break}if(c&&c.userInfo||o&&o.userInfo){e.next=35;break}return e.next=26,Object(C.readUser)({params:{userId:l.user.userId}});case 26:return h=e.sent,e.next=29,Object(C.readPermissions)({});case 29:0===(v=e.sent).code&&v.data&&c.setUserPermissions(v.data),h.data&&c.setUserInfo(h.data),f=!!h.data,e.next=36;break;case 35:f=!0;case 36:e.next=39;break;case 38:f=!1;case 39:return c.updateLoginStatus(f),m=this.isPass(r),n&&m&&(m=n(m)),this.setState({isPass:m}),e.next=45,Object(L.a)(l&&l.passport&&l.passport.offiaccountOpen);case 45:e.sent&&(this.handleWxShare(this.props.router.asPath),this.props.router.events.on("routeChangeComplete",this.handleWxShare));case 47:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleWxShare",value:function(e){if(window.wx&&window.wx.hasDoneConfig){var t=this.props,n=t.user,r=t.site,a=n.userInfo,i=r.webConfig.setSite,o=i.siteName,s=i.siteIntroduction,c=i.siteHeaderLogo,u=i.siteFavicon,d=a||{},l=d.nickname,f=d.avatarUrl,p=d.signature,b=d.id,h=document.title,v=s?s.length>35?"".concat(s.substr(0,35),"..."):s:"\u5728\u8fd9\u91cc\uff0c\u53d1\u73b0\u66f4\u591a\u7cbe\u5f69\u5185\u5bb9",m=window.location.href,g=c||u;e.match(/\/thread\/\d+/)||e.match(/\/user\/\d+/)||("/my"===e&&l&&(h="".concat(l,"\u7684\u4e3b\u9875"),g=f,v=p?p.length>35?"".concat(p.substr(0,35),"..."):p:"\u5728\u8fd9\u91cc\uff0c\u53d1\u73b0\u66f4\u591a\u7cbe\u5f69\u5185\u5bb9",m="".concat(window.location.origin,"/user/").concat(b)),(e.includes("/forum/partner-invite")||e.match(/\/user\/(username|wx|phone)-login/)||e.includes("/user/register"))&&(h="\u9080\u8bf7\u60a8\u52a0\u5165".concat(o)),(e.includes("/invite")||"/"===e)&&(h="".concat(l,"\u9080\u8bf7\u60a8\u52a0\u5165").concat(o)),e.includes("/message?page=chat")&&(h="\u6211\u7684\u79c1\u4fe1 - ".concat(o),m="".concat(window.location.origin,"/message")),Object(T.a)(h,v,m,g))}}},{key:"setAppCommonStatus",value:function(e){var t=this.props.site;switch([B.j,B.m,B.g,B.l,B.h,B.n,B.k].includes(e.code)&&J.a.saveCurrentUrl(),e.code){case 0:break;case B.u:t.setCloseSiteConfig(e.data),E.a.redirect({url:"/close"});break;case B.e:break;case B.w:Object(A.a)(),window.location.reload();break;case B.f:E.a.redirect({url:"/404"});break;case B.j:Object(A.a)(),J.a.gotoLogin();break;case B.m:Object(A.a)(),J.a.saveAndRedirect("/user/register");break;case B.g:E.a.push({url:"/user/status?statusCode=2"});break;case B.l:E.a.push({url:"/user/status?statusCode=-4007"});break;case B.h:E.a.push({url:"/user/status?statusCode=-4009"});break;case B.n:J.a.saveAndRedirect("/user/supplementary");break;case B.i:E.a.redirect({url:"/"});break;case B.k:J.a.saveAndRedirect("/forum/partner-invite");break;default:t.setErrPageType("site"),E.a.redirect({url:"/500"})}}},{key:"checkJump",value:function(){var e=this.props.router,t=J.a.getUrl();if(t)if(new URL(t).pathname===e.asPath)J.a.clear();else if("/"===e.asPath)return J.a.restore(),!1;return!0}},{key:"isPass",value:function(e){var t=this.props,n=t.site,r=t.router,a=t.user,i=t.commonLogin;if(n&&n.webConfig){var o,s;if(e&&this.setState({isNoSiteData:!1}),"/close"!==r.asPath&&n.closeSiteConfig)return E.a.redirect({url:"/close"}),!1;if(a.isLogin()){if(!n.isOffiaccountOpen&&!n.isMiniProgramOpen&&"/user/bind-phone"!==r.asPath&&n.isSmsOpen&&!a.mobile)return J.a.saveAndRedirect("/user/bind-phone"),!1;if("/user/bind-nickname"!==r.asPath&&!a.nickname)return i.needToCompleteExtraInfo=a.userStatus===q.a.SUPPLEMENTARY,J.a.saveAndRedirect("/user/bind-nickname"),!1;if(a.userStatus===U.b&&!B.t.includes(r.pathname))return E.a.replace({url:"/user/status?statusCode=".concat(a.userStatus)}),!1}if("pay"===(null===n||void 0===n||null===(o=n.webConfig)||void 0===o||null===(s=o.setSite)||void 0===s?void 0:s.siteMode)){if(B.x.some((function(e){return r.asPath.match(e)})))return this.checkJump(),!0;var c=r.query.inviteCode,u=c?"?inviteCode=".concat(c):"";if(null===a||void 0===a||!a.paid)return J.a.saveAndRedirect("/forum/partner-invite".concat(u)),!1}}return this.checkJump()}},{key:"filterProps",value:function(e){var t=X({},e);return delete t.serverUser,delete t.serverSite,delete t.user,delete t.site,t}},{key:"canPublish",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=this.props,r=n.user,a=n.site,i=n.thread;return Object(_.a)(r,a,t,null===i||void 0===i||null===(e=i.threadData)||void 0===e?void 0:e.threadId)}},{key:"render",value:function(){var e=this.state,n=e.isNoSiteData,a=e.isPass;return"static"===this.props.site.platform?null:n||!a?Object(r.jsx)("div",{className:W.a.loadingBox,children:Object(r.jsx)(R.a,{className:W.a.loading,name:"LoadingOutlined",size:"large"})}):Object(r.jsx)(t,X({canPublish:this.canPublish},this.filterProps(this.props)))}}]),s}(P.a.Component))||a)||a)||a)||a)||a)||a;return Object(D.withRouter)(o)}}).call(this,n("ntbh"))},RiVy:function(e,t,n){"use strict";function r(){if("undefined"===typeof window)return!1;var e=window.navigator.userAgent.toLowerCase();return/micromessenger/.test(e)}n.d(t,"a",(function(){return r}))},"Tk/S":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("lY1M");function a(e,t,n,a){r.b.env("weixin")&&window.wx&&window.wx.ready((function(){var r={title:e||"Discuz! Q",desc:t&&""!=t?t:e||"Discuz! Q",link:n||window.location.href,imgUrl:a};wx.updateAppMessageShareData(r),wx.updateTimelineShareData(r)}))}},Xrmz:function(e,t,n){"use strict";t.a={loadingBox:"rKwiNl2JOBH1dcaoggUsN",loading:"_3_kaucwAnhguPyKqHJUwsL"}},"o6+f":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/download",function(){return n("7zbd")}])},rGXy:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.getWXConfig=function(){return p.apply(this,arguments)};var a=r(n("o0o1")),i=r(n("lSNA")),o=r(n("QILm"));n("ls82");var s=r(n("yXPU")),c=n("0QFe"),u=r(n("m4Ii"));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={messageText:{type:"string",required:!0},recipientUsername:{type:"string",required:!0},imageUrl:{type:"string"},attachmentId:{type:"number"}};function p(){return(p=(0,s.default)(a.default.mark((function e(){var t,n,r,i,s,d,p,b,h=arguments;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.length>0&&void 0!==h[0]?h[0]:{},e.prev=1,n=t.params,r=void 0===n?{}:n,i=t.data,s=void 0===i?{}:i,d=(0,o.default)(t,["params","data"]),p=l(l({url:"/apiv3/offiaccount/jssdk",method:"GET",params:r,data:s},d),{},{validateRules:f}),e.next=6,u.default.dispatcher(p);case 6:return b=e.sent,e.abrupt("return",b);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",(0,c.handleError)(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}},yq1k:function(e,t,n){"use strict";var r=n("I+eb"),a=n("TWQb").includes,i=n("RNIs");r({target:"Array",proto:!0,forced:!n("rkAj")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},zDaA:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("n4oF");function a(e){var t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)?"h5":"pc";if(!Object(r.a)()){var n=90===Math.abs(window.orientation),a=window.innerWidth;"pc"===t&&a<800&&(t="h5"),"h5"===t&&!n&&a>=800&&(t="pc")}return t}}},[["o6+f",1,0,3,4,2]]]);