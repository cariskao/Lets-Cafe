(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c247ad6"],{"014b":function(t,e,n){"use strict";var r=n("e53d"),i=n("07e3"),c=n("8e60"),a=n("63b6"),o=n("9138"),s=n("ebfd").KEY,u=n("294c"),f=n("dbdb"),l=n("45f2"),d=n("62a0"),p=n("5168"),b=n("ccb9"),v=n("6718"),h=n("47ee"),g=n("9003"),y=n("e4ae"),m=n("f772"),x=n("36c3"),C=n("1bc3"),w=n("aebd"),O=n("a159"),_=n("0395"),S=n("bf0b"),P=n("d9f6"),j=n("c3a1"),k=S.f,E=P.f,I=_.f,T=r.Symbol,F=r.JSON,D=F&&F.stringify,N="prototype",J=p("_hidden"),M=p("toPrimitive"),U={}.propertyIsEnumerable,$=f("symbol-registry"),A=f("symbols"),R=f("op-symbols"),G=Object[N],L="function"==typeof T,W=r.QObject,q=!W||!W[N]||!W[N].findChild,K=c&&u(function(){return 7!=O(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(G,e);r&&delete G[e],E(t,e,n),r&&t!==G&&E(G,e,r)}:E,Q=function(t){var e=A[t]=O(T[N]);return e._k=t,e},X=L&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},Y=function(t,e,n){return t===G&&Y(R,e,n),y(t),e=C(e,!0),y(n),i(A,e)?(n.enumerable?(i(t,J)&&t[J][e]&&(t[J][e]=!1),n=O(n,{enumerable:w(0,!1)})):(i(t,J)||E(t,J,w(1,{})),t[J][e]=!0),K(t,e,n)):E(t,e,n)},z=function(t,e){y(t);var n,r=h(e=x(e)),i=0,c=r.length;while(c>i)Y(t,n=r[i++],e[n]);return t},B=function(t,e){return void 0===e?O(t):z(O(t),e)},H=function(t){var e=U.call(this,t=C(t,!0));return!(this===G&&i(A,t)&&!i(R,t))&&(!(e||!i(this,t)||!i(A,t)||i(this,J)&&this[J][t])||e)},V=function(t,e){if(t=x(t),e=C(e,!0),t!==G||!i(A,e)||i(R,e)){var n=k(t,e);return!n||!i(A,e)||i(t,J)&&t[J][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=I(x(t)),r=[],c=0;while(n.length>c)i(A,e=n[c++])||e==J||e==s||r.push(e);return r},tt=function(t){var e,n=t===G,r=I(n?R:x(t)),c=[],a=0;while(r.length>a)!i(A,e=r[a++])||n&&!i(G,e)||c.push(A[e]);return c};L||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(R,n),i(this,J)&&i(this[J],t)&&(this[J][t]=!1),K(this,t,w(1,n))};return c&&q&&K(G,t,{configurable:!0,set:e}),Q(t)},o(T[N],"toString",function(){return this._k}),S.f=V,P.f=Y,n("6abf").f=_.f=Z,n("355d").f=H,n("9aa9").f=tt,c&&!n("b8e3")&&o(G,"propertyIsEnumerable",H,!0),b.f=function(t){return Q(p(t))}),a(a.G+a.W+a.F*!L,{Symbol:T});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var rt=j(p.store),it=0;rt.length>it;)v(rt[it++]);a(a.S+a.F*!L,"Symbol",{for:function(t){return i($,t+="")?$[t]:$[t]=T(t)},keyFor:function(t){if(!X(t))throw TypeError(t+" is not a symbol!");for(var e in $)if($[e]===t)return e},useSetter:function(){q=!0},useSimple:function(){q=!1}}),a(a.S+a.F*!L,"Object",{create:B,defineProperty:Y,defineProperties:z,getOwnPropertyDescriptor:V,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),F&&a(a.S+a.F*(!L||u(function(){var t=T();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e=r[1],(m(e)||void 0!==t)&&!X(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!X(e))return e}),r[1]=e,D.apply(F,r)}}),T[N][M]||n("35e8")(T[N],M,T[N].valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},"0395":function(t,e,n){var r=n("36c3"),i=n("6abf").f,c={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==c.call(t)?o(t):i(r(t))}},"268f":function(t,e,n){t.exports=n("fde4")},"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),i=n("d2c8"),c="includes";r(r.P+r.F*n("5147")(c),"String",{includes:function(t){return!!~i(this,t,c).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"32a6":function(t,e,n){var r=n("241e"),i=n("c3a1");n("ce7e")("keys",function(){return function(t){return i(r(t))}})},"355d":function(t,e){e.f={}.propertyIsEnumerable},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"47ee":function(t,e,n){var r=n("c3a1"),i=n("9aa9"),c=n("355d");t.exports=function(t){var e=r(t),n=i.f;if(n){var a,o=n(t),s=c.f,u=0;while(o.length>u)s.call(t,a=o[u++])&&e.push(a)}return e}},5147:function(t,e,n){var r=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(i){}}return!0}},"53c4":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"all-products"}},[n("div",{staticClass:"container-fluid"},[n("h2",{staticClass:"text-lighter divider"},[t._v("熱銷咖啡")]),n("div",{staticClass:"row no-gutters my-5"},t._l(t.newProduct,function(e){return n("div",{key:e.id,staticClass:"col-6 col-md-3"},[n("div",{staticClass:"img-hovereffect"},[n("div",{staticClass:"img-h img-fluid bg-cover",style:{backgroundImage:"url("+e.imageUrl+")"}}),n("div",{staticClass:"overlay"},[n("router-link",{attrs:{to:{name:"UniProduct",params:{id:e.id}}}},[n("h5",{staticClass:"product-title"},[t._v(t._s(e.title))])])],1)])])}),0)]),n("div",{staticClass:"container"},[n("h2",{staticClass:"text-lighter font-italic divider"},[t._v("Let's drink a coffee")]),n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-md-3"},[n("div",{staticClass:"list-group sticky-top",staticStyle:{top:"82px"}},[n("a",{staticClass:"list-group-item list-group-item-action",class:{active:""===t.searchText},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.searchText=""}}},[t._v("\n            All coffees \n          ")]),t._l(t.categories,function(e){return n("a",{key:e,staticClass:"list-group-item list-group-item-action",class:{active:e===t.searchText},attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.searchText=e}}},[t._v("\n            "+t._s(e)+"\n          ")])})],2)]),n("div",{staticClass:"col-md-9"},[n("div",{staticClass:"row mt-3 mt-md-0"},t._l(t.filterData[t.currentPage],function(e){return n("div",{key:e.id,staticClass:"col-md-6 mb-3"},[n("div",{staticClass:"card border-0 text-center shadow h-100"},[n("div",{staticClass:"card-hovereffect"},[n("img",{staticClass:"img-thumbnail bg-cover",attrs:{src:e.imageUrl,alt:"Let's cafe"}})]),n("router-link",{staticClass:"btn btn-lighter btn-block btn-lg card-btn rounded-0",attrs:{to:{name:"UniProduct",params:{id:e.id}}}},[n("h3",{staticClass:"mb-0"},[t._v(t._s(e.title))])]),n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-text text-truncate"},[t._v(t._s(e.content))]),n("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[e.price?t._e():n("div",{staticClass:"h3"},[t._v(t._s(t._f("currency")(e.origin_price)))]),e.price?n("del",{staticClass:"h5 font-italic"},[t._v("原價 "+t._s(t._f("currency")(e.origin_price)))]):t._e(),e.price?n("div",{staticClass:"h3 text-danger"},[t._v("特價 "+t._s(t._f("currency")(e.price)))]):t._e()])]),n("div",{staticClass:"card-footer p-0"},[n("button",{staticClass:"btn btn-lighter btn-block btn-lg card-btn rounded-0",attrs:{type:"button"},on:{click:function(n){return t.addtoCart(e.id)}}},[t.loadingItem===e.id?n("i",{staticClass:"fas fa-spinner fa-pulse"}):t._e(),t._v("\n                  加到購物車\n                ")])])],1)])}),0)])])]),n("div",{staticClass:"d-flex justify-content-center"},[n("nav",{attrs:{"aria-label":"Page navigation example"}},[n("ul",{staticClass:"pagination border"},t._l(t.pages,function(e){return n("li",{key:e,staticClass:"page-item",class:{active:t.currentPage===e-1}},[n("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.currentPage=e-1}}},[t._v(t._s(e))])])}),0)])])])},i=[],c=n("e814"),a=n.n(c),o=(n("6762"),n("2fdb"),n("cebc")),s=n("2f62"),u={data:function(){return{product:{},searchText:"",currentPage:0,pages:0}},computed:Object(o["a"])({filterData:function(){var t=this,e=[];console.log(t.searchText),e=t.searchText?t.products.filter(function(e){return e.category.includes(t.searchText)}):t.products;var n=[];return e.forEach(function(t,e){e%6===0&&n.push([]);var r=a()(e/6);n[r].push(t)}),t.pages=n.length,t.currentPage=0,console.log("分頁",n),n},loadingItem:function(){return this.$store.state.loadingItem}},Object(s["c"])("productsModule",["products","categories","newProduct"])),methods:Object(o["a"])({},Object(s["b"])("productsModule",["getProducts"]),{addtoCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("cartModule/addtoCart",{id:t,qty:e})}}),created:function(){this.getProducts()}},f=u,l=n("2877"),d=Object(l["a"])(f,r,i,!1,null,null,null);e["default"]=d.exports},"5d6b":function(t,e,n){var r=n("e53d").parseInt,i=n("a1ce").trim,c=n("e692"),a=/^[-+]?0[xX]/;t.exports=8!==r(c+"08")||22!==r(c+"0x16")?function(t,e){var n=i(String(t),3);return r(n,e>>>0||(a.test(n)?16:10))}:r},6718:function(t,e,n){var r=n("e53d"),i=n("584a"),c=n("b8e3"),a=n("ccb9"),o=n("d9f6").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=c?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||o(e,t,{value:a.f(t)})}},6762:function(t,e,n){"use strict";var r=n("5ca1"),i=n("c366")(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"6abf":function(t,e,n){var r=n("e6f3"),i=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},7445:function(t,e,n){var r=n("63b6"),i=n("5d6b");r(r.G+r.F*(parseInt!=i),{parseInt:i})},"85f2":function(t,e,n){t.exports=n("454f")},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a1ce:function(t,e,n){var r=n("63b6"),i=n("25eb"),c=n("294c"),a=n("e692"),o="["+a+"]",s="​",u=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),l=function(t,e,n){var i={},o=c(function(){return!!a[t]()||s[t]()!=s}),u=i[t]=o?e(d):a[t];n&&(i[n]=u),r(r.P+r.F*o,"String",i)},d=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},a4bb:function(t,e,n){t.exports=n("8aae")},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),c=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==i(t))}},b9e9:function(t,e,n){n("7445"),t.exports=n("584a").parseInt},bf0b:function(t,e,n){var r=n("355d"),i=n("aebd"),c=n("36c3"),a=n("1bc3"),o=n("07e3"),s=n("794b"),u=Object.getOwnPropertyDescriptor;e.f=n("8e60")?u:function(t,e){if(t=c(t),e=a(e,!0),s)try{return u(t,e)}catch(n){}if(o(t,e))return i(!r.f.call(t,e),t[e])}},bf90:function(t,e,n){var r=n("36c3"),i=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return i(r(t),e)}})},ccb9:function(t,e,n){e.f=n("5168")},ce7e:function(t,e,n){var r=n("63b6"),i=n("584a"),c=n("294c");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*c(function(){n(1)}),"Object",a)}},cebc:function(t,e,n){"use strict";var r=n("268f"),i=n.n(r),c=n("e265"),a=n.n(c),o=n("a4bb"),s=n.n(o),u=n("85f2"),f=n.n(u);function l(t,e,n){return e in t?f()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=s()(n);"function"===typeof a.a&&(r=r.concat(a()(n).filter(function(t){return i()(n,t).enumerable}))),r.forEach(function(e){l(t,e,n[e])})}return t}n.d(e,"a",function(){return d})},d2c8:function(t,e,n){var r=n("aae3"),i=n("be13");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},e265:function(t,e,n){t.exports=n("ed33")},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(t,e,n){t.exports=n("b9e9")},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},fde4:function(t,e,n){n("bf90");var r=n("584a").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-7c247ad6.ea4d655a.js.map