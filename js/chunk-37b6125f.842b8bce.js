(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37b6125f"],{"2f21":function(t,n,s){"use strict";var e=s("79e5");t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},"55dd":function(t,n,s){"use strict";var e=s("5ca1"),i=s("d8e8"),a=s("4bf8"),r=s("79e5"),o=[].sort,c=[1,2,3];e(e.P+e.F*(r(function(){c.sort(void 0)})||!r(function(){c.sort(null)})||!s("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(a(this)):o.call(a(this),i(t))}})},efd9:function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(n){t.isLoading=n}}}),s("table",{staticClass:"table mt-4"},[t._m(0),s("tbody",t._l(t.sortOrder,function(n,e){return s("tr",{key:e,class:{"text-secondary":!n.is_paid}},[s("td",[t._v(t._s(t._f("date")(n.create_at)))]),s("td",[n.user?s("span",{domProps:{textContent:t._s(n.user.email)}}):t._e()]),s("td",[s("ul",{staticClass:"list-unstyled"},t._l(n.products,function(n,e){return s("li",{key:e},[t._v("\n              "+t._s(n.product.title)+" 數量："+t._s(n.qty)+"\n              "+t._s(n.product.unit)+"\n            ")])}),0)]),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(n.total)))]),s("td",[n.is_paid?s("strong",{staticClass:"text-success"},[t._v("已付款")]):s("span",{staticClass:"text-danger"},[t._v("尚未付款")])]),s("td",[t._v(t._s(n.id))])])}),0)]),s("Pagination",{attrs:{Pages:t.pagination},on:{getPage:t.getOrders}})],1)},i=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("thead",[s("tr",[s("th",[t._v("購買時間")]),s("th",[t._v("Email")]),s("th",[t._v("購買款項")]),s("th",[t._v("應付金額")]),s("th",[t._v("是否付款")]),s("th",[t._v("訂單編號")])])])}],a=(s("55dd"),{data:function(){return{orders:{},isNew:!1,pagination:{},isLoading:!1}},methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("charles","/admin/orders?page=").concat(t);n.isLoading=!0,this.$http.get(s,n.tempProduct).then(function(t){console.log("所有訂單內容",t),n.orders=t.data.orders,n.pagination=t.data.pagination,n.isLoading=!1})}},computed:{sortOrder:function(){var t=this,n=[];return t.orders.length&&(n=t.orders.sort(function(t,n){var s=t.is_paid?1:0,e=n.is_paid?1:0;return e-s})),n}},created:function(){this.getOrders(),console.log("https://vue-course-api.hexschool.io")}}),r=a,o=s("2877"),c=Object(o["a"])(r,e,i,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-37b6125f.842b8bce.js.map