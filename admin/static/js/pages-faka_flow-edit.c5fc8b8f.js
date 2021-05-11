(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-faka_flow-edit"],{"41da":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.enumConverter=a.validator=void 0;var o={product:{rules:[{required:!0},{format:"string"}],label:"商品"},flow_no:{rules:[{required:!0},{format:"string"}],label:"订单编号"},pay_no:{rules:[{format:"string"}],label:"支付订单编号"},price:{rules:[{required:!0},{format:"double"}],label:"价格"},pay_type:{rules:[{required:!0},{format:"int"},{range:[{text:"支付宝",value:1},{text:"微信",value:2},{text:"其它",value:3}]}],defaultValue:1,label:"支付方式"},pay_status:{rules:[{required:!0},{format:"int"},{range:[{text:"待支付",value:1},{text:"已支付",value:2},{text:"已关闭",value:3},{text:"已退款",value:4}]}],defaultValue:1,label:"支付状态"},contact:{rules:[{format:"string"},{format:"email"}],label:"客户联系邮箱"},memo:{rules:[{format:"string"}],label:"客户描述"},pay_user:{rules:[{format:"string"}],label:"付款人"},description:{rules:[{format:"string"}],label:"描述"},state:{rules:[{required:!0},{format:"int"},{range:[{text:"删除",value:0},{text:"正常",value:1}]}],defaultValue:1,label:"有效状态"}};a.validator=o;var n={pay_type_valuetotext:{1:"支付宝",2:"微信",3:"其它"},pay_status_valuetotext:{1:"待支付",2:"已支付",3:"已关闭",4:"已退款"},state_valuetotext:{0:"删除",1:"正常"}};a.enumConverter=n},"4ec1":function(t,a,e){"use strict";e.r(a);var o=e("e7e1"),n=e("72e9");for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);var i,u=e("f0c5"),l=Object(u["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);a["default"]=l.exports},"72e9":function(t,a,e){"use strict";e.r(a);var o=e("86c7"),n=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(a,t,(function(){return o[t]}))}(r);a["default"]=n.a},"86c7":function(t,a,e){"use strict";(function(t){var o=e("4ea4");e("caad"),e("d3b7"),e("2532"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(e("5530")),r=e("41da"),i=t.database(),u=(i.command,"faka_flow");function l(t){var a={};for(var e in r.validator)t.includes(e)&&(a[e]=r.validator[e]);return a}var s={data:function(){return{formData:{product:"",flow_no:"",pay_no:"",price:null,pay_type:1,pay_status:1,contact:"",memo:"",pay_user:"",description:"",state:1},formOptions:{pay_type_localdata:[{text:"支付宝",value:1},{text:"微信",value:2},{text:"其它",value:3}],pay_status_localdata:[{text:"待支付",value:1},{text:"已支付",value:2},{text:"已关闭",value:3},{text:"已退款",value:4}],state_localdata:[{text:"删除",value:0},{text:"正常",value:1}]},rules:(0,n.default)({},l(["product","flow_no","pay_no","price","pay_type","pay_status","contact","memo","pay_user","description","state"]))}},onLoad:function(t){var a=t.id;this.formDataId=a,this.getDetail(a)},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.submit().then((function(a){t.submitForm(a)})).catch((function(t){uni.hideLoading()}))},submitForm:function(t){var a=this;i.collection(u).doc(this.formDataId).update(t).then((function(t){uni.showToast({title:"修改成功"}),a.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},getDetail:function(t){var a=this;uni.showLoading({mask:!0}),i.collection(u).doc(t).get().then((function(t){var e=t.result.data[0];e&&(a.formData=e)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};a.default=s}).call(this,e("a9ff")["default"])},e7e1:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return o}));var o={uniForms:e("ee09").default,uniFormsItem:e("1c3b").default,uniDataCheckbox:e("8d94").default,uniEasyinput:e("0420").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind"}},[e("uni-forms-item",{attrs:{name:"product",label:"商品",required:!0}},[e("uni-data-checkbox",{attrs:{collection:"faka_product",field:"_id as value, product_name as text"},model:{value:t.formData.product,callback:function(a){t.$set(t.formData,"product",a)},expression:"formData.product"}})],1),e("uni-forms-item",{attrs:{name:"flow_no",label:"订单编号",required:!0}},[e("uni-easyinput",{attrs:{placeholder:"订单在本系统编号"},model:{value:t.formData.flow_no,callback:function(a){t.$set(t.formData,"flow_no",a)},expression:"formData.flow_no"}})],1),e("uni-forms-item",{attrs:{name:"pay_no",label:"支付订单编号"}},[e("uni-easyinput",{attrs:{placeholder:"订单在支付宝或微信编号"},model:{value:t.formData.pay_no,callback:function(a){t.$set(t.formData,"pay_no",a)},expression:"formData.pay_no"}})],1),e("uni-forms-item",{attrs:{name:"price",label:"价格",required:!0}},[e("uni-easyinput",{attrs:{placeholder:"商品价格",type:"number"},model:{value:t.formData.price,callback:function(a){t.$set(t.formData,"price",a)},expression:"formData.price"}})],1),e("uni-forms-item",{attrs:{name:"pay_type",label:"支付方式",required:!0}},[e("uni-data-checkbox",{attrs:{localdata:t.formOptions.pay_type_localdata},model:{value:t.formData.pay_type,callback:function(a){t.$set(t.formData,"pay_type",a)},expression:"formData.pay_type"}})],1),e("uni-forms-item",{attrs:{name:"pay_status",label:"支付状态",required:!0}},[e("uni-data-checkbox",{attrs:{localdata:t.formOptions.pay_status_localdata},model:{value:t.formData.pay_status,callback:function(a){t.$set(t.formData,"pay_status",a)},expression:"formData.pay_status"}})],1),e("uni-forms-item",{attrs:{name:"contact",label:"客户联系邮箱"}},[e("uni-easyinput",{attrs:{placeholder:"请输入您的邮箱"},model:{value:t.formData.contact,callback:function(a){t.$set(t.formData,"contact",a)},expression:"formData.contact"}})],1),e("uni-forms-item",{attrs:{name:"memo",label:"客户描述"}},[e("uni-easyinput",{attrs:{placeholder:"客户描述"},model:{value:t.formData.memo,callback:function(a){t.$set(t.formData,"memo",a)},expression:"formData.memo"}})],1),e("uni-forms-item",{attrs:{name:"pay_user",label:"付款人"}},[e("uni-easyinput",{attrs:{placeholder:"支付第三方获取到的付款人唯一标识"},model:{value:t.formData.pay_user,callback:function(a){t.$set(t.formData,"pay_user",a)},expression:"formData.pay_user"}})],1),e("uni-forms-item",{attrs:{name:"description",label:"描述"}},[e("uni-easyinput",{attrs:{placeholder:"描述"},model:{value:t.formData.description,callback:function(a){t.$set(t.formData,"description",a)},expression:"formData.description"}})],1),e("uni-forms-item",{attrs:{name:"state",label:"有效状态",required:!0}},[e("uni-data-checkbox",{attrs:{localdata:t.formOptions.state_localdata},model:{value:t.formData.state,callback:function(a){t.$set(t.formData,"state",a)},expression:"formData.state"}})],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),e("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},r=[]}}]);