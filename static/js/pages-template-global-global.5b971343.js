(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-global-global"],{1299:function(t,e,n){"use strict";n.r(e);var a=n("c4bd"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},"26a5":function(t,e,n){"use strict";n.r(e);var a=n("677e"),i=n("1299");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("d805");var u,o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"74e0614f",null,!1,a["a"],u);e["default"]=c.exports},"5ade":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".button[data-v-74e0614f]{margin:%?30?%;color:#007aff}.text[data-v-74e0614f]{margin-left:%?30?%}",""]),t.exports=e},"677e":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"pa"},[n("v-uni-view",{staticClass:"uni-divider"},[n("v-uni-view",{staticClass:"uni-divider__content"},[t._v("globalData")]),n("v-uni-view",{staticClass:"uni-divider__line"})],1),n("v-uni-text",{staticClass:"text"},[t._v("globalData中text的值: "+t._s(t.gd.test))]),n("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setGD()}}},[t._v("修改上述值为123")]),n("v-uni-view",{staticClass:"uni-divider"},[n("v-uni-view",{staticClass:"uni-divider__content"},[t._v("vuex")]),n("v-uni-view",{staticClass:"uni-divider__line"})],1),n("v-uni-text",{staticClass:"text"},[t._v("vuex中hasLogin的值: "+t._s(t.testvuex))]),n("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setVUEX(!0)}}},[t._v("修改上述值为true")]),n("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setVUEX(!1)}}},[t._v("修改上述值为false")])],1)},s=[]},c4bd:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),s=n("2f62"),u={data:function(){return{gd:{}}},computed:(0,i.default)({},(0,s.mapState)(["testvuex"])),methods:(0,i.default)((0,i.default)((0,i.default)({},(0,s.mapMutations)(["setTestTrue"])),(0,s.mapMutations)(["setTestFalse"])),{},{setGD:function(){getApp().globalData.test="123"},setVUEX:function(t){t?this.setTestTrue(this.$store.state):this.setTestFalse(this.$store.state)}}),onShow:function(){this.gd=getApp().globalData}};e.default=u},d805:function(t,e,n){"use strict";var a=n("e848f"),i=n.n(a);i.a},e848f:function(t,e,n){var a=n("5ade");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("3b94e225",a,!0,{sourceMap:!1,shadowMode:!1})}}]);