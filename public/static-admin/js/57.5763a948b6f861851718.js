(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"16ZA":function(t,e,a){"use strict";a.r(e);var i=a("XlDs"),s=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e.default=s.a},"6Z5u":function(t,e,a){"use strict";a.r(e);var i=a("zqJN"),s=a("16ZA");for(var r in s)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(r);var o=a("KHd+"),n=Object(o.a)(s.default,i.a,i.b,!1,null,null,null);e.default=n.exports},XlDs:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(a("QbLZ"));a("lpfh");var s=r(a("xbrd"));function r(t){return t&&t.__esModule?t:{default:t}}e.default=(0,i.default)({name:"site-data-rules"},s.default)},xbrd:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=l(a("m1cH")),s=l(a("4gYi")),r=l(a("pNQN")),o=l(a("VVfg")),n=l(a("6NK7"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Card:s.default,CardRow:r.default},data:function(){return{radio:"",exhibition:"",upgradeData:[],groupEdit:!1,counter:"",toppingList:[]}},created:function(){this.initializeData(),this.toppingListObtain()},methods:{initializeData:function(){var t=this;this.appFetch({url:"forum_get_v3",method:"get",data:{}}).then((function(e){if(e.errors)t.$message.error(e.errors[0].code);else{if(0!==e.Code)return void t.$message.error(e.Message);var a=e.Data;t.radio=a.setSite.openViewCount,t.exhibition=a.other.threadTab}}))},jumpDataRules:function(){this.$router.push({path:"/admin/site-sort-set"})},ruleSubmission:function(){var t=this;this.appFetch({url:"bopen_view_count_post",method:"post",data:{openViewCount:Number(this.radio)}}).then((function(e){if(e.errors)t.$message.error(e.errors[0].code);else{if(0!==e.Code)return void t.$message.error(e.Message);t.exhibitionPost(),t.upgradeData.length>0&&t.toppingSubmit()}}))},exhibitionPost:function(){var t=this;this.appFetch({url:"settings_post_v3",method:"post",data:{data:[{key:"thread_tab",value:this.exhibition,tag:"default"}]}}).then((function(e){if(e.errors)t.$message.error(e.errors[0].code);else{if(0!==e.Code)return void t.$message.error(e.Message);t.$message({message:"提交成功",type:"success"}),t.initializeData()}}))},toppingListObtain:function(){var t=this;this.appFetch({url:"thread_stick_get_v3",method:"get",data:{}}).then((function(e){if(e.errors)t.$message.error(e.errors[0].code);else{if(0!==e.Code)return void t.$message.error(e.Message);t.upgradeData=e.Data}}))},toppingSubmit:function(){var t=[];this.upgradeData.forEach((function(e,a){t.push({id:e.threadId,sort:a+1})})),this.toppingListSort(t)},toppingListSort:function(t){var e=this;this.appFetch({url:"stick_sort_set_post_v3",method:"post",data:{data:t}}).then((function(t){if(t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);e.toppingListObtain()}}))},rechargePost:function(){var t=this;this.appFetch({url:"settings_post_v3",method:"post",data:{data:[{key:"site_charge",value:this.recharge?1:0,tag:"default"}]}}).then((function(e){if(e.errors)t.$message.error(e.errors[0].code);else{if(0!==e.Code)return void t.$message.error(e.Message);t.$message({message:"提交成功",type:"success"}),t.loadFunctionStatus()}})).catch((function(e){t.$message.error("操作失败！")}))},relieveTopping:function(t){var e=this;this.appFetch({url:"threads_batch_post_v3",method:"post",data:{ids:t.row.threadId,isSticky:0}}).then((function(t){if(t.errors)e.$message.error(t.errors[0].code);else{if(0!==t.Code)return void e.$message.error(t.Message);e.$message({message:"取消置顶成功",type:"success"}),e.toppingListObtain()}}))},relieveToppingopen:function(t){var e=this;this.$confirm("确认要取消置顶贴子吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",lockScroll:!1}).then((function(){e.relieveTopping(t)})).catch((function(){e.$message({type:"info",message:"已取消"})}))},riseOperation:function(t){var e=this;this.groupEdit=!0;var a=[].concat((0,i.default)(this.upgradeData)),s=[].concat((0,i.default)(this.upgradeData));s.splice(t.$index,1),s.splice(t.$index-1,0,a[t.$index]),this.counter=t.$index-1,setTimeout((function(){e.counter=""}),500),this.upgradeData=s},dropOperation:function(t){var e=this;this.groupEdit=!0;var a=[].concat((0,i.default)(this.upgradeData)),s=[].concat((0,i.default)(this.upgradeData));s.splice(t.$index,1),s.splice(t.$index+1,0,a[t.$index]),this.counter=t.$index+1,setTimeout((function(){e.counter=""}),500),this.upgradeData=s},tableRowClassName:function(t){t.row;return t.rowIndex===this.counter?"success-row":""},filterContent:function(t){var e=o.default.getLItem("Emoji");return n.default.convertEmoticon(t,e)}}}},zqJN:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"site-sort-set-box"},[a("div",[a("div",{staticClass:"sort-switch-header"},[a("p",{staticClass:"sort-desc",on:{click:t.jumpDataRules}},[t._v("推荐首页")]),t._v(" "),a("p",{staticClass:"data-rules repeat"},[t._v("数据规则")])]),t._v(" "),a("Card",{staticClass:"sort-switch-radio"},[a("p",{staticClass:"sort-switch-radio_title"},[t._v("阅读数计算方式")]),t._v(" "),a("div",{staticClass:"sort-switch-radio_option"},[a("el-radio",{class:"1"===t.radio?"sort-switch-radio_cont":"",attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("仅点进帖子详情页增加阅读数")])],1),t._v(" "),a("div",[a("el-radio",{class:"0"===t.radio?"sort-switch-radio_cont":"",attrs:{label:"0"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("操作首页帖子、进入详情页，增加阅读数")])],1),t._v(" "),a("p",{staticClass:"sort-switch-radio_explain"},[t._v('说明：操作包括点赞、点击"查看更多"、分享、下载附件、点开图片预览、播放视频、播放语音、点击帖子中包含的链接或话题。')])]),t._v(" "),a("Card",{staticClass:"sort-switch-exhibition"},[a("div",{staticClass:"sort-switch-exhibition__box"},[a("p",{staticClass:"sort-switch-exhibition__box-title"},[t._v("首页默认展示分类")]),t._v(" "),a("p",{staticClass:"sort-switch-exhibition__box-explain"},[t._v("用户进入首页时展示的内容分类")])]),t._v(" "),a("el-radio-group",{model:{value:t.exhibition,callback:function(e){t.exhibition=e},expression:"exhibition"}},[a("el-radio",{attrs:{label:1}},[t._v("所有")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("推荐")]),t._v(" "),a("el-radio",{attrs:{label:3}},[t._v("精华")]),t._v(" "),a("el-radio",{attrs:{label:4}},[t._v("已关注")])],1)],1),t._v(" "),a("p",{staticClass:"user-rol-table__pay"},[t._v("首页置顶管理")]),t._v(" "),t.upgradeData.length<=0?a("p",{staticClass:"user-rol-table__pay"},[t._v("暂无置顶贴，可在内容-内容管理中进行设置。")]):t._e(),t._v(" "),t.upgradeData.length>0?a("div",{staticClass:"user-rol-table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.upgradeData,"row-class-name":t.tableRowClassName},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{width:"150",label:"展示顺序"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"user-rol-table-box"},[e.$index!==t.upgradeData.length-1?a("span",{class:t.groupEdit?"user-rol-table__frame":"",on:{click:function(a){return t.dropOperation(e)}}},[a("i",{staticClass:"iconfont icon-xiangxiaicon table-icon"})]):t._e(),t._v(" "),0!==e.$index?a("span",{class:e.$index===t.upgradeData.length-1?t.groupEdit?"user-rol-table__right user-rol-table__frame":"user-rol-table__rights":t.groupEdit?"user-rol-table__frame":"",on:{click:function(a){return t.riseOperation(e)}}},[a("i",{staticClass:"iconfont icon-xiangshang table-icon"})]):t._e()])]}}],null,!1,3256056912)}),t._v(" "),a("el-table-column",{attrs:{label:"帖子标题/内容",width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"user-rol-table-box__text",attrs:{href:"/thread/"+e.row.threadId,target:"_blank"},domProps:{innerHTML:t._s(t.$xss(t.filterContent(e.row.title)))}})]}}],null,!1,3743118087)}),t._v(" "),a("el-table-column",{attrs:{width:"150",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{staticClass:"site-function-set-box__topping"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.relieveToppingopen(e)}}},[t._v("取消置顶")])],1)]}}],null,!1,4081471564)}),t._v(" "),a("el-table-column",[a("p")])],1)],1):t._e(),t._v(" "),a("el-button",{staticClass:"site-sort-set-box__btn",attrs:{type:"primary",size:"medium"},on:{click:t.ruleSubmission}},[t._v("提交")])],1)])},s=[]}}]);