(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sys_config-list"],{"60c9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.enumConverter=t.validator=void 0;var a={domain_name:{rules:[{required:!0},{format:"string"}],label:"模块名称"},section_name:{rules:[{required:!0},{format:"string"}],label:"功能名称"},key_name:{rules:[{required:!0},{format:"string"}],label:"配置项名称"},key_label:{rules:[{format:"string"}],label:"配置项说明"},key_value:{rules:[{format:"string"}],label:"配置项值"},key_text:{rules:[{format:"string"}],label:"配置项描述"},sort:{rules:[{format:"int"}],label:"排序"},can_delete:{rules:[{format:"int"},{range:[{text:"否",value:0},{text:"是",value:1},{text:"禁用",value:2}]}],defaultValue:1,label:"能删"},memo:{rules:[{format:"string"}],label:"描述"}};t.validator=a;var i={can_delete_valuetotext:{0:"否",1:"是",2:"禁用"}};t.enumConverter=i},"75bb":function(e,t,n){"use strict";(function(e){var a=n("4ea4");n("a15b"),n("d81d"),n("4d63"),n("ac1f"),n("25f0"),n("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5530")),r=n("60c9"),u=(e.database(),""),s=[],l=20,o=1,c={data:function(){return{query:"",where:"",orderby:u,selectedIndexs:[],options:(0,i.default)({pageSize:l,pageCurrent:o},r.enumConverter),imageStyles:{width:64,height:64}}},methods:{getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return s.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this.getWhere(),t=e===this.where;this.where=e,t&&this.loadData()},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var n=this;uni.navigateTo({url:e,events:{refreshData:function(){n.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){this.$refs.udb.remove(this.selectedItems())},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){this.$refs.udb.remove(e)}}};t.default=c}).call(this,n("a9ff")["default"])},c330:function(e,t,n){"use strict";n.r(t);var a=n("75bb"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},edc0:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={unicloudDb:n("960d").default,uniTable:n("b415").default,uniTr:n("b893").default,uniTh:n("30a1").default,uniTd:n("ef8d").default,uniPagination:n("9a7f").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-header"},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-title"}),n("v-uni-view",{staticClass:"uni-sub-title"})],1),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"请输入搜索内容"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo("./add")}}},[e._v("新增")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v("批量删除")])],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:"sys_config",field:"domain_name,section_name,key_name,key_label,key_value,key_text,sort,can_delete,memo",where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data,i=t.pagination,r=t.loading,u=t.error,s=t.options;return[n("uni-table",{attrs:{loading:r,emptyText:u.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center"}},[e._v("模块名称")]),n("uni-th",{attrs:{align:"center"}},[e._v("功能名称")]),n("uni-th",{attrs:{align:"center"}},[e._v("配置项名称")]),n("uni-th",{attrs:{align:"center"}},[e._v("配置项说明")]),n("uni-th",{attrs:{align:"center"}},[e._v("配置项值")]),n("uni-th",{attrs:{align:"center"}},[e._v("配置项描述")]),n("uni-th",{attrs:{align:"center"}},[e._v("排序")]),n("uni-th",{attrs:{align:"center"}},[e._v("能删")]),n("uni-th",{attrs:{align:"center"}},[e._v("描述")]),n("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(a,(function(t,a){return n("uni-tr",{key:a},[n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.domain_name))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.section_name))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.key_name))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.key_label))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.key_value))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.key_text))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.sort))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(s.can_delete_valuetotext[t.can_delete]))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.memo))]),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navigateTo("./edit?id="+t._id,!1)}}},[e._v("修改")]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirmDelete(t._id)}}},[e._v("删除")])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},ff11:function(e,t,n){"use strict";n.r(t);var a=n("edc0"),i=n("c330");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var u,s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"20a3506c",null,!1,a["a"],u);t["default"]=l.exports}}]);