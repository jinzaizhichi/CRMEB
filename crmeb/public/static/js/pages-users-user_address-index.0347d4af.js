(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_address-index"],{"30ce":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".pictrueBox[data-v-3f1aaa8c]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-3f1aaa8c]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-3f1aaa8c]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-3f1aaa8c]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important}.home .homeCon .iconfont[data-v-3f1aaa8c]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-3f1aaa8c]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-3f1aaa8c]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"400f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.fontcolor[data-v-dbd545fa]{color:var(--view-theme)}.addAddress .list[data-v-dbd545fa]{background-color:#fff}.addAddress .list .item[data-v-dbd545fa]{padding:%?30?%;border-top:%?1?% solid #eee}.addAddress .list .item .name[data-v-dbd545fa]{width:%?195?%;font-size:%?30?%;color:#333}.addAddress .list .item .address[data-v-dbd545fa]{flex:1;margin-left:%?20?%}.addAddress .list .item uni-input[data-v-dbd545fa]{width:%?475?%;font-size:%?30?%}.addAddress .list .item .placeholder[data-v-dbd545fa]{color:#ccc}.addAddress .list .item uni-picker[data-v-dbd545fa]{width:%?475?%}.addAddress .list .item uni-picker .picker[data-v-dbd545fa]{width:%?410?%;font-size:%?30?%}.addAddress .list .item uni-picker .iconfont[data-v-dbd545fa]{font-size:%?43?%}.addAddress .default[data-v-dbd545fa]{padding:0 %?30?%;height:%?90?%;background-color:#fff;margin-top:%?23?%}.addAddress .default uni-checkbox[data-v-dbd545fa]{margin-right:%?15?%}.addAddress .keepBnt[data-v-dbd545fa]{width:%?690?%;height:%?86?%;border-radius:%?50?%;text-align:center;line-height:%?86?%;margin:%?50?% auto;font-size:%?32?%;color:#fff}.addAddress .wechatAddress[data-v-dbd545fa]{width:%?690?%;height:%?86?%;border-radius:%?50?%;text-align:center;line-height:%?86?%;margin:0 auto;font-size:%?32?%;color:var(--view-theme);border:1px solid var(--view-theme)}',""]),t.exports=e},4399:function(t,e,i){"use strict";i.r(e);var n=i("52a9"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},5268:function(t,e,i){var n=i("30ce");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1cd84f54",n,!0,{sourceMap:!1,shadowMode:!1})},"52a9":function(t,e,i){"use strict";(function(t){var n=i("4ea4");i("4160"),i("d81d"),i("498a"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("b79f"),s=i("c159"),r=i("f9f5"),o=i("26cb"),d=n(i("b60d")),c=n(i("5411")),u={components:{home:d.default},mixins:[c.default],data:function(){return{regionDval:["浙江省","杭州市","滨江区"],cartId:"",pinkId:0,couponId:0,id:0,userAddress:{is_default:!1},region:["省","市","区"],valueRegion:[0,0,0],isAuto:!1,isShowAuth:!1,district:[],multiArray:[],multiIndex:[0,0,0],cityId:0,defaultRegion:["广东省","广州市","番禺区"],defaultRegionCode:"110101",news:"",noCoupon:0}},computed:(0,o.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getUserAddress()},deep:!0}},onLoad:function(t){this.isLogin?(this.cartId=t.cartId||"",this.pinkId=t.pinkId||0,this.couponId=t.couponId||0,this.id=t.id||0,this.noCoupon=t.noCoupon||0,this.news=t.new||"",uni.setNavigationBarTitle({title:t.id?"修改地址":"添加地址"}),this.getUserAddress(),this.getCityList()):(0,r.toLogin)()},methods:{getCityList:function(){var t=this,e=this;(0,s.getCity)().then((function(i){t.district=i.data,e.initialize()}))},initialize:function(){var t=this,e=this,i=[],n=[],a=[],s=e.district[0].c||[];s.length&&s[0].c;e.district.forEach((function(e,n){i.push(e.n),e.n===t.region[0]&&(t.valueRegion[0]=n,t.multiIndex[0]=n)})),e.district[this.valueRegion[0]].c.forEach((function(e,i){t.region[1]==e.c&&(t.valueRegio[1]=i,t.multiIndex[1]=i),n.push(e.n)})),e.district[this.valueRegion[0]].c[this.valueRegion[1]].c.forEach((function(e,i){t.region[2]==e.c&&(t.valueRegio[2]=i,t.multiIndex[2]=i),a.push(e.n)})),this.multiArray=[i,n,a]},bindRegionChange:function(t){var e=this.multiIndex,i=this.district[e[0]]||{c:[]},n=i.c[e[1]]||{v:0},a=this.multiArray,s=t.detail.value;this.region=[a[0][s[0]],a[1][s[1]],a[2][s[2]]],this.cityId=n.v,this.valueRegion=[0,0,0],this.initialize()},bindMultiPickerColumnChange:function(t){var e=this,i=t.detail.column,n=t.detail.value,a=this.district[n]||{c:[]},s=e.multiArray,r=e.multiIndex;switch(r[i]=n,i){case 0:var o=a.c[0]||{c:[]};s[1]=a.c.map((function(t){return t.n})),s[2]=o.c.map((function(t){return t.n}));break;case 1:var d=e.district[r[0]].c[r[1]].c||[];s[2]=d.map((function(t){return t.n}));break;case 2:break}this.multiArray=s,this.multiIndex=r},onLoadFun:function(){this.getUserAddress()},authColse:function(t){this.isShowAuth=t},toggleTab:function(t){this.$refs[t].show()},onConfirm:function(t){this.region=t.checkArr[0]+"-"+t.checkArr[1]+"-"+t.checkArr[2]},getUserAddress:function(){var t=this;if(!this.id)return!1;var e=this;(0,a.getAddressDetail)(this.id).then((function(i){var n=[i.data.province,i.data.city,i.data.district];e.$set(e,"userAddress",i.data),e.$set(e,"region",n),t.region,e.cityId=i.data.city_id}))},getWxAddress:function(){var t=this;uni.authorize({scope:"scope.address",success:function(e){uni.chooseAddress({success:function(e){var i={};i.province=e.provinceName,i.city=e.cityName,i.district=e.countyName,(0,a.editAddress)({address:i,is_default:1,real_name:e.userName,post_code:e.postalCode,phone:e.telNumber,detail:e.detailInfo,id:0,type:1}).then((function(e){return setTimeout((function(){if(t.cartId){var i=t.cartId,n=t.pinkId,a=t.couponId;t.cartId="",t.pinkId="",t.couponId="",uni.navigateTo({url:"/pages/users/order_confirm/index?cartId="+i+"&addressId="+(t.id?t.id:e.data.id)+"&pinkId="+n+"&couponId="+a+"&new="+t.news+"&noCoupon="+t.noCoupon})}else uni.navigateBack({delta:1})}),1e3),t.$util.Tips({title:"添加成功",icon:"success"})})).catch((function(e){return t.$util.Tips({title:e})}))},fail:function(e){if("chooseAddress:cancel"==e.errMsg)return t.$util.Tips({title:"取消选择"})}})},fail:function(e){uni.showModal({title:"您已拒绝导入微信地址权限",content:"是否进入权限管理，调整授权？",success:function(e){if(e.confirm)uni.openSetting({success:function(t){}});else if(e.cancel)return t.$util.Tips({title:"已取消！"})}})}})},getAddress:function(){var t=this,e=this;e.$wechat.openAddress().then((function(i){(0,a.editAddress)({id:t.id,real_name:i.userName,phone:i.telNumber,address:{province:i.provinceName,city:i.cityName,district:i.countryName},detail:i.detailInfo,is_default:1,post_code:i.postalCode,type:1}).then((function(){setTimeout((function(){if(e.cartId){var t=e.cartId,i=e.pinkId,n=e.couponId;e.cartId="",e.pinkId="",e.couponId="",uni.navigateTo({url:"/pages/users/order_confirm/index?cartId="+t+"&addressId="+(e.id?e.id:res.data.id)+"&pinkId="+i+"&couponId="+n+"&new="+e.news+"&noCoupon="+e.noCoupon})}else uni.navigateTo({url:"/pages/users/user_address_list/index"})}),1e3),e.$util.Tips({title:"添加成功",icon:"success"})})).catch((function(t){return e.$util.Tips({title:t||"添加失败"})}))})).catch((function(t){}))},formSubmit:function(t){var e=this,i=t.detail.value;if(!i.real_name.trim())return e.$util.Tips({title:"请填写收货人姓名"});if(!i.phone)return e.$util.Tips({title:"请填写联系电话"});if(!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(i.phone))return e.$util.Tips({title:"请输入正确的手机号码"});if("省"==e.region[0])return e.$util.Tips({title:"请选择所在地区"});if(!i.detail.trim())return e.$util.Tips({title:"请填写详细地址"});i.id=e.id;var n=e.region;i.address={province:n[0],city:n[1],district:n[2],city_id:e.cityId},i.is_default=e.userAddress.is_default?1:0,uni.showLoading({title:"保存中",mask:!0}),(0,a.editAddress)(i).then((function(t){e.id?e.$util.Tips({title:"修改成功",icon:"success"}):e.$util.Tips({title:"添加成功",icon:"success"}),setTimeout((function(){if(!e.cartId)return history.back();var i=e.cartId,n=e.pinkId,a=e.couponId;e.cartId="",e.pinkId="",e.couponId="",uni.navigateTo({url:"/pages/users/order_confirm/index?new="+e.news+"&cartId="+i+"&addressId="+(e.id?e.id:t.data.id)+"&pinkId="+n+"&couponId="+a+"&noCoupon="+e.noCoupon})}),1e3)})).catch((function(t){return e.$util.Tips({title:t})}))},ChangeIsDefault:function(t){this.$set(this.userAddress,"is_default",!this.userAddress.is_default)}}};e.default=u}).call(this,i("5a52")["default"])},"62bb":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("26cb"),s=n(i("5411")),r={name:"Home",props:{},mixins:[s.default],data:function(){return{top:"545"}},computed:(0,a.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=r},"74e86":function(t,e,i){"use strict";var n=i("5268"),a=i.n(n);a.a},"9a25":function(t,e,i){var n=i("400f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7c9c46e6",n,!0,{sourceMap:!1,shadowMode:!1})},"9b93":function(t,e,i){"use strict";var n=i("9a25"),a=i.n(n);a.a},b60d:function(t,e,i){"use strict";i.r(e);var n=i("c819"),a=i("e6f5");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("74e86");var r,o=i("f0c5"),d=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"3f1aaa8c",null,!1,n["a"],r);e["default"]=d.exports},c819:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)],1)},s=[]},e6f5:function(t,e,i){"use strict";i.r(e);var n=i("62bb"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},f914:function(t,e,i){"use strict";i.r(e);var n=i("fcd2"),a=i("4399");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("9b93");var r,o=i("f0c5"),d=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"dbd545fa",null,!1,n["a"],r);e["default"]=d.exports},fcd2:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"addAddress"},[i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"name"},[t._v("姓名")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入姓名",name:"real_name",value:t.userAddress.real_name,"placeholder-class":"placeholder"}})],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"name"},[t._v("联系电话")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入联系电话",name:"phone",value:t.userAddress.phone,"placeholder-class":"placeholder",pattern:"\\d*"}})],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"name"},[t._v("所在地区")]),i("v-uni-view",{staticClass:"address"},[i("v-uni-picker",{attrs:{mode:"multiSelector",value:t.valueRegion,range:t.multiArray},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindRegionChange.apply(void 0,arguments)},columnchange:function(e){arguments[0]=e=t.$handleEvent(e),t.bindMultiPickerColumnChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"acea-row"},[i("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.region[0])+"，"+t._s(t.region[1])+"，"+t._s(t.region[2]))]),i("v-uni-view",{staticClass:"iconfont icon-dizhi fontcolor"})],1)],1)],1)],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"name"},[t._v("详细地址")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请填写具体地址",name:"detail","placeholder-class":"placeholder",value:t.userAddress.detail}})],1)],1),i("v-uni-view",{staticClass:"default acea-row row-middle",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChangeIsDefault.apply(void 0,arguments)}}},[i("v-uni-checkbox-group",[i("v-uni-checkbox",{attrs:{checked:!!t.userAddress.is_default}}),t._v("设置为默认地址")],1)],1),i("v-uni-button",{staticClass:"keepBnt bg-color",attrs:{"form-type":"submit"}},[t._v("立即保存")]),this.$wechat.isWeixin()&&!t.id?i("v-uni-view",{staticClass:"wechatAddress",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getAddress.apply(void 0,arguments)}}},[t._v("导入微信地址")]):t._e()],1)],1),i("home")],1)},s=[]}}]);