(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_coupon-index"],{"0a1f":function(t,i,e){t.exports=e.p+"static/img/noCoupon.cca04173.png"},"30ce":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".pictrueBox[data-v-3f1aaa8c]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-3f1aaa8c]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-3f1aaa8c]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-3f1aaa8c]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important}.home .homeCon .iconfont[data-v-3f1aaa8c]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-3f1aaa8c]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-3f1aaa8c]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=i},5268:function(t,i,e){var n=e("30ce");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("1cd84f54",n,!0,{sourceMap:!1,shadowMode:!1})},"5a08":function(t,i,e){var n=e("c11b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("3d8450fc",n,!0,{sourceMap:!1,shadowMode:!1})},"62b7":function(t,i,e){"use strict";var n=e("4ea4");e("99af"),e("ac1f"),e("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=e("c159"),a=e("f9f5"),s=e("26cb"),c=n(e("b60d")),r=n(e("5411")),u={components:{home:c.default},mixins:[r.default],data:function(){return{couponsList:[],loading:!1,isAuto:!1,isShowAuth:!1,navOn:1,page:1,limit:15,finished:!1}},computed:(0,s.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,i){t&&this.getUseCoupons()},deep:!0}},onLoad:function(){this.isLogin?this.getUseCoupons():(0,a.toLogin)()},onReachBottom:function(){this.getUseCoupons()},methods:{onNav:function(t){this.navOn=t,this.couponsList=[],this.page=1,this.finished=!1,this.getUseCoupons()},useCoupon:function(t){var i="";if(0==t.category_id&&""==t.product_id&&(i="/pages/goods_list/index?title=默认"),0!=t.category_id&&(i=1==t.category_type?"/pages/goods_list/index?cid="+t.category_id+"&title="+t.category_name:"/pages/goods_list/index?sid="+t.category_id+"&title="+t.category_name),""!=t.product_id){var e=t.product_id.split(","),n=e.length;i=1==n?"/pages/goods_details/index?id="+t.product_id:"/pages/goods_list/index?productId="+t.product_id+"&title=默认"}uni.navigateTo({url:i})},onLoadFun:function(){this.getUseCoupons()},authColse:function(t){this.isShowAuth=t},getUseCoupons:function(){var t=this;t.loading||t.finished||(t.loading=!0,uni.showLoading({title:"正在加载…"}),(0,o.getUserCoupons)(this.navOn,{page:this.page,limit:this.limit}).then((function(i){t.loading=!1,uni.hideLoading(),t.couponsList=t.couponsList.concat(i.data),t.finished=i.data.length<t.limit,t.page+=1})).catch((function(i){t.loading=!1,uni.showToast({title:i,icon:"none"})})))}}};i.default=u},"62bb":function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=e("26cb"),a=n(e("5411")),s={name:"Home",props:{},mixins:[a.default],data:function(){return{top:"545"}},computed:(0,o.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var i=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(i.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};i.default=s},"73c3":function(t,i,e){"use strict";e.r(i);var n=e("62b7"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},"74e86":function(t,i,e){"use strict";var n=e("5268"),o=e.n(n);o.a},"87a4":function(t,i,e){"use strict";var n=e("5a08"),o=e.n(n);o.a},"981f":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADg0lEQVRYR72X34uUZRTHP+d5cUnzx0YmoRGVQXXTOq4GFVOB3uTOtF140S5Um0J4k5nQbQhBUFSsSEgUOl2k1FXjOP4BK0kXOzob1YWFxSq6FILuoG22z3PifXffcXb2/TXs5Hv1wvM93/N9zjnP85wjZPy0zCorFETIC/QpPALcF5gLf6ryu8CEEcawVGWQRhZqSQNplU3OsRd4HTBp+GBdcQglazjUM0A9ySZWgB7AzPbzqYG3MzmNAymjpsh+ETQKEilAK0GISwqbluT8tnHdwkhPkYl2vkUCtMpzznESWNUl5yFNwwgDUuB0K+8CAf7OHQGg286bIizkWyPRFODnXLdQU+1a2OMCWDcFNoc10RRgK4yy1ILLmjNl1HuJd+ZOMHCrTM4znM1q3w2cNeT8IxoIsBWOAG90Smy2fIcbf7lTsxB/xCuyW/QUq53lWhiNzGwrH8M8/iHu/Hsw/WNmsyZQcUbpFa0y5BzHOmWQrWVEFWYu4n56q1PzAG+EIbEVDgN7OmGQ9a8gm4/DVBl61qKTX6CXvoqm8O4GeyOO/rDMVjgj8PSiG2r9EKzdhv72Ady8sGDZbL8Idz3QFOAvuvprC3HLH0LW7QBvBXrh40gBCmf8CFwB7o9CmML89d34Gf31ffTyN8gTHyEb352Dz0fA/9Vr4+gv+5DerbDhVWR1H4iHOzcMf0/GRWDKFzALeFEIeeoUsu7F+Oy0CAhA9maw4+bnZnA/bE/Krk0W8OCbyJOfZxfQhtRLJXTyy1QBsSkIKjVMQxRNewTaMG58EG5djRcgXIktwtDKPPs93PNMNEmSgH+mcLWdiYcrLMLEYyhJaUgQoH98hl4+nna6g2M4LPB1EjI2DQkCguJzM8kRUIYzXcUmPw5r+heTxQm4cR43sStt9844eoPHaPYER0UYibOQe1+IXlrxKFyvRV8y0+fSBBz1iuwKBGiZnLvDz7Ex5CR8joM75A42JA4OLiuyz/d7uyX7Fs8tx49nX1rslrheNzX65QBugYAgFf4QYjmNsHKJTuLMGwby0tKeL2rL/z3B8wZO/g8iGsZQkAHGWtVFDyZz41ipW+kQoS7KSOvOQxHxo9lcTXzShU75oKmxP8x5e27Sh9MyOSvsFQmG01T8vAO/kShZx6GeQRIvhKyE+M2rtRQE8gp9Ag83x3P4S5kfzw1jCFXZwXSWQv4PB8M8tp2+a6cAAAAASUVORK5CYII="},"9d8f":function(t,i,e){"use strict";var n=e("c654"),o=e.n(n);o.a},b4a8:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{style:t.colorStyle},[n("v-uni-view",{staticClass:"navbar acea-row row-around"},[n("v-uni-view",{staticClass:"item acea-row row-center-wrapper",class:{on:1===t.navOn},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onNav(1)}}},[t._v("未使用")]),n("v-uni-view",{staticClass:"item acea-row row-center-wrapper",class:{on:2===t.navOn},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onNav(2)}}},[t._v("已使用/过期")])],1),t.couponsList.length?n("v-uni-view",{staticClass:"coupon-list"},t._l(t.couponsList,(function(i,o){return n("v-uni-view",{key:o,staticClass:"item acea-row row-center-wrapper",class:{svip:4===i.receive_type},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.useCoupon(i)}}},[n("v-uni-view",{staticClass:"moneyCon acea-row row-center-wrapper"},[n("v-uni-view",{staticClass:"money",class:0==i._type?"moneyGray":""},[n("v-uni-view",[t._v("￥"),n("v-uni-text",{staticClass:"num"},[t._v(t._s(i.coupon_price))])],1),i.use_min_price>0?n("v-uni-view",{staticClass:"pic-num"},[t._v("满"+t._s(i.use_min_price)+"元可用")]):n("v-uni-view",{staticClass:"pic-num"},[t._v("无门槛券")])],1)],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"condition"},[n("v-uni-view",{staticClass:"name line2"},[0===i.applicable_type?n("v-uni-view",{staticClass:"line-title",class:0===i._type?"bg-color-huic":"bg-color-check"},[t._v("通用劵")]):1===i.applicable_type?n("v-uni-view",{staticClass:"line-title",class:0===i._type?"bg-color-huic":"bg-color-check"},[t._v("品类券")]):n("v-uni-view",{staticClass:"line-title",class:0===i._type?"bg-color-huic":"bg-color-check"},[t._v("商品券")]),4===i.receive_type?n("v-uni-image",{staticClass:"pic",attrs:{src:e("981f")}}):t._e(),n("v-uni-text",[t._v(t._s(i.coupon_title))])],1)],1),n("v-uni-view",{staticClass:"data acea-row row-between-wrapper"},[n("v-uni-view",[t._v(t._s(i.add_time)+"-"+t._s(i.end_time))]),0==i._type?n("v-uni-view",{staticClass:"bnt gray"},[t._v(t._s(i._msg))]):n("v-uni-view",{staticClass:"bnt bg-color"},[t._v(t._s(i._msg))])],1)],1)],1)})),1):t._e(),t.couponsList.length||2!==t.page?t._e():n("v-uni-view",{staticClass:"noCommodity"},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:e("0a1f")}})],1)],1),n("home")],1)},a=[]},b60d:function(t,i,e){"use strict";e.r(i);var n=e("c819"),o=e("e6f5");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("74e86");var s,c=e("f0c5"),r=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"3f1aaa8c",null,!1,n["a"],s);i["default"]=r.exports},c11b:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.navbar[data-v-0b71d319]{position:fixed;top:0;left:0;width:100%;height:%?90?%;background-color:#fff;z-index:9}.navbar .item[data-v-0b71d319]{border-top:%?5?% solid transparent;border-bottom:%?5?% solid transparent;font-size:%?30?%;color:#999}.navbar .item.on[data-v-0b71d319]{border-bottom-color:var(--view-theme);color:#282828}.coupon-list[data-v-0b71d319]{margin-top:%?122?%}.noCommodity[data-v-0b71d319]{margin-top:%?300?%}',""]),t.exports=i},c654:function(t,i,e){var n=e("e6a4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("b52e9e10",n,!0,{sourceMap:!1,shadowMode:!1})},c819:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{style:t.colorStyle},[e("v-uni-view",{staticStyle:{"touch-action":"none"}},[e("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?e("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[e("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),e("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),e("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),e("v-uni-view",{staticClass:"pictrueBox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.open.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"pictrue"},[e("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)],1)},a=[]},ceec:function(t,i,e){"use strict";e.r(i);var n=e("b4a8"),o=e("73c3");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("9d8f"),e("87a4");var s,c=e("f0c5"),r=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"0b71d319",null,!1,n["a"],s);i["default"]=r.exports},e6a4:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".money[data-v-0b71d319]{display:flex;flex-direction:column;justify-content:center}.pic-num[data-v-0b71d319]{color:#fff;font-size:%?24?%}.coupon-list .item .text .condition[data-v-0b71d319]{display:flex;align-items:center}.coupon-list .item .text .condition .name[data-v-0b71d319]{font-size:%?26?%;font-weight:500;display:flex;align-items:center}.coupon-list .item .text .condition .pic[data-v-0b71d319]{width:%?30?%;height:%?30?%;display:block;margin-right:%?10?%;display:inline-block;vertical-align:middle}.condition .line-title[data-v-0b71d319]{width:%?70?%;height:%?32?%!important;line-height:%?30?%;text-align:center;box-sizing:border-box;background:#fff7f7;border:1px solid var(--view-theme);opacity:1;border-radius:%?20?%;font-size:%?18?%!important;color:var(--view-theme);margin-right:%?12?%;text-align:center;display:inline-block;vertical-align:middle}.condition .line-title.bg-color-huic[data-v-0b71d319]{border-color:#bbb!important;color:#bbb!important;background-color:#f5f5f5!important}",""]),t.exports=i},e6f5:function(t,i,e){"use strict";e.r(i);var n=e("62bb"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a}}]);