(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-navigator"],{d1ad:function(n,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return e}));var e={pageHead:a("5a90").default},i=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:n.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.navigateTo.apply(void 0,arguments)}}},[n._v("跳转新页面，并传递数据")]),a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.navigateBack.apply(void 0,arguments)}}},[n._v("返回上一页")]),a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.redirectTo.apply(void 0,arguments)}}},[n._v("在当前页面打开")]),a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.switchTab.apply(void 0,arguments)}}},[n._v("切换到模板选项卡")]),n.hasLeftWin?n._e():a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.reLaunch.apply(void 0,arguments)}}},[n._v("关闭所有页面，打开首页")]),a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.preloadPage.apply(void 0,arguments)}}},[n._v("预载复杂页面")]),a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.navigateToPreloadPage.apply(void 0,arguments)}}},[n._v("打开复杂页面")])],1)],1)],1)},u=[]},d949:function(n,t,a){"use strict";a.r(t);var e=a("daa2"),i=a.n(e);for(var u in e)"default"!==u&&function(n){a.d(t,n,(function(){return e[n]}))}(u);t["default"]=i.a},daa2:function(n,t,a){"use strict";var e=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e(a("5530")),u=a("2f62"),o="/pages/extUI/calendar/calendar",c={data:function(){return{title:"navigate"}},computed:(0,i.default)({},(0,u.mapState)({hasLeftWin:function(n){return!n.noMatchLeftWindow}})),methods:{navigateTo:function(){uni.navigateTo({url:"new-page/new-vue-page-1?data=Hello"})},navigateBack:function(){uni.navigateBack()},redirectTo:function(){uni.redirectTo({url:"new-page/new-vue-page-1"})},switchTab:function(){uni.switchTab({url:"/pages/tabBar/template/template"})},reLaunch:function(){this.hasLeftWin?uni.reLaunch({url:"/pages/component/view/view"}):uni.reLaunch({url:"/pages/tabBar/component/component"})},customAnimation:function(){uni.navigateTo({url:"new-page/new-vue-page-1?data=使用自定义动画打开页面",animationType:"slide-in-bottom",animationDuration:200})},preloadPage:function(){uni.preloadPage({url:o,success:function(){uni.showToast({title:"页面预载成功"})},fail:function(){uni.showToast({title:"页面预载失败"})}})},unPreloadPage:function(){uni.unPreloadPage({url:o})},navigateToPreloadPage:function(){uni.navigateTo({url:o})}}};t.default=c},e455:function(n,t,a){"use strict";a.r(t);var e=a("d1ad"),i=a("d949");for(var u in i)"default"!==u&&function(n){a.d(t,n,(function(){return i[n]}))}(u);var o,c=a("f0c5"),r=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);t["default"]=r.exports}}]);