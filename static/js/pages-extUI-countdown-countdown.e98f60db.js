(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-countdown-countdown"],{"212b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSection",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"258c":function(t,e,n){"use strict";n.r(e);var i=n("b574"),o=n("ea27");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("aa71");var a,c=n("f0c5"),s=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"83509928",null,!1,i["a"],a);e["default"]=s.exports},"373d":function(t,e,n){"use strict";n("a9e3"),n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniCountdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0},timestamp:{type:Number,default:0}},data:function(){return{timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},watch:{day:function(t){this.changeFlag()},hour:function(t){this.changeFlag()},minute:function(t){this.changeFlag()},second:function(t){this.changeFlag()}},created:function(t){this.startData()},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,e,n,i,o){return t?t-parseInt((new Date).getTime()/1e3,10):60*e*60*24+60*n*60+60*i+o},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,e=0,n=0,i=0,o=0;t>0?(e=Math.floor(t/86400),n=Math.floor(t/3600)-24*e,i=Math.floor(t/60)-24*e*60-60*n,o=Math.floor(t)-24*e*60*60-60*n*60-60*i):this.timeUp(),e<10&&(e="0"+e),n<10&&(n="0"+n),i<10&&(i="0"+i),o<10&&(o="0"+o),this.d=e,this.h=n,this.i=i,this.s=o},startData:function(){var t=this;this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.seconds<=0||(this.countDown(),this.timer=setInterval((function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()}),1e3))},changeFlag:function(){this.syncFlag||(this.seconds=this.toSeconds(this.timestamp,this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}};e.default=i},"3d8c3":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?n("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay?n("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("天")]):t._e(),n("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.h))]),n("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"时"))]),n("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.i))]),n("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"分"))]),n("v-uni-text",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,backgroundColor:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():n("v-uni-text",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("秒")])],1)},r=[]},"43b2":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-8d948456]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-8d948456]{font-size:14px;line-height:inherit}.example[data-v-8d948456]{padding:0 15px 15px}.example-info[data-v-8d948456]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-8d948456]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-8d948456]{padding:0 15px}.example-info[data-v-8d948456]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-8d948456]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-8d948456]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-8d948456]{font-size:18px;color:#fff}.word-btn[data-v-8d948456]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-8d948456]{background-color:#4ca2ff}.example-body[data-v-8d948456]{padding:10px}body.?%PAGE?%[data-v-8d948456]{background-color:#efeff4}',""]),t.exports=e},"47c8":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-section[data-v-83509928]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section__head[data-v-83509928]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-83509928]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-83509928]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-83509928]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-83509928]{font-size:14px;color:#333}.distraction[data-v-83509928]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-83509928]{font-size:12px;color:#999}",""]),t.exports=e},"486d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},data:function(){return{testHour:0,testMinute:0,testSecond:0}},created:function(){var t=this;setTimeout((function(){t.testHour=1,t.testMinute=1,t.testSecond=0}),2e3)},methods:{timeup:function(){uni.showToast({title:"时间到"})}}};e.default=i},"4daf":function(t,e,n){"use strict";n.r(e);var i=n("486d"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"560c":function(t,e,n){"use strict";n.r(e);var i=n("d05a1"),o=n("4daf");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("96b0");var a,c=n("f0c5"),s=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"8d948456",null,!1,i["a"],a);e["default"]=s.exports},"619b":function(t,e,n){"use strict";n.r(e);var i=n("373d"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"7bf5":function(t,e,n){var i=n("7ccc");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("08eb7b12",i,!0,{sourceMap:!1,shadowMode:!1})},"7ccc":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-countdown[data-v-15258370]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding:%?2?% 0}.uni-countdown__splitor[data-v-15258370]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:%?48?%;padding:%?5?%;font-size:12px}.uni-countdown__number[data-v-15258370]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?52?%;height:%?48?%;line-height:%?48?%;margin:%?5?%;text-align:center;font-size:12px}",""]),t.exports=e},"8f95":function(t,e,n){"use strict";n.r(e);var i=n("3d8c3"),o=n("619b");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("9f65");var a,c=n("f0c5"),s=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"15258370",null,!1,i["a"],a);e["default"]=s.exports},"96b0":function(t,e,n){"use strict";var i=n("f248"),o=n.n(i);o.a},"9f65":function(t,e,n){"use strict";var i=n("7bf5"),o=n.n(i);o.a},aa71:function(t,e,n){"use strict";var i=n("bf9b"),o=n.n(i);o.a},b574:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-section__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},r=[]},bf9b:function(t,e,n){var i=n("47c8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("a5dd0b28",i,!0,{sourceMap:!1,shadowMode:!1})},d05a1:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniSection:n("258c").default,uniCountdown:n("8f95").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-text",{staticClass:"example-info"},[t._v("倒计时组件主要用于促销商品剩余时间，发送短信验证等待时间等场景")]),n("uni-section",{attrs:{title:"一般用法",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-countdown",{attrs:{day:1,hour:1,minute:12,second:40}})],1),n("uni-section",{attrs:{title:"不显示天数",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-countdown",{attrs:{"show-day":!1,hour:12,minute:12,second:12}})],1),n("uni-section",{attrs:{title:"文字分隔符",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-countdown",{attrs:{minute:30,second:0,"show-colon":!1}})],1),n("uni-section",{attrs:{title:"修改颜色",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-countdown",{attrs:{day:1,hour:2,minute:30,second:0,color:"#FFFFFF","background-color":"#007AFF","border-color":"#007AFF"}})],1),n("uni-section",{attrs:{title:"倒计时回调事件",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-countdown",{attrs:{"show-day":!1,second:10},on:{timeup:function(e){arguments[0]=e=t.$handleEvent(e),t.timeup.apply(void 0,arguments)}}})],1),n("uni-section",{attrs:{title:"动态赋值",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-countdown",{attrs:{"show-day":!1,hour:t.testHour,minute:t.testMinute,second:t.testSecond}})],1)],1)},r=[]},ea27:function(t,e,n){"use strict";n.r(e);var i=n("212b"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},f248:function(t,e,n){var i=n("43b2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("3260de75",i,!0,{sourceMap:!1,shadowMode:!1})}}]);