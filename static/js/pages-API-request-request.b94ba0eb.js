(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-request-request"],{"09f0":function(e,t,n){"use strict";function a(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var u,o=e[Symbol.iterator]();!(a=(u=o.next()).done);a=!0)if(n.push(u.value),t&&n.length===t)break}catch(s){r=!0,i=s}finally{try{a||null==o["return"]||o["return"]()}finally{if(r)throw i}}return n}}n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},"0d21":function(e,t,n){"use strict";function a(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},3835:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var a=o(n("0d21")),r=o(n("09f0")),i=o(n("06c5")),u=o(n("3d8c"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return(0,a.default)(e)||(0,r.default)(e,t)||(0,i.default)(e,t)||(0,u.default)()}},3914:function(e,t,n){"use strict";n.r(t);var a=n("c3f6"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},"3d8c":function(e,t,n){"use strict";function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},"6fb7":function(e,t,n){"use strict";n.r(t);var a=n("a377"),r=n("3914");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);var u,o=n("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=s.exports},a377:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={pageHead:n("5a90").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-hello-text"},[e._v("请点击按钮向服务器发起请求")]),n("v-uni-view",{staticClass:"uni-textarea uni-common-mt"},[n("v-uni-textarea",{attrs:{value:e.res}})],1),n("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[n("v-uni-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendRequest.apply(void 0,arguments)}}},[e._v("发起请求（Callback）")]),n("v-uni-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendRequest("promise")}}},[e._v("发起请求（Promise）")]),n("v-uni-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendRequest("await")}}},[e._v("发起请求（Async/Await）")])],1)],1)],1)},i=[]},c3f6:function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("3835"));n("96cf");var i=a(n("1da1")),u="https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app",o=2e3,s={data:function(){return{title:"request",loading:!1,res:""}},methods:{sendRequest:function(e){switch(this.loading=!0,e){case"promise":this._requestPromise();break;case"await":this._requestAwait();break;default:this._request();break}},_request:function(){var e=this;uni.request({url:u,dataType:"text",data:{noncestr:Date.now()},success:function(t){console.log("request success",t),uni.showToast({title:"请求成功",icon:"success",mask:!0,duration:o}),e.res="请求结果 : "+JSON.stringify(t)},fail:function(e){console.log("request fail",e),uni.showModal({content:e.errMsg,showCancel:!1})},complete:function(){e.loading=!1}})},_requestPromise:function(){var e=this;uni.request({url:u,dataType:"text",data:{noncestr:Date.now()}}).then((function(t){console.log("request success",t[1]),uni.showToast({title:"请求成功",icon:"success",mask:!0,duration:o}),e.res="请求结果 : "+JSON.stringify(t[1]),e.loading=!1})).catch((function(t){console.log("request fail",t),uni.showModal({content:t.errMsg,showCancel:!1}),e.loading=!1}))},_requestAwait:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var n,a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,uni.request({url:u,dataType:"text",data:{noncestr:Date.now()}});case 2:n=t.sent,a=(0,r.default)(n,2),i=a[0],s=a[1],i?(console.log("request fail",i),uni.showModal({content:i.errMsg,showCancel:!1})):(console.log("request success",s),uni.showToast({title:"请求成功",icon:"success",mask:!0,duration:o}),e.res="请求结果 : "+JSON.stringify(s)),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}}};t.default=s}}]);