(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a135062"],{"355d":function(t,e){e.f={}.propertyIsEnumerable},5176:function(t,e,a){t.exports=a("51b6")},"51b6":function(t,e,a){a("a3c3"),t.exports=a("584a").Object.assign},"61bc":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary text-white",on:{click:function(e){return t.openModal(!0)}}},[t._v("建立新商品")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.origin_price)))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.price)))]),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("div",{staticClass:"btn-group "},[a("button",{staticClass:"btn btn-outline-basic btn-sm",on:{click:function(a){return t.openModal(!1,e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.delProductModal(e)}}},[t._v("刪除")])])])])}),0)]),a("Pagination",{attrs:{Pages:t.pagination},on:{getPage:t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header text-white",class:{"bg-primary":t.isNew,"btn-basic":!t.isNew}},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[1==t.isNew?a("span",[t._v("新增商品")]):a("span",[t._v("修改商品資料")])]),t._m(1)]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("或 上傳圖片\n                  "),t.status.fileUploading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{alt:"",src:t.tempProduct.imageUrl}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"unit"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,s=e.target,o=s.checked?1:0;if(Array.isArray(a)){var i=null,r=t._i(a,i);s.checked?r<0&&t.$set(t.tempProduct,"is_enabled",a.concat([i])):r>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"is_enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn text-white",class:{"btn-primary":t.isNew,"btn-basic":!t.isNew},attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),a("DeleteModal",{attrs:{Product:t.tempProduct},on:{expunge:t.delProduct}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120"}},[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"120"}},[t._v("原價")]),a("th",{attrs:{width:"120"}},[t._v("售價")]),a("th",{attrs:{width:"90"}},[t._v("是否啟用")]),a("th",{attrs:{width:"120"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],i=a("5176"),r=a.n(i),c=a("1157"),n=a.n(c),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(0),a("div",{staticClass:"modal-body"},[t._v("\n          是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.Product.title))]),t._v(" 商品(刪除後將無法恢復)。\n        ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.expunge}},[t._v("確認刪除")])])])])])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除商品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],u={name:"DeleteModal",props:{Product:{type:Object}},methods:{expunge:function(){this.$emit("expunge")}}},p=u,m=a("2877"),v=Object(m["a"])(p,l,d,!1,null,null,null),g=v.exports,h={data:function(){return{products:[],pagination:{current_page:""},tempProduct:{},isNew:!1,status:{fileUploading:!1}}},components:{DeleteModal:g},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("charles","/admin/products?page=").concat(t);e.$store.dispatch("updateLoading",!0,{root:!0}),this.$http.get(a).then(function(t){e.products=t.data.products,e.pagination=t.data.pagination,e.$store.dispatch("updateLoading",!1,{root:!0})})},openModal:function(t,e){var a=this;t?(a.tempProduct={},a.isNew=!0):(a.tempProduct=r()({},e),a.isNew=!1),n()("#productModal").modal("show")},updateProduct:function(){var t=this,e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("charles","/admin/product"),s="post",o=1,i="無法新增產品";e.isNew||(a="".concat("https://vue-course-api.hexschool.io","/api/").concat("charles","/admin/product/").concat(e.tempProduct.id),s="put",o=e.pagination.current_page,i="無法修改產品"),this.$http[s](a,{data:e.tempProduct}).then(function(a){a.data.success?(n()("#productModal").modal("hide"),t.$bus.$emit("push-msg",a.data.message,"success"),e.getProducts(o)):(n()("#productModal").modal("hide"),t.$bus.$emit("push-msg",i,"danger"),e.getProducts())})},delProductModal:function(t){var e=this;e.tempProduct=r()({},t),n()("#delProductModal").modal("show")},delProduct:function(){var t=this,e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("charles","/admin/product/").concat(e.tempProduct.id);this.$http.delete(a).then(function(a){a.data.success?(n()("#delProductModal").modal("hide"),t.$bus.$emit("push-msg",a.data.message,"success"),e.getProducts(e.pagination.current_page)):(n()("#productModal").modal("hide"),t.$bus.$emit("push-msg",a.data.message,"danger"),e.getProducts())})},uploadFile:function(){var t=this,e=this,a=e.$refs.files.files[0],s=new FormData;s.append("file-to-upload",a);var o="".concat("https://vue-course-api.hexschool.io","/api/").concat("charles","/admin/upload");e.status.fileUploading=!0,this.$http.post(o,s,{headers:{"Content-Type":"multipart/form-data"}}).then(function(a){e.status.fileUploading=!1,a.data.success?e.$set(e.tempProduct,"imageUrl",a.data.imageUrl):t.$bus.$emit("push-msg",a.data.message,"danger")})}},created:function(){this.getProducts()}},f=h,b=Object(m["a"])(f,s,o,!1,null,null,null);e["default"]=b.exports},9306:function(t,e,a){"use strict";var s=a("c3a1"),o=a("9aa9"),i=a("355d"),r=a("241e"),c=a("335c"),n=Object.assign;t.exports=!n||a("294c")(function(){var t={},e={},a=Symbol(),s="abcdefghijklmnopqrst";return t[a]=7,s.split("").forEach(function(t){e[t]=t}),7!=n({},t)[a]||Object.keys(n({},e)).join("")!=s})?function(t,e){var a=r(t),n=arguments.length,l=1,d=o.f,u=i.f;while(n>l){var p,m=c(arguments[l++]),v=d?s(m).concat(d(m)):s(m),g=v.length,h=0;while(g>h)u.call(m,p=v[h++])&&(a[p]=m[p])}return a}:n},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a3c3:function(t,e,a){var s=a("63b6");s(s.S+s.F,"Object",{assign:a("9306")})}}]);
//# sourceMappingURL=chunk-2a135062.5be61cc4.js.map