(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-faka_product-add~pages-faka_product-edit~pages-faka_product-list"],{"0590":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".uni-file-picker[data-v-3eebec9d]{\r\nbox-sizing:border-box;overflow:hidden\n}.uni-file-picker__header[data-v-3eebec9d]{padding-top:5px;padding-bottom:10px;\r\ndisplay:flex;\r\njustify-content:space-between}.file-title[data-v-3eebec9d]{font-size:14px;color:#333}.file-count[data-v-3eebec9d]{font-size:14px;color:#999}.is-add[data-v-3eebec9d]{\r\ndisplay:flex;\r\nalign-items:center;justify-content:center}.icon-add[data-v-3eebec9d]{width:50px;height:5px;background-color:#f1f1f1;border-radius:2px}.rotate[data-v-3eebec9d]{position:absolute;transform:rotate(90deg)}",""]),e.exports=t},"09cf":function(e,t,i){"use strict";i("99af"),i("4160"),i("c975"),i("a9e3"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"uploadImage",props:{filesList:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},limit:{type:[Number,String],default:9},imageStyles:{type:Object,default:function(){return{width:"auto",height:"auto",border:{}}}},delIcon:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1}},computed:{styles:function(){var e={width:"auto",height:"auto",border:{}};return Object.assign(e,this.imageStyles)},boxStyle:function(){var e=this.styles,t=e.width,i=void 0===t?"auto":t,n=e.height,r=void 0===n?"auto":n,a={};"auto"===r?"auto"!==i?(a.height=this.value2px(i),a["padding-top"]=0):a.height=0:(a.height=this.value2px(r),a["padding-top"]=0),a.width="auto"===i?"auto"!==r?this.value2px(r):"33.3%":this.value2px(i);var o="";for(var s in a)o+="".concat(s,":").concat(a[s],";");return o},borderStyle:function(){var e=this.styles.border,t={};if("boolean"===typeof e)t.border=e?"1px #eee solid":"none";else{var i=e&&e.width||1;i=this.value2px(i);var n=e&&e.radius||5;n=this.value2px(n),t={"border-width":i,"border-style":e&&e.style||"solid","border-color":e&&e.color||"#eee","border-radius":n}}var r="";for(var a in t)r+="".concat(a,":").concat(t[a],";");return r}},methods:{uploadFiles:function(e,t){this.$emit("uploadFiles",e)},choose:function(){this.$emit("choose")},delFile:function(e){this.$emit("delFile",e)},prviewImage:function(e,t){var i=[];1===Number(this.limit)&&this.disablePreview&&!this.disabled&&this.$emit("choose"),this.disablePreview||(this.filesList.forEach((function(e){i.push(e.path)})),uni.previewImage({urls:i,current:t}))},value2px:function(e){return"number"===typeof e?e+="px":-1===e.indexOf("%")&&(e=-1!==e.indexOf("px")?e:e+"px"),e}}};t.default=n},1082:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-file-picker__container[data-v-c8222f92]{display:flex;box-sizing:border-box;flex-wrap:wrap;margin:-5px}.file-picker__box[data-v-c8222f92]{position:relative;width:33.3%;height:0;padding-top:33.33%;box-sizing:border-box}.file-picker__box-content[data-v-c8222f92]{position:absolute;top:0;right:0;bottom:0;left:0;margin:5px;border:1px #eee solid;border-radius:8px;overflow:hidden}.file-picker__progress[data-v-c8222f92]{position:absolute;bottom:0;left:0;right:0;\r\n  /* border: 1px red solid; */z-index:2}.file-picker__progress-item[data-v-c8222f92]{width:100%}.file-picker__mask[data-v-c8222f92]{display:flex;justify-content:center;align-items:center;position:absolute;right:0;top:0;bottom:0;left:0;color:#fff;font-size:12px;background-color:rgba(0,0,0,.4)}.file-image[data-v-c8222f92]{width:100%;height:100%}.is-add[data-v-c8222f92]{display:flex;align-items:center;justify-content:center}.icon-add[data-v-c8222f92]{width:50px;height:5px;background-color:#f1f1f1;border-radius:2px}.rotate[data-v-c8222f92]{position:absolute;transform:rotate(90deg)}.icon-del-box[data-v-c8222f92]{display:flex;align-items:center;justify-content:center;position:absolute;top:5px;right:5px;height:26px;width:26px;border-radius:50%;background-color:rgba(0,0,0,.5);z-index:2;transform:rotate(-45deg)}.icon-del[data-v-c8222f92]{width:15px;height:2px;background-color:#fff;border-radius:2px}',""]),e.exports=t},"16fe":function(e,t,i){"use strict";var n=i("9377"),r=i.n(n);r.a},"17aa":function(e,t,i){"use strict";i.r(t);var n=i("c58a"),r=i("60ba");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("e890");var o,s=i("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"037f06f8",null,!1,n["a"],o);t["default"]=l.exports},"1a9d":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-file-picker"},[e.title?i("v-uni-view",{staticClass:"uni-file-picker__header"},[i("v-uni-text",{staticClass:"file-title"},[e._v(e._s(e.title))]),i("v-uni-text",{staticClass:"file-count"},[e._v(e._s(e.filesList.length)+"/"+e._s(e.limitLength))])],1):e._e(),"image"===e.fileMediatype&&"grid"===e.showType?i("upload-image",{attrs:{readonly:e.readonly,"image-styles":e.imageStyles,"files-list":e.filesList,limit:e.limitLength,disablePreview:e.disablePreview,delIcon:e.delIcon},on:{uploadFiles:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadFiles.apply(void 0,arguments)},choose:function(t){arguments[0]=t=e.$handleEvent(t),e.choose.apply(void 0,arguments)},delFile:function(t){arguments[0]=t=e.$handleEvent(t),e.delFile.apply(void 0,arguments)}}},[e._t("default",[i("v-uni-view",{staticClass:"is-add"},[i("v-uni-view",{staticClass:"icon-add"}),i("v-uni-view",{staticClass:"icon-add rotate"})],1)])],2):e._e(),"image"!==e.fileMediatype||"grid"!==e.showType?i("upload-file",{attrs:{readonly:e.readonly,"list-styles":e.listStyles,"files-list":e.filesList,showType:e.showType,delIcon:e.delIcon},on:{uploadFiles:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadFiles.apply(void 0,arguments)},choose:function(t){arguments[0]=t=e.$handleEvent(t),e.choose.apply(void 0,arguments)},delFile:function(t){arguments[0]=t=e.$handleEvent(t),e.delFile.apply(void 0,arguments)}}},[e._t("default",[i("v-uni-button",{attrs:{type:"primary",size:"mini"}},[e._v("选择文件")])])],2):e._e()],1)},a=[]},2173:function(e,t,i){"use strict";i.r(t);var n=i("09cf"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},2656:function(e,t,i){"use strict";var n=i("d766"),r=i.n(n);r.a},"2d34":function(e,t,i){"use strict";(function(e){i("7db0"),i("4160"),i("baa5"),i("d81d"),i("d3b7"),i("ac1f"),i("5319"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0});var n="chooseAndUploadFile:ok",r="chooseAndUploadFile:fail";function a(e){var t=e.count,i=e.sizeType,n=e.sourceType,a=e.extension;return new Promise((function(e,o){uni.chooseImage({count:t,sizeType:i,sourceType:n,extension:a,success:function(t){e(l(t,"image"))},fail:function(e){o({errMsg:e.errMsg.replace("chooseImage:fail",r)})}})}))}function o(e){var t=e.camera,i=e.compressed,n=e.maxDuration,a=e.sourceType,o=e.extension;return new Promise((function(e,s){uni.chooseVideo({camera:t,compressed:i,maxDuration:n,sourceType:a,extension:o,success:function(t){var i=t.tempFilePath,n=t.duration,r=t.size,a=t.height,o=t.width;e(l({errMsg:"chooseVideo:ok",tempFilePaths:[i],tempFiles:[{name:t.tempFile&&t.tempFile.name||"",path:i,size:r,type:t.tempFile&&t.tempFile.type||"",width:o,height:a,duration:n,fileType:"video",cloudPath:""}]},"video"))},fail:function(e){s({errMsg:e.errMsg.replace("chooseVideo:fail",r)})}})}))}function s(e){var t=e.count,i=e.extension;return new Promise((function(e,n){var a=uni.chooseFile;if("undefined"!==typeof wx&&"function"===typeof wx.chooseMessageFile&&(a=wx.chooseMessageFile),"function"!==typeof a)return n({errMsg:r+" 请指定 type 类型，该平台仅支持选择 image 或 video。"});a({type:"all",count:t,extension:i,success:function(t){e(l(t))},fail:function(e){n({errMsg:e.errMsg.replace("chooseFile:fail",r)})}})}))}function l(e,t){return e.tempFiles.forEach((function(e,i){e.name||(e.name=e.path.substring(e.path.lastIndexOf("/")+1)),t&&(e.fileType=t),e.cloudPath=Date.now()+"_"+i+e.name.substring(e.name.lastIndexOf("."))})),e.tempFilePaths||(e.tempFilePaths=e.tempFiles.map((function(e){return e.path}))),e}function u(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,r=arguments.length>2?arguments[2]:void 0;t=Object.assign({},t),t.errMsg=n;var a=t.tempFiles,o=a.length,s=0;return new Promise((function(n){while(s<i)l();function l(){var i=s++;if(i>=o)!a.find((function(e){return!e.url&&!e.errMsg}))&&n(t);else{var u=a[i];e.uploadFile({filePath:u.path,cloudPath:u.cloudPath,fileType:u.fileType,onUploadProgress:function(e){e.index=i,e.tempFile=u,e.tempFilePath=u.path,r&&r(e)}}).then((function(e){u.url=e.fileID,i<o&&l()})).catch((function(e){u.errMsg=e.errMsg||e.message,i<o&&l()}))}}}))}function c(e,t){var i=t.onChooseFile,r=t.onUploadProgress;return e.then((function(e){if(i){var t=i(e);if("undefined"!==typeof t)return Promise.resolve(t).then((function(t){return"undefined"===typeof t?e:t}))}return e})).then((function(e){return!1===e?{errMsg:n,tempFilePaths:[],tempFiles:[]}:u(e,5,r)}))}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"all"};return"image"===e.type?c(a(e),e):"video"===e.type?c(o(e),e):c(s(e),e)}t.chooseAndUploadFile=d}).call(this,i("a9ff")["default"])},"30ad":function(e,t,i){"use strict";i.r(t);var n=i("1a9d"),r=i("382e");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("2656");var o,s=i("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"3eebec9d",null,!1,n["a"],o);t["default"]=l.exports},"36e8":function(e,t,i){var n=i("6f24");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("5aab7625",n,!0,{sourceMap:!1,shadowMode:!1})},"382e":function(e,t,i){"use strict";i.r(t);var n=i("c866"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"60ba":function(e,t,i){"use strict";i.r(t);var n=i("a8e8"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"6f24":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-file-picker__files[data-v-037f06f8]{display:flex;flex-direction:column;justify-content:flex-start}.uni-file-picker__lists[data-v-037f06f8]{position:relative;margin-top:5px;overflow:hidden}.file-picker__mask[data-v-037f06f8]{display:flex;justify-content:center;align-items:center;position:absolute;right:0;top:0;bottom:0;left:0;color:#fff;font-size:14px;background-color:rgba(0,0,0,.4)}.uni-file-picker__lists-box[data-v-037f06f8]{position:relative}.uni-file-picker__item[data-v-037f06f8]{display:flex;align-items:center;padding:8px 10px;padding-right:5px;padding-left:10px}.files-border[data-v-037f06f8]{border-top:1px #eee solid}.files__name[data-v-037f06f8]{flex:1;font-size:14px;color:#666;margin-right:25px;word-break:break-all;word-wrap:break-word}.icon-files[data-v-037f06f8]{position:static;background-color:initial}.is-list-card[data-v-037f06f8]{border:1px #eee solid;margin-bottom:5px;border-radius:5px;box-shadow:0 0 2px 0 rgba(0,0,0,.1);padding:5px}.files__image[data-v-037f06f8]{width:40px;height:40px;margin-right:10px}.header-image[data-v-037f06f8]{width:100%;height:100%}.is-text-box[data-v-037f06f8]{border:1px #eee solid;border-radius:5px}.is-text-image[data-v-037f06f8]{width:25px;height:25px;margin-left:5px}.rotate[data-v-037f06f8]{position:absolute;transform:rotate(90deg)}.icon-del-box[data-v-037f06f8]{display:flex;margin:auto 0;align-items:center;justify-content:center;position:absolute;top:0;bottom:0;right:5px;height:26px;width:26px;z-index:2;transform:rotate(-45deg)}.icon-del[data-v-037f06f8]{width:15px;height:1px;background-color:#333}@media (min-width:768px){.uni-file-picker__files[data-v-037f06f8]{max-width:375px}}',""]),e.exports=t},"7b29":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-file-picker__container"},[e._l(e.filesList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"file-picker__box",style:e.boxStyle},[i("v-uni-view",{staticClass:"file-picker__box-content",style:e.borderStyle},[i("v-uni-image",{staticClass:"file-image",attrs:{src:t.path,mode:"aspectFill"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.prviewImage(t,n)}}}),e.delIcon&&!e.readonly?i("v-uni-view",{staticClass:"icon-del-box",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.delFile(n)}}},[i("v-uni-view",{staticClass:"icon-del"}),i("v-uni-view",{staticClass:"icon-del rotate"})],1):e._e(),t.progress&&100!==t.progress||0===t.progress?i("v-uni-view",{staticClass:"file-picker__progress"},[i("v-uni-progress",{staticClass:"file-picker__progress-item",attrs:{percent:-1===t.progress?0:t.progress,"stroke-width":"4",backgroundColor:t.errMsg?"#ff5a5f":"#EBEBEB"}})],1):e._e(),t.errMsg?i("v-uni-view",{staticClass:"file-picker__mask",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.uploadFiles(t,n)}}},[e._v("点击重试")]):e._e()],1)],1)})),e.filesList.length<e.limit&&!e.readonly?i("v-uni-view",{staticClass:"file-picker__box",style:e.boxStyle},[i("v-uni-view",{staticClass:"file-picker__box-content is-add",style:e.borderStyle,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.choose.apply(void 0,arguments)}}},[e._t("default",[i("v-uni-view",{staticClass:"icon-add"}),i("v-uni-view",{staticClass:"icon-add rotate"})])],2)],1):e._e()],2)},a=[]},"8f4c":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.enumConverter=t.validator=void 0;var n={product_name:{rules:[{required:!0},{format:"string"}],label:"商品名称"},title:{rules:[{required:!0},{format:"string"}],label:"描述"},type:{rules:[{required:!0},{format:"string"}],label:"分类"},cover:{rules:[{required:!0},{format:"file"}],label:"logo图片"},price:{rules:[{required:!0},{format:"double"}],label:"价格"},sort:{rules:[{required:!0},{format:"int"}],label:"排序"},description:{rules:[{format:"string"}],label:"描述"},memo:{rules:[{format:"string"}],label:"商品描述"},state:{rules:[{format:"int"},{range:[{text:"删除",value:0},{text:"正常",value:1},{text:"待上架",value:2},{text:"停售",value:3}]}],defaultValue:1,label:"状态"}};t.validator=n;var r={state_valuetotext:{0:"删除",1:"正常",2:"待上架",3:"停售"}};t.enumConverter=r},9377:function(e,t,i){var n=i("1082");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("4f113e46",n,!0,{sourceMap:!1,shadowMode:!1})},a8e8:function(e,t,i){"use strict";i("99af"),i("4160"),i("c975"),i("a9e3"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"uploadFile",props:{filesList:{type:Array,default:function(){return[]}},delIcon:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},showType:{type:String,default:""},listStyles:{type:Object,default:function(){return{border:!0,dividline:!0,borderStyle:{}}}},readonly:{type:Boolean,default:!1}},computed:{list:function(){var e=[];return this.filesList.forEach((function(t){e.push(t)})),e},styles:function(){var e={border:!0,dividline:!0,"border-style":{}};return Object.assign(e,this.listStyles)},borderStyle:function(){var e=this.styles,t=e.borderStyle,i=e.border,n={};if(i){var r=t&&t.width||1;r=this.value2px(r);var a=t&&t.radius||5;a=this.value2px(a),n={"border-width":r,"border-style":t&&t.style||"solid","border-color":t&&t.color||"#eee","border-radius":a}}else n.border="none";var o="";for(var s in n)o+="".concat(s,":").concat(n[s],";");return o},borderLineStyle:function(){var e={},t=this.styles.borderStyle;if(t&&t.color&&(e["border-color"]=t.color),t&&t.width){var i=t&&t.width||1,n=t&&t.style||0;"number"===typeof i?i+="px":i=i.indexOf("px")?i:i+"px",e["border-width"]=i,"number"===typeof n?n+="px":n=n.indexOf("px")?n:n+"px",e["border-top-style"]=n}var r="";for(var a in e)r+="".concat(a,":").concat(e[a],";");return r}},methods:{uploadFiles:function(e,t){this.$emit("uploadFiles",{item:e,index:t})},choose:function(){this.$emit("choose")},delFile:function(e){this.$emit("delFile",e)},value2px:function(e){return"number"===typeof e?e+="px":e=-1!==e.indexOf("px")?e:e+"px",e}}};t.default=n},c58a:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-file-picker__files"},[e.readonly?e._e():i("v-uni-view",{staticClass:"files-button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.choose.apply(void 0,arguments)}}},[e._t("default")],2),e.list.length>0?i("v-uni-view",{staticClass:"uni-file-picker__lists is-text-box",style:e.borderStyle},e._l(e.list,(function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-file-picker__lists-box",class:{"files-border":0!==n&&e.styles.dividline},style:0!==n&&e.styles.dividline&&e.borderLineStyle},[i("v-uni-view",{staticClass:"uni-file-picker__item"},[i("v-uni-view",{staticClass:"files__name"},[e._v(e._s(t.name))]),e.delIcon&&!e.readonly?i("v-uni-view",{staticClass:"icon-del-box icon-files",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delFile(n)}}},[i("v-uni-view",{staticClass:"icon-del icon-files"}),i("v-uni-view",{staticClass:"icon-del rotate"})],1):e._e()],1),t.progress&&100!==t.progress||0===t.progress?i("v-uni-view",{staticClass:"file-picker__progress"},[i("v-uni-progress",{staticClass:"file-picker__progress-item",attrs:{percent:-1===t.progress?0:t.progress,"stroke-width":"4",backgroundColor:t.errMsg?"#ff5a5f":"#EBEBEB"}})],1):e._e(),"error"===t.status?i("v-uni-view",{staticClass:"file-picker__mask",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.uploadFiles(t,n)}}},[e._v("点击重试")]):e._e()],1)})),1):e._e()],1)},a=[]},c866:function(e,t,i){"use strict";(function(e){var n=i("4ea4");i("99af"),i("7db0"),i("c740"),i("4160"),i("c975"),i("baa5"),i("d81d"),i("a434"),i("a9e3"),i("d3b7"),i("e25e"),i("ac1f"),i("5319"),i("1276"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var r=n(i("1da1")),a=i("2d34"),o=n(i("f698")),s=n(i("17aa")),l={name:"uniFilePicker",components:{uploadImage:o.default,uploadFile:s.default},props:{value:{type:[Array,Object],default:function(){return[]}},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},delIcon:{type:Boolean,default:!0},autoUpload:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},mode:{type:String,default:"grid"},fileMediatype:{type:String,default:"image"},fileExtname:{type:[Array,String],default:function(){return[]}},title:{type:String,default:""},listStyles:{type:Object,default:function(){return{border:!0,dividline:!0,borderStyle:{}}}},imageStyles:{type:Object,default:function(){return{width:"auto",height:"auto"}}},readonly:{type:Boolean,default:!1},returnType:{type:String,default:"array"}},watch:{value:{handler:function(e){var t=this,i=[],n=[].concat(e||[]);n.forEach((function(e){var n=t.files.find((function(t){return t.url===e.url})),r=/cloud:\/\/([\w.]+\/?)\S*/;e.path||(e.path=e.url),r.test(e.url)&&t.getTempFileURL(e,e.url),i.push(n||e)})),this.files=i},immediate:!0}},data:function(){return{files:[]}},computed:{filesList:function(){var e=[];return this.files.forEach((function(t){e.push(t)})),e},showType:function(){return"image"===this.fileMediatype?this.mode:"list"},limitLength:function(){return"object"===this.returnType?1:this.limit?this.limit>=9?9:this.limit:1},extname:function(){if(Array.isArray(this.fileExtname))return this.fileExtname;var e=this.fileExtname.replace(/(\[|\])/g,"");return e.split(",")}},created:function(){this.tempData={}},methods:{upload:function(){var e=[];this.files.forEach((function(t,i){"ready"!==t.status&&"error"!==t.status||e.push(Object.assign({},t))})),this.uploadFiles(e)},choose:function(){this.disabled||(this.files.length>=Number(this.limitLength)&&"grid"!==this.showType&&"array"===this.returnType?uni.showToast({title:"您最多选择 ".concat(this.limitLength," 个文件"),icon:"none"}):this.chooseFiles())},chooseFiles:function(){var t=this;e.chooseAndUploadFile||(e.chooseAndUploadFile=a.chooseAndUploadFile),e.chooseAndUploadFile({type:this.fileMediatype,compressed:!1,extension:this.extname.length>0?this.extname:void 0,count:this.limitLength-this.files.length,onChooseFile:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(i){var n,r,a,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:(1===Number(t.limitLength)&&t.disablePreview&&!t.disabled||"object"===t.returnType)&&(t.files=[]),n=[],r=[],t.extname&&t.extname.length>0?(i.tempFiles.forEach((function(e){var i=t.getFileExt(e.name),a=i.ext.toLowerCase();-1!==t.extname.indexOf(a)&&(r.push(e),n.push(e.path))})),r.length!==i.tempFiles.length&&uni.showToast({title:"当前选择了".concat(i.tempFiles.length,"个文件 ，").concat(i.tempFiles.length-r.length," 个文件格式不正确"),icon:"none",duration:5e3})):(n=i.tempFilePaths,r=i.tempFiles),a=[],o=0;case 6:if(!(o<r.length)){e.next=20;break}if(!(t.limitLength-t.files.length<=0)){e.next=9;break}return e.abrupt("break",20);case 9:return r[o].uuid=Date.now(),e.next=12,t.getFileData(r[o],t.fileMediatype);case 12:s=e.sent,s.progress=0,s.status="ready",t.files.push(s),a.push(s);case 17:o++,e.next=6;break;case 20:t.$emit("select",{tempFiles:a,tempFilePaths:n}),i.tempFiles=r,t.autoUpload||(i.tempFiles=[]);case 23:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}(),onUploadProgress:function(e){t.setProgress(e,e.index)}}).then((function(e){t.setSuccessAndError(e.tempFiles)})).catch((function(e){console.log("选择失败",e)}))},uploadFiles:function(e){var t=this;e=[].concat(e),this.uploadCloudFiles(e,5,(function(e){t.setProgress(e,e.index,!0)})).then((function(e){t.setSuccessAndError(e)})).catch((function(e){console.log("err",e)}))},setSuccessAndError:function(e,t){var i=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var n,r,a,o,s,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=[],r=[],a=[],o=[],s=function(t){var s=e[t],l=s.uuid?i.files.findIndex((function(e){return e.uuid===s.uuid})):s.index;if(-1===l||!i.files)return"break";"request:fail"===s.errMsg?(i.files[l].url=s.path,i.files[l].status="error",i.files[l].errMsg=s.errMsg,i.files[l].progress=-1,r.push(i.files[l]),o.push(i.files[l].url)):(i.files[l].errMsg="",i.files[l].url=s.url,i.files[l].status="success",n.push(i.files[l]),a.push(i.files[l].url))},l=0;case 6:if(!(l<e.length)){t.next=13;break}if(u=s(l),"break"!==u){t.next=10;break}return t.abrupt("break",13);case 10:l++,t.next=6;break;case 13:n.length>0&&(i.setEmit(),i.$emit("success",{tempFiles:i.backObject(n),tempFilePaths:a})),r.length>0&&i.$emit("fail",{tempFiles:i.backObject(r),tempFilePaths:o});case 15:case"end":return t.stop()}}),t)})))()},setProgress:function(e,t,i){this.files.length;var n=Math.round(100*e.loaded/e.total),r=t;i||(r=this.files.findIndex((function(t){return t.uuid===e.tempFile.uuid}))),-1!==r&&this.files[r]&&(this.files[r].progress=n,this.$emit("progress",{index:r,progress:parseInt(n),tempFile:this.files[r]}))},delFile:function(e){this.$emit("delete",{tempFile:this.files[e],tempFilePath:this.files[e].url}),this.files.splice(e,1)},getFileExt:function(e){var t=e.lastIndexOf("."),i=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,i)}},getFileInfo:function(e){return new Promise((function(t,i){uni.getImageInfo({src:e,success:function(e){t(e)},fail:function(e){i(e)}})}))},getFileData:function(e){var t=arguments,i=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var r,a,o,s,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.length>1&&void 0!==t[1]?t[1]:"image",a=i.getFileExt(e.name),o=a.ext.toLowerCase(),s={name:e.name,uuid:e.uuid,extname:o||"",cloudPath:e.cloudPath,fileType:e.fileType,url:e.path||e.path,size:e.size,image:{},path:e.path,video:{}},"image"!==r){n.next=11;break}return n.next=7,i.getFileInfo(e.path);case 7:l=n.sent,s.image.width=l.width,s.image.height=l.height,s.image.location=l.path;case 11:return n.abrupt("return",s);case 12:case"end":return n.stop()}}),n)})))()},uploadCloudFiles:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2?arguments[2]:void 0;t=JSON.parse(JSON.stringify(t));var r=t.length,a=0,o=this;return new Promise((function(s){while(a<i)l();function l(){var i=a++;if(i>=r)!t.find((function(e){return!e.url&&!e.errMsg}))&&s(t);else{var u=t[i],c=o.files.findIndex((function(e){return e.uuid===u.uuid}));u.url="",delete u.errMsg,e.uploadFile({filePath:u.path,cloudPath:u.cloudPath,fileType:u.fileType,onUploadProgress:function(e){e.index=c,n&&n(e)}}).then((function(e){u.url=e.fileID,u.index=c,i<r&&l()})).catch((function(e){u.errMsg=e.errMsg||e.message,u.index=c,i<r&&l()}))}}}))},setEmit:function(){var e=[];e="object"===this.returnType?this.backObject(this.files)[0]:this.backObject(this.files),this.$emit("input",e)},backObject:function(e){var t=JSON.parse(JSON.stringify(e));return t.map((function(e){return delete e.path,delete e.uuid,delete e.video,delete e.progress,delete e.errMsg,delete e.status,delete e.cloudPath,e})),t},getTempFileURL:function(t,i){var n=this;return(0,r.default)(regeneratorRuntime.mark((function r(){var a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i={fileList:[].concat(i)},r.next=3,e.getTempFileURL(i);case 3:a=r.sent,t.path=a.fileList[0].tempFileURL||"",o=n.files.findIndex((function(e){return e.path===t.path})),-1!==o&&n.$set(n.files,o,t);case 7:case"end":return r.stop()}}),r)})))()}}};t.default=l}).call(this,i("a9ff")["default"])},d766:function(e,t,i){var n=i("0590");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("19037ca7",n,!0,{sourceMap:!1,shadowMode:!1})},e890:function(e,t,i){"use strict";var n=i("36e8"),r=i.n(n);r.a},f698:function(e,t,i){"use strict";i.r(t);var n=i("7b29"),r=i("2173");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("16fe");var o,s=i("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"c8222f92",null,!1,n["a"],o);t["default"]=l.exports}}]);