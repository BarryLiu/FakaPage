(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-permission-list"],{"1a2e":function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return i}));var i={unicloudDb:e("960d").default,uniTable:e("6f41").default,uniTr:e("60cb").default,uniTh:e("9967").default,uniTd:e("4d45").default,uniDateformat:e("bc50").default,uniPagination:e("2c98").default},a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"uni-header"},[e("v-uni-view",{staticClass:"uni-group hide-on-phone"},[e("v-uni-view",{staticClass:"uni-title"},[n._v("权限管理")]),e("v-uni-view",{staticClass:"uni-sub-title"})],1),e("v-uni-view",{staticClass:"uni-group"},[e("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"权限标识/名称"},on:{confirm:function(t){arguments[0]=t=n.$handleEvent(t),n.search.apply(void 0,arguments)}},model:{value:n.query,callback:function(t){n.query=t},expression:"query"}}),e("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.search.apply(void 0,arguments)}}},[n._v("搜索")]),e("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"default"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.navigateTo("./add")}}},[n._v("新增")]),e("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini",disabled:!n.selectedIndexs.length},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.delTable.apply(void 0,arguments)}}},[n._v("批量删除")])],1)],1),e("v-uni-view",{staticClass:"uni-container"},[e("unicloud-db",{ref:"dataQuery",attrs:{collection:"uni-id-permissions",options:n.options,where:n.where,"page-data":"replace",orderby:n.orderby,getcount:!0,"page-size":n.options.pageSize,"page-current":n.options.pageCurrent},scopedSlots:n._u([{key:"default",fn:function(t){var i=t.data,a=t.pagination,r=t.loading,u=t.error;return[e("uni-table",{attrs:{loading:r,emptyText:u.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=n.$handleEvent(t),n.selectionChange.apply(void 0,arguments)}}},[e("uni-tr",[e("uni-th",{attrs:{width:"250",align:"center"}},[n._v("标识")]),e("uni-th",{attrs:{width:"150",align:"center"}},[n._v("名称")]),e("uni-th",{attrs:{align:"center"}},[n._v("备注")]),e("uni-th",{attrs:{width:"170",align:"center"}},[n._v("创建时间")]),e("uni-th",{attrs:{width:"160",align:"center"}},[n._v("操作")])],1),n._l(i,(function(t,i){return e("uni-tr",{key:i},[e("uni-td",{attrs:{align:"center"}},[n._v(n._s(t.permission_id))]),e("uni-td",{attrs:{align:"center"}},[n._v(n._s(t.permission_name))]),e("uni-td",{attrs:{align:"center"}},[n._v(n._s(t.comment))]),e("uni-td",{attrs:{align:"center"}},[e("uni-dateformat",{attrs:{date:t.create_date,threshold:[0,0]}})],1),e("uni-td",{attrs:{align:"center"}},[e("v-uni-view",{staticClass:"uni-group"},[e("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.navigateTo("./edit?id="+t._id,!1)}}},[n._v("修改")]),e("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.confirmDelete(t.permission_id)}}},[n._v("删除")])],1)],1)],1)}))],2),e("v-uni-view",{staticClass:"uni-pagination-box"},[e("uni-pagination",{attrs:{"show-icon":!0,"page-size":a.size,total:a.count},on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.onPageChanged.apply(void 0,arguments)}},model:{value:a.current,callback:function(t){n.$set(a,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},"21c5":function(n,t,e){"use strict";var i=e("2f10"),a=e.n(i);a.a},"2f10":function(n,t,e){var i=e("65c8");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("7f0a0158",i,!0,{sourceMap:!1,shadowMode:!1})},"4f57":function(n,t,e){"use strict";e("a9e3"),e("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e("afd0"),a={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return Date.now()}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,i.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var n=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){n.refresh()}),parseInt(this.refreshRate)))}}};t.default=a},"65c8":function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""]),n.exports=t},"750a":function(n,t,e){"use strict";e.r(t);var i=e("4f57"),a=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=a.a},b137:function(n,t,e){"use strict";(function(n){var i=e("4ea4");e("a15b"),e("d81d"),e("d3b7"),e("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("96cf");var a=i(e("1da1")),r=(n.database(),"create_date desc"),u=["permission_id","permission_name"],s=20,o=1,c={data:function(){return{query:"",where:"",orderby:r,options:{pageSize:s,pageCurrent:o},selectedIndexs:[]}},methods:{getWhere:function(){var n=this.query.trim();if(!n)return"";var t="/".concat(n,"/i");return u.map((function(n){return t+".test("+n+")"})).join(" || ")},search:function(){var n=this.getWhere(),t=n===this.where;this.where=n,t&&this.loadData()},loadData:function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.dataQuery.loadData({clear:n})},onPageChanged:function(n){this.$refs.dataQuery.loadData({current:n.current})},navigateTo:function(n,t){var e=this;uni.navigateTo({url:n,events:{refreshData:function(){e.loadData(t)}}})},selectedItems:function(){var n=this.$refs.dataQuery.dataList;return this.selectedIndexs.map((function(t){return n[t].permission_id}))},delTable:function(){var n=this;uni.showModal({title:"提示",content:"确认删除多条记录？",success:function(t){t.confirm&&n.delete(n.selectedItems())}})},selectionChange:function(n){this.selectedIndexs=n.detail.index},confirmDelete:function(n){var t=this;uni.showModal({title:"提示",content:"确认删除该记录？",success:function(e){e.confirm&&t.delete(n)}})},delete:function(n){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({mask:!0}),e.next=3,t.$request("system/permission/remove",{id:n}).then((function(n){uni.showToast({title:"删除成功"})})).catch((function(n){uni.showModal({content:n.message||"请求服务失败",showCancel:!1})})).finally((function(n){uni.hideLoading()}));case 3:t.loadData(!1);case 4:case"end":return e.stop()}}),e)})))()}}};t.default=c}).call(this,e("a9ff")["default"])},b8a3:function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return i}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-text",[n._v(n._s(n.dateShow))])},r=[]},bc50:function(n,t,e){"use strict";e.r(t);var i=e("b8a3"),a=e("750a");for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);var u,s=e("f0c5"),o=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"d411a642",null,!1,i["a"],u);t["default"]=o.exports},c155:function(n,t,e){"use strict";e.r(t);var i=e("b137"),a=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=a.a},f3e6:function(n,t,e){"use strict";e.r(t);var i=e("1a2e"),a=e("c155");for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);e("21c5");var u,s=e("f0c5"),o=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"4f6d4c58",null,!1,i["a"],u);t["default"]=o.exports}}]);