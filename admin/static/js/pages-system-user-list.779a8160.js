(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-user-list"],{"2f34":function(n,t,e){var a=e("6b24");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("5086c5f4",a,!0,{sourceMap:!1,shadowMode:!1})},"4f57":function(n,t,e){"use strict";e("a9e3"),e("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("afd0"),i={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return Date.now()}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,a.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var n=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){n.refresh()}),parseInt(this.refreshRate)))}}};t.default=i},"6b24":function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""]),n.exports=t},7183:function(n,t,e){"use strict";var a=e("2f34"),i=e.n(a);i.a},"725e":function(n,t,e){"use strict";(function(n){var a=e("4ea4");e("caad"),e("a15b"),e("d81d"),e("4d63"),e("ac1f"),e("25f0"),e("2532"),e("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("5530")),r=e("2f62"),u=(n.database(),"register_date desc"),s=["username","role_name","mobile","email"],o=20,c=1,l={data:function(){return{query:"",where:"",orderby:u,options:{pageSize:o,pageCurrent:c},selectedIndexs:[]}},computed:(0,i.default)({},(0,r.mapState)("user",["userInfo"])),methods:{onqueryload:function(n){for(var t=0;t<n.length;t++){var e=n[t];e.role=e.role.map((function(n){return n.role_name})).join("、"),e.status=this.parseUserStatus(e.status)}},getWhere:function(){var n=this.query.trim();if(!n)return"";var t=new RegExp(n,"i");return s.map((function(n){return t+".test("+n+")"})).join(" || ")},search:function(n){var t=this.getWhere(),e=t===this.where;this.where=t,e&&this.loadData()},loadData:function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:n})},onPageChanged:function(n){this.$refs.udb.loadData({current:n.current})},navigateTo:function(n,t){var e=this;uni.navigateTo({url:n,events:{refreshData:function(){e.loadData(t)}}})},selectedItems:function(){var n=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return n[t]._id}))},delTable:function(){var n=this.selectedItems(),t=this.userInfo._id;n.includes(t)?uni.showToast({icon:"none",title:"当前账号不能删除自己",duration:1500}):this.$refs.udb.remove(n)},selectionChange:function(n){this.selectedIndexs=n.detail.index},confirmDelete:function(n){var t=this.userInfo._id;t!==n._id?this.$refs.udb.remove(n._id):uni.showToast({icon:"none",title:"不允许 admin 账号删除自己",duration:1500})},parseUserStatus:function(n){return 0===n?"启用":1===n?"禁用":2===n?"审核中":3===n?"审核拒绝":"启用"}}};t.default=l}).call(this,e("a9ff")["default"])},"750a":function(n,t,e){"use strict";e.r(t);var a=e("4f57"),i=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);t["default"]=i.a},b8a3:function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return a}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-text",[n._v(n._s(n.dateShow))])},r=[]},bc50:function(n,t,e){"use strict";e.r(t);var a=e("b8a3"),i=e("750a");for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);var u,s=e("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"d411a642",null,!1,a["a"],u);t["default"]=o.exports},c9a8:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return a}));var a={unicloudDb:e("960d").default,uniTable:e("6f41").default,uniTr:e("60cb").default,uniTh:e("9967").default,uniTd:e("4d45").default,uniDateformat:e("bc50").default,uniPagination:e("2c98").default},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"uni-header"},[e("v-uni-view",{staticClass:"uni-group hide-on-phone"},[e("v-uni-view",{staticClass:"uni-title"},[n._v("用户管理")]),e("v-uni-view",{staticClass:"uni-sub-title"})],1),e("v-uni-view",{staticClass:"uni-group"},[e("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"请输入搜索内容"},on:{confirm:function(t){arguments[0]=t=n.$handleEvent(t),n.search.apply(void 0,arguments)}},model:{value:n.query,callback:function(t){n.query=t},expression:"query"}}),e("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.search.apply(void 0,arguments)}}},[n._v("搜索")]),e("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.navigateTo("./add")}}},[n._v("新增")]),e("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini",disabled:!n.selectedIndexs.length},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.delTable.apply(void 0,arguments)}}},[n._v("批量删除")])],1)],1),e("v-uni-view",{staticClass:"uni-container"},[e("unicloud-db",{ref:"udb",attrs:{collection:"uni-id-users,uni-id-roles",options:n.options,where:n.where,field:"_id,username,role{role_id,role_name},mobile,email,status,register_date","page-data":"replace",orderby:n.orderby,getcount:!0,"page-size":n.options.pageSize,"page-current":n.options.pageCurrent},on:{load:function(t){arguments[0]=t=n.$handleEvent(t),n.onqueryload.apply(void 0,arguments)}},scopedSlots:n._u([{key:"default",fn:function(t){var a=t.data,i=t.pagination,r=t.loading,u=t.error;return[e("uni-table",{attrs:{loading:r,emptyText:u.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=n.$handleEvent(t),n.selectionChange.apply(void 0,arguments)}}},[e("uni-tr",[e("uni-th",{attrs:{align:"center"}},[n._v("用户名")]),e("uni-th",{attrs:{align:"center"}},[n._v("角色")]),e("uni-th",{attrs:{align:"center"}},[n._v("手机号")]),e("uni-th",{attrs:{align:"center"}},[n._v("邮箱")]),e("uni-th",{attrs:{align:"center"}},[n._v("用户状态")]),e("uni-th",{attrs:{width:"170",align:"center"}},[n._v("创建时间")]),e("uni-th",{attrs:{width:"204",align:"center"}},[n._v("操作")])],1),n._l(a,(function(t,a){return e("uni-tr",{key:a},[e("uni-td",{attrs:{align:"center"}},[n._v(n._s(t.username))]),e("uni-td",{attrs:{align:"center"}},[n._v(n._s(t.role))]),e("uni-td",{attrs:{align:"center"}},[n._v(n._s(t.mobile))]),e("uni-td",{attrs:{align:"center"}},[n._v(n._s(t.email))]),e("uni-td",{attrs:{align:"center"}},[n._v(n._s(t.status))]),e("uni-td",{attrs:{align:"center"}},[e("uni-dateformat",{attrs:{date:t.register_date,threshold:[0,0]}})],1),e("uni-td",{attrs:{align:"center"}},[e("v-uni-view",{staticClass:"uni-group"},[e("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.navigateTo("./edit?id="+t._id,!1)}}},[n._v("修改")]),e("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.confirmDelete(t)}}},[n._v("删除")])],1)],1)],1)}))],2),e("v-uni-view",{staticClass:"uni-pagination-box"},[e("uni-pagination",{attrs:{"show-icon":!0,"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){n.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},cd3a:function(n,t,e){"use strict";e.r(t);var a=e("c9a8"),i=e("ea1c");for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);e("7183");var u,s=e("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"3ebadba6",null,!1,a["a"],u);t["default"]=o.exports},ea1c:function(n,t,e){"use strict";e.r(t);var a=e("725e"),i=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);t["default"]=i.a}}]);