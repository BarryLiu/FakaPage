(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-faka_type-edit"],{"06a7":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.enumConverter=a.validator=void 0;var n={title:{rules:[{required:!0},{format:"string"}],label:"分类名称"},description:{rules:[{format:"string"}],label:"分类描述"},sort:{rules:[{required:!0},{format:"int"}],label:"排序"},state:{rules:[{format:"int"},{range:[{text:"删除",value:0},{text:"正常",value:1},{text:"待上架",value:2}]}],defaultValue:1,label:"状态"}};a.validator=n;var i={state_valuetotext:{0:"删除",1:"正常",2:"待上架"}};a.enumConverter=i},"2c3b":function(t,a,e){"use strict";e.r(a);var n=e("2d06"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"2d06":function(t,a,e){"use strict";(function(t){var n=e("4ea4");e("caad"),e("d3b7"),e("2532"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("5530")),o=e("06a7"),r=t.database(),u=(r.command,"faka_type");function s(t){var a={};for(var e in o.validator)t.includes(e)&&(a[e]=o.validator[e]);return a}var l={data:function(){return{formData:{title:"",description:"",sort:null,state:1},formOptions:{state_localdata:[{text:"删除",value:0},{text:"正常",value:1},{text:"待上架",value:2}]},rules:(0,i.default)({},s(["title","description","sort","state"]))}},onLoad:function(t){var a=t.id;this.formDataId=a,this.getDetail(a)},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.submit().then((function(a){t.submitForm(a)})).catch((function(t){uni.hideLoading()}))},submitForm:function(t){var a=this;r.collection(u).doc(this.formDataId).update(t).then((function(t){uni.showToast({title:"修改成功"}),a.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},getDetail:function(t){var a=this;uni.showLoading({mask:!0}),r.collection(u).doc(t).get().then((function(t){var e=t.result.data[0];e&&(a.formData=e)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};a.default=l}).call(this,e("a9ff")["default"])},3712:function(t,a,e){"use strict";e.r(a);var n=e("4a6d"),i=e("2c3b");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);var r,u=e("f0c5"),s=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);a["default"]=s.exports},"4a6d":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var n={uniForms:e("8784").default,uniFormsItem:e("1b1f").default,uniEasyinput:e("ede4").default,uniDataCheckbox:e("a187").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind"}},[e("uni-forms-item",{attrs:{name:"title",label:"分类名称",required:!0}},[e("uni-easyinput",{attrs:{placeholder:"分类名称"},model:{value:t.formData.title,callback:function(a){t.$set(t.formData,"title",a)},expression:"formData.title"}})],1),e("uni-forms-item",{attrs:{name:"description",label:"分类描述"}},[e("uni-easyinput",{attrs:{placeholder:"分类描述"},model:{value:t.formData.description,callback:function(a){t.$set(t.formData,"description",a)},expression:"formData.description"}})],1),e("uni-forms-item",{attrs:{name:"sort",label:"排序",required:!0}},[e("uni-easyinput",{attrs:{placeholder:"菜单序号（越大越靠后）",type:"number"},model:{value:t.formData.sort,callback:function(a){t.$set(t.formData,"sort",a)},expression:"formData.sort"}})],1),e("uni-forms-item",{attrs:{name:"state",label:"状态"}},[e("uni-data-checkbox",{attrs:{localdata:t.formOptions.state_localdata},model:{value:t.formData.state,callback:function(a){t.$set(t.formData,"state",a)},expression:"formData.state"}})],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),e("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},o=[]}}]);