(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-button-nav-button"],{"22c9":function(e,t,n){"use strict";var l=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n("b5e5")),a={data:function(){return{title:"nav-button"}},onNavigationBarButtonTap:function(e){uni.showToast({title:0===e.index?"你点了分享按钮":"你点了收藏按钮",icon:"none"})},components:{uniIcons:i.default}};t.default=a},2611:function(e,t,n){var l=n("c553");"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var i=n("4f06").default;i("a5ae9c06",l,!0,{sourceMap:!1,shadowMode:!1})},4070:function(e,t,n){"use strict";n.r(t);var l=n("22c9"),i=n.n(l);for(var a in l)"default"!==a&&function(e){n.d(t,e,(function(){return l[e]}))}(a);t["default"]=i.a},4240:function(e,t,n){e.exports=n.p+"static/fonts/uni.75745d34.ttf"},"512b":function(e,t,n){"use strict";var l;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return l}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-text",{staticClass:"uni-icons",class:[e.customIcons,e.customIcons?e.type:""],style:{color:e.color,"font-size":e.size+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._onClick.apply(void 0,arguments)}}},[e._v(e._s(e.icons[e.type]))])},a=[]},58273:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return l}));var l={pageHead:n("5a90").default,uniIcons:n("b5e5").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-title"},[n("uni-icons",{attrs:{size:"16",type:"info"}}),e._v("说明 :")],1),n("v-uni-view",{staticClass:"uni-helllo-text"},[n("v-uni-view",[e._v("在App端可在pages.json里配置buttons，暂不支持动态改变buttons的样式，使用onNavigationBarButtonTap可监听buttons的点击事件。")]),n("v-uni-view",[e._v("在小程序端，不支持配置buttons，故按钮不见了。")])],1)],1)],1)},a=[]},"8d0c":function(e,t,n){"use strict";var l=n("4ea4");n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n("d662")),a={name:"UniIcons",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:i.default}},methods:{_onClick:function(){this.$emit("click")}}};t.default=a},b4fb:function(e,t,n){"use strict";n.r(t);var l=n("8d0c"),i=n.n(l);for(var a in l)"default"!==a&&function(e){n.d(t,e,(function(){return l[e]}))}(a);t["default"]=i.a},b5e5:function(e,t,n){"use strict";n.r(t);var l=n("512b"),i=n("b4fb");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("db59");var o,r=n("f0c5"),c=Object(r["a"])(i["default"],l["b"],l["c"],!1,null,"7bc22022",null,!1,l["a"],o);t["default"]=c.exports},c553:function(e,t,n){var l=n("24fb"),i=n("1de5"),a=n("4240");t=l(!1);var o=i(a);t.push([e.i,"\n@font-face{font-family:uniicons;src:url("+o+') format("truetype")}\n.uni-icons[data-v-7bc22022]{font-family:uniicons;text-decoration:none;text-align:center}',""]),e.exports=t},d662:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};t.default=l},db59:function(e,t,n){"use strict";var l=n("2611"),i=n.n(l);i.a},e291:function(e,t,n){"use strict";n.r(t);var l=n("58273"),i=n("4070");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);var o,r=n("f0c5"),c=Object(r["a"])(i["default"],l["b"],l["c"],!1,null,"d74bf576",null,!1,l["a"],o);t["default"]=c.exports}}]);