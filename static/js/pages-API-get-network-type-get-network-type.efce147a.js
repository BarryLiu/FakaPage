(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-network-type-get-network-type"],{1896:function(t,e,n){"use strict";n.r(e);var i=n("5406"),o=n("25e7");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);var a,c=n("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"35bb0698",null,!1,i["a"],a);e["default"]=r.exports},"25e7":function(t,e,n){"use strict";n.r(e);var i=n("797e"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=o.a},5406:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var i={pageHead:n("5a90").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"40rpx"}},[n("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("网络状态")]),!1===t.hasNetworkType?[n("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v("未获取")]),n("v-uni-view",{staticClass:"uni-hello-text uni-center uni-common-mt"},[t._v("请点击下面按钮获取网络状态")])]:t._e(),!0===t.hasNetworkType?[n("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v(t._s(t.networkType))])]:t._e(),!0===t.hasNetworkType&&"wifi"===t.networkType?n("v-uni-view",{staticClass:"uni-textarea uni-common-mt"},[n("v-uni-textarea",{attrs:{value:t.connectedWifi}})],1):t._e()],2),n("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getNetworkType.apply(void 0,arguments)}}},[t._v("获取设备网络状态")]),n("v-uni-button",{staticClass:"uni-common-mt",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._v("清空")])],1)],1)],1)},u=[]},"797e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("2f62");var i={data:function(){return{title:"getNetworkType",hasNetworkType:!1,networkType:"",connectedWifi:""}},onUnload:function(){this.networkType="",this.hasNetworkType=!1},methods:{getNetworkType:function(){var t=this;uni.getNetworkType({success:function(e){console.log(e),t.hasNetworkType=!0,t.networkType=e.subtype||e.networkType},fail:function(){uni.showModal({content:"获取失败！",showCancel:!1})}})},clear:function(){this.hasNetworkType=!1,this.networkType="",this.connectedWifi=""}}};e.default=i}}]);