(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-list-list"],{"0f24":function(t,i,e){"use strict";e.r(i);var n=e("5c68"),o=e("3fbf");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("b379");var l,s=e("f0c5"),r=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"c01b135a",null,!1,n["a"],l);i["default"]=r.exports},"3fbf":function(t,i,e){"use strict";e.r(i);var n=e("cc28"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},"406e":function(t,i,e){var n=e("49c3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("2b691830",n,!0,{sourceMap:!1,shadowMode:!1})},"49c3":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-c01b135a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-c01b135a]{font-size:14px;line-height:inherit}.example[data-v-c01b135a]{padding:0 15px 15px}.example-info[data-v-c01b135a]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-c01b135a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-c01b135a]{padding:0 15px}.example-info[data-v-c01b135a]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-c01b135a]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-c01b135a]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-c01b135a]{font-size:18px;color:#fff}.word-btn[data-v-c01b135a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-c01b135a]{background-color:#4ca2ff}.slot-box[data-v-c01b135a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.slot-image[data-v-c01b135a]{\ndisplay:block;\nmargin-right:10px;width:30px;height:30px}.slot-text[data-v-c01b135a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:14px;color:#4cd964;margin-right:10px}body.?%PAGE?%[data-v-c01b135a]{background-color:#efeff4}',""]),t.exports=i},"5c68":function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var n={uniSection:e("258c").default,uniList:e("142e").default,uniListItem:e("7817").default,uniBadge:e("36eb").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-text",{staticClass:"example-info"},[t._v("列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等")]),e("uni-section",{attrs:{title:"基础用法",type:"line"}}),e("uni-list",[e("uni-list-item",{attrs:{title:"列表文字",rightText:"右侧文字"}}),e("uni-list-item",{attrs:{title:"列表文字",note:"列表描述信息",rightText:"右侧文字"}})],1),e("uni-section",{attrs:{title:"禁用列表",type:"line"}}),e("uni-list",[e("uni-list-item",{attrs:{disabled:!0,title:"列表禁用状态",rightText:"右侧文字"}})],1),e("uni-section",{attrs:{title:"展示箭头",type:"line"}}),e("uni-list",[e("uni-list-item",{attrs:{showArrow:!0,title:"列表文字"}}),e("uni-list-item",{attrs:{showArrow:!0,title:"列表文字",rightText:"右侧文字"}})],1),e("uni-section",{attrs:{title:"点击反馈",type:"line"}}),e("uni-list",[e("uni-list-item",{attrs:{title:"弹窗提示",clickable:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}}),e("uni-list-item",{attrs:{title:"页面跳转",to:"./chat"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}}),e("uni-list-item",{attrs:{title:"关闭当前页面打开新页面",link:"redirectTo",to:"./chat"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}}),e("uni-list-item",{attrs:{title:"打开错误页面(查看控制台)",link:"redirectTo",to:"./chats"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}})],1),e("uni-section",{attrs:{title:"不显示分割线",type:"line"}}),e("uni-list",{attrs:{border:!1}},[e("uni-list-item",{attrs:{title:"列表文字"}}),e("uni-list-item",{attrs:{border:!1,title:"列表文字",note:"列表描述信息",rightText:"右侧文字"}}),e("uni-list-item",{attrs:{border:!0,title:"列表文字",note:"列表描述信息",rightText:"右侧文字"}})],1),e("uni-section",{attrs:{title:"文字溢出隐藏",type:"line"}}),e("uni-list",[e("uni-list-item",{attrs:{ellipsis:1,title:"列表 title 超长文字显示一行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",showArrow:!0,rightText:"右侧文字"}}),e("uni-list-item",{attrs:{ellipsis:2,title:"列表 title 超长文字显示二行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",showArrow:!0,rightText:"右侧文字"}}),e("uni-list-item",{attrs:{title:"列表 title 全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",showArrow:!0,rightText:"右侧文字"}})],1),e("uni-section",{attrs:{title:"显示图标或图片",type:"line"}}),e("uni-list",[e("uni-list-item",{attrs:{title:"列表左侧带略缩图",note:"列表描述信息",showArrow:!0,thumb:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png","thumb-size":"sm",rightText:"小图"}}),e("uni-list-item",{attrs:{title:"列表左侧带略缩图",note:"列表描述信息",showArrow:!0,thumb:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png","thumb-size":"base",rightText:"默认"}}),e("uni-list-item",{attrs:{title:"列表左侧带略缩图",note:"列表描述信息",showArrow:!0,thumb:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png","thumb-size":"lg",rightText:"大图"}}),e("uni-list-item",{attrs:{"show-extra-icon":!0,showArrow:!0,"extra-icon":t.extraIcon,title:"列表左侧带扩展图标"}})],1),e("uni-section",{attrs:{title:"右侧显示 switch/badge",type:"line"}}),e("uni-list",[e("uni-list-item",{attrs:{"show-extra-icon":!0,"extra-icon":t.extraIcon,"show-badge":!0,"badge-text":"99",showArrow:!0,title:"禁用状态"},on:{switchChange:function(i){arguments[0]=i=t.$handleEvent(i),t.switchChange.apply(void 0,arguments)}}}),e("uni-list-item",{attrs:{"show-extra-icon":!0,"extra-icon":t.extraIcon,"show-switch":!0,title:"列表右侧带 switch"},on:{switchChange:function(i){arguments[0]=i=t.$handleEvent(i),t.switchChange.apply(void 0,arguments)}}}),e("uni-list-item",{attrs:{disabled:!0,"show-extra-icon":!0,"extra-icon":t.extraIcon,"show-switch":!0,"switch-checked":!0,title:"禁用状态"},on:{switchChange:function(i){arguments[0]=i=t.$handleEvent(i),t.switchChange.apply(void 0,arguments)}}})],1),e("uni-section",{attrs:{title:"使用插槽",type:"line"}}),e("uni-list",[e("uni-list-item",[e("v-uni-view",{staticClass:"slot-box",attrs:{slot:"body"},slot:"body"},[e("v-uni-text",{staticClass:"slot-text"},[t._v("默认插槽")]),e("uni-badge",{attrs:{text:"2",type:"primary"}})],1)],1),e("uni-list-item",{attrs:{title:"自定义右侧插槽",note:"列表描述信息",link:!0}},[e("template",{slot:"header"},[e("v-uni-image",{staticClass:"slot-image",attrs:{src:"/static/logo.png",mode:"widthFix"}})],1)],2),e("uni-list-item",[e("v-uni-view",{staticClass:"slot-box",attrs:{slot:"header"},slot:"header"},[e("v-uni-image",{staticClass:"slot-image",attrs:{src:"/static/logo.png",mode:"widthFix"}})],1),e("v-uni-text",{staticClass:"slot-box slot-text",attrs:{slot:"body"},slot:"body"},[t._v("自定义左侧插槽")]),e("template",{slot:"footer"},[e("v-uni-image",{staticClass:"slot-image",attrs:{src:"/static/logo.png",mode:"widthFix"}})],1)],2)],1),e("uni-section",{attrs:{title:"列表扩展",type:"line"}}),e("uni-list",[e("uni-list-item",{attrs:{title:"聊天列表",link:!0,to:"./chat"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick(i,1)}}})],1)],1)},a=[]},b379:function(t,i,e){"use strict";var n=e("406e"),o=e.n(n);o.a},cc28:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={components:{},data:function(){return{extraIcon:{color:"#4cd964",size:"22",type:"gear-filled"}}},methods:{onClick:function(t){console.log("执行click事件",t.data),uni.showToast({title:"点击反馈"})},switchChange:function(t){uni.showToast({title:"change:"+t.value,icon:"none"})}}};i.default=n}}]);