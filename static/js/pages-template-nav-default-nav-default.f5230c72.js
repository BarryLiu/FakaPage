(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-default-nav-default"],{9376:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"nav-default",hasSetText:!1,hasSetBg:!1}},methods:{setText:function(){this.hasSetText=!this.hasSetText,uni.setNavigationBarTitle({title:this.hasSetText?"Hello uni-app":"默认导航栏"})},setBg:function(){this.hasSetBg=!this.hasSetBg,uni.setNavigationBarColor({frontColor:this.hasSetBg?"#ffffff":"#000000",backgroundColor:this.hasSetBg?"#007AFF":"#F8F8F8"})}}};e.default=n},a092:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return n}));var n={pageHead:a("5a90").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page"},[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-helllo-text"},[t._v("本页标题栏是uni-app的默认配置，开发者可在pages.json里配置文字内容及标题颜色，也可通过api接口将其改变。")]),a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setText.apply(void 0,arguments)}}},[t._v("改变标题栏文字")]),a("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setBg.apply(void 0,arguments)}}},[t._v("改变标题栏颜色")])],1)],1)],1)},u=[]},a531:function(t,e,a){"use strict";a.r(e);var n=a("a092"),i=a("c66c");for(var u in i)"default"!==u&&function(t){a.d(e,t,(function(){return i[t]}))}(u);var s,o=a("f0c5"),r=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"2b74a8ac",null,!1,n["a"],s);e["default"]=r.exports},c66c:function(t,e,a){"use strict";a.r(e);var n=a("9376"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=i.a}}]);