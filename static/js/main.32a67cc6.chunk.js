(this["webpackJsonpmap-app"]=this["webpackJsonpmap-app"]||[]).push([[0],{191:function(e,t,n){e.exports={statisticAddon:"MeanPriceInFilterLocation_statisticAddon__ZZijL",textGreen:"MeanPriceInFilterLocation_textGreen__1TxZ3",textRed:"MeanPriceInFilterLocation_textRed__2oGI9"}},192:function(e,t,n){e.exports={container:"App_container__1MQN3",grid:"App_grid__3DnSg",leftPanel:"App_leftPanel__3Hl9k",rightPanel:"App_rightPanel__kN-EW",githubCorner:"App_githubCorner__3BLKB"}},314:function(e,t,n){e.exports={shake:"Navigation_shake__1loJY","bell-shake":"Navigation_bell-shake__28FvC",notificationLink:"Navigation_notificationLink__dwBb-"}},319:function(e,t,n){e.exports={container:"FilterToolbar_container__3xqZF",categoryDropdown:"FilterToolbar_categoryDropdown__2VBih"}},333:function(e,t,n){e.exports={container:"PropertyPriceChart_container__b6m2Q",tooltip:"PropertyPriceChart_tooltip__iGhsd"}},334:function(e,t,n){e.exports={content:"Home_content__sgIvw",highlightedText:"Home_highlightedText__3zLCN"}},436:function(e,t,n){e.exports={container:"Footer_container__st7Zp"}},439:function(e,t,n){e.exports={loadingIndicator:"BuildingPolygons_loadingIndicator__12R8e"}},440:function(e,t,n){e.exports={container:"SplitPaneRight_container__x3kzx"}},441:function(e,t,n){e.exports={stats:"BuildingTable_stats__3-b6T"}},630:function(e,t,n){},631:function(e,t,n){"use strict";n.r(t);var r=n(89),a=n(0),c=n.n(a),i=n(56),o=n.n(i),s=n(24),l=n(51),j=n(431),u=n.n(j),d=n(432),b=new u.a(3e3),p=new l.HttpLink({uri:"https://api.brokalys.com"}),h=new d.RestLink({uri:"https://static-api.brokalys.com"}),O=new l.ApolloClient({cache:new l.InMemoryCache,link:l.ApolloLink.from([b,h,p])}),x=n(259),g=n(435),f=n.n(g),m=n(687),v=n(701),y=n(691),_=n(436),w=n.n(_),k=n(2);var C=function(){return Object(k.jsx)("div",{className:w.a.container,children:Object(k.jsxs)(y.a,{bulleted:!0,horizontal:!0,link:!0,children:[Object(k.jsx)(y.a.Item,{as:"a",href:"https://pinger.brokalys.com/#/terms-and-conditions",target:"_blank",children:"Terms & Conditions"}),Object(k.jsx)(y.a.Item,{as:"a",href:"https://pinger.brokalys.com/#/privacy-policy",target:"_blank",children:"Privacy Policy"})]})})},S=n(699),P=n(688),I=n(129),L=n(695);var N=function(){return Object(k.jsx)(L.a,{color:"red",content:"Support the project",icon:"heart",href:"https://www.buymeacoffee.com/matissjanis",target:"_blank"})},F=n(314),M=n.n(F);var R=function(){return Object(k.jsxs)(S.a,{secondary:!0,children:[Object(k.jsx)(S.a.Header,{children:Object(k.jsx)("img",{src:"https://brokalys.com/favicon.png",alt:"logo",height:"40px"})}),Object(k.jsx)(S.a.Item,{position:"right",children:Object(k.jsx)(P.a,{content:"Sign up for instant notifications about classifieds matching your parameters",inverted:!0,position:"bottom right",trigger:Object(k.jsx)("a",{href:"https://pinger.brokalys.com",target:"_blank",rel:"noopener noreferrer",className:M.a.notificationLink,"data-testid":"pinger-button",children:Object(k.jsx)(I.a,{name:"bell outline",className:M.a.shake})})})}),Object(k.jsx)(S.a.Item,{fitted:!0,children:Object(k.jsxs)(L.a,{primary:!0,animated:"vertical",onClick:function(){window.location.href="mailto:matiss@brokalys.com?subject=Feedback"},children:[Object(k.jsx)(L.a.Content,{visible:!0,children:"Give feedback"}),Object(k.jsx)(L.a.Content,{hidden:!0,children:Object(k.jsx)(I.a,{name:"mail"})})]})}),Object(k.jsx)(S.a.Item,{fitted:!0,children:Object(k.jsx)(N,{})})]})},q=n(22),E=n(146),A=56.94734440635773,B=24.105604143682786,H=13;var T,D="CLICK_ON_BUILDING",z="RETURN_TO_HOME_CLICKED",G="MAP_BOUNDS_CHANGED",Y="MAP_PROJECTION_CHANGED",W="SET_SELECTED_NEIGHBORHOOD",V="SET_NEIGHBORHOOD_FILTERS",Z=function(e){return{type:Y,payload:e}},K=function(e){return{type:V,payload:e}},$=n(700),Q=n(697),U=n(679),J=n(170),X=Object(l.gql)(T||(T=Object(J.a)(["\n  query($region: String!) {\n    buildings(bounds: $region) {\n      id\n      bounds\n      properties {\n        results {\n          category\n          type\n          rent_type\n          price\n          price_per_sqm\n          rooms\n          area\n          floor\n          published_at\n        }\n      }\n    }\n  }\n"])));var ee=n(82),te=function(e){return e.map};var ne=Object(ee.a)(te,(function(e){return function(e){if(e.ne)return[[e.ne.lat,e.ne.lng].join(" "),[e.nw.lat,e.nw.lng].join(" "),[e.sw.lat,e.sw.lng].join(" "),[e.se.lat,e.se.lng].join(" "),[e.ne.lat,e.ne.lng].join(" ")].join(", ")}(e.bounds)})),re=(Object(ee.a)(te,(function(e){return e.bounds})),n(260)),ae=n(31),ce=n(171),ie=function(e){return e.neighborhood},oe=ce.riga.features.reduce((function(e,t){return Object(ae.a)(Object(ae.a)({},e),{},Object(re.a)({},t.properties.id,t.geometry.coordinates))}),{}),se=Object(ee.a)(ie,(function(e){return{id:e.selected,region:oe[e.selected]}})),le=Object(ee.a)(ie,(function(e){return e.filters})),je=Object(ee.a)((function(e){return e.router}),(function(e){return e.location})),ue=Object(ee.a)(je,(function(e){return e.pathname})),de=Object(ee.a)(je,(function(e){return e.search})),be=Object(ee.a)(je,(function(e){return e.query})),pe=n(439),he=n.n(pe);function Oe(e){var t=Object(s.d)(),n=Object(x.e)().buildingId,r=function(e){var t=Object(l.useQuery)(X,{variables:{region:e},context:{debounceKey:"GET_BUILDINGS_AND_PROPERTIES"}}),n=t.loading,r=t.data;return{loading:n,data:(null===r||void 0===r?void 0:r.buildings)||[]}}(e.region),a=r.loading,c=r.data,i=function(e){var n;t((n=e.id,{type:D,payload:n}))};return a?Object(k.jsx)($.a,{circular:!0,className:he.a.loadingIndicator,children:Object(k.jsx)(Q.a,{active:!0,children:Object(k.jsx)(U.a,{})})}):c.filter((function(e){return e.properties.results.length>0})).map((function(e){return Object(k.jsx)(E.b,{onClick:function(){return i(e)},paths:e.bounds.split(", ").map((function(e){var t=e.split(" "),n=Object(q.a)(t,2),r=n[0],a=n[1];return{lat:parseFloat(r),lng:parseFloat(a)}})),options:n&&n===e.id.toString()?{strokeColor:"green",fillColor:"green"}:{strokeColor:"black",fillColor:"black"}},e.id)}))}function xe(){var e=Object(s.e)(ne);return e?Object(k.jsx)(Oe,{region:e}):null}var ge=c.a.memo(xe);function fe(){var e=Object(s.e)(se).region;return Object(k.jsx)(E.b,{paths:e.map((function(e){return e.map((function(e){var t=Object(q.a)(e,2);return{lng:t[0],lat:t[1]}}))})),options:{strokeColor:"black",fillColor:"black",fillOpacity:.2}})}var me={width:"100%",height:"100%"};function ve(e){var t=function(){var e=Object(x.e)(),t=e.lat,n=void 0===t?A:t,r=e.lng,c=void 0===r?B:r,i=e.zoom,o=void 0===i?H:i;return Object(a.useMemo)((function(){return{lat:parseFloat(n),lng:parseFloat(c),zoom:parseInt(o,10)}}),[n,c,o])}(),n=Object(a.useState)(null),r=Object(q.a)(n,2),c=r[0],i=r[1],o=Object(E.c)({googleMapsApiKey:"AIzaSyADke6h-GKt5dPB8IcjVeQ0lAaC1wL_LwY"}),l=o.isLoaded,j=o.loadError,u=Object(s.d)(),d=Object(a.useCallback)((function(){c&&u({type:G,payload:c})}),[u,c]),b=Object(a.useCallback)((function(){return u(Z(c))}),[u,c]);return j?Object(k.jsx)("div",{children:"Failed loading the map. Please try again later."}):l?function(){var e={zoomControlOptions:{position:window.google.maps.ControlPosition.RIGHT_TOP},rotateControl:!1,scaleControl:!1,streetViewControl:!1,panControl:!1,fullscreenControl:!1};return Object(k.jsxs)(E.a,{options:e,mapContainerStyle:me,center:t,zoom:t.zoom,onLoad:i,onProjectionChanged:b,onDragEnd:d,onZoomChanged:d,children:[t.zoom<=14&&t.zoom>=12&&Object(k.jsx)(fe,{}),t.zoom>=17&&Object(k.jsx)(ge,{})]})}():Object(k.jsx)("div",{children:"Loading..."})}var ye=c.a.memo(ve),_e=n(440),we=n.n(_e);var ke,Ce=function(){return Object(k.jsx)("div",{className:we.a.container,children:Object(k.jsx)(ye,{})})},Se=n(172),Pe=n(173),Ie=n.n(Pe),Le=n(693),Ne=function(e){var t,n="pending",r=e.then((function(e){n="success",t=e}),(function(e){n="error",t=e}));return{read:function(){switch(n){case"pending":throw r;case"error":throw t;default:return t}}}};function Fe(){var e=l.useQuery.apply(void 0,arguments);return e.loading&&Ne(new Promise((function(t){return!e.loading&&t()}))).read(),e}var Me=Object(l.gql)(ke||(ke=Object(J.a)(["\n  query($id: Int!) {\n    buildings(id: $id) {\n      id\n      bounds\n      properties {\n        results {\n          category\n          type\n          rent_type\n          price\n          price_per_sqm\n          rooms\n          area\n          floor\n          published_at\n        }\n      }\n    }\n  }\n"])));var Re=n(50),qe=n(212),Ee=n(692),Ae=n(704),Be=n(261),He=n.n(Be),Te=n(96),De=n(696);function ze(e){return e.reduce((function(e,t){return e+t}),0)/e.length}function Ge(e){var t={total:Math.min.apply(Math,Object(Te.a)(e.prices.total)),sqm:Math.min.apply(Math,Object(Te.a)(e.prices.sqm))},n={total:parseInt(ze(e.prices.total),10),sqm:parseInt(ze(e.prices.sqm),10)},r={total:Math.max.apply(Math,Object(Te.a)(e.prices.total)),sqm:Math.max.apply(Math,Object(Te.a)(e.prices.sqm))};return Object(k.jsx)(v.a,{columns:3,textAlign:"center",divided:!0,children:Object(k.jsxs)(v.a.Row,{children:[Object(k.jsx)(v.a.Column,{children:Object(k.jsxs)(De.a,{size:"small",children:[Object(k.jsx)(De.a.Label,{children:"Min"}),Object(k.jsxs)(De.a.Value,{children:[t.total.toLocaleString(),Object(k.jsx)("small",{children:"\u20ac"})]}),Object(k.jsxs)(De.a.Label,{children:["(",t.sqm.toLocaleString()," ",Object(k.jsxs)("small",{children:["\u20ac/m",Object(k.jsx)("sup",{children:"2"})]}),")"]})]})}),Object(k.jsx)(v.a.Column,{children:Object(k.jsxs)(De.a,{size:"small",children:[Object(k.jsx)(De.a.Label,{children:"Average"}),Object(k.jsxs)(De.a.Value,{children:[n.total.toLocaleString(),Object(k.jsx)("small",{children:"\u20ac"})]}),Object(k.jsxs)(De.a.Label,{children:["(",n.sqm.toLocaleString()," ",Object(k.jsxs)("small",{children:["\u20ac/m",Object(k.jsx)("sup",{children:"2"})]}),")"]})]})}),Object(k.jsx)(v.a.Column,{children:Object(k.jsxs)(De.a,{size:"small",children:[Object(k.jsx)(De.a.Label,{children:"Max"}),Object(k.jsxs)(De.a.Value,{children:[r.total.toLocaleString(),Object(k.jsx)("small",{children:"\u20ac"})]}),Object(k.jsxs)(De.a.Label,{children:["(",r.sqm.toLocaleString()," ",Object(k.jsxs)("small",{children:["\u20ac/m",Object(k.jsx)("sup",{children:"2"})]}),")"]})]})})]})})}var Ye=n(441),We=n.n(Ye),Ve={yearly:"/y",monthly:"/m",weekly:"/w",daily:"/d",hourly:"/h"},Ze=[{Header:"Category",accessor:"category",filter:"equals"},{Header:"Type",accessor:"type",filter:"equals"},{accessor:"rent_type",filter:"equals"},{Header:"Total price",Cell:function(e){var t=e.row.original;return Object(k.jsxs)(k.Fragment,{children:[t.price.toLocaleString()," \u20ac","rent"===t.type&&Ve[t.rent_type]]})},accessor:"price"},{Header:"SQM Price",Cell:function(e){var t=e.value;return t?Object(k.jsxs)(k.Fragment,{children:[Math.round(t).toLocaleString()," \u20ac/m",Object(k.jsx)("sup",{children:"2"})]}):null},accessor:"price_per_sqm"},{Header:"Area",Cell:function(e){var t=e.value;return t?Object(k.jsxs)(k.Fragment,{children:[t.toLocaleString()," m",Object(k.jsx)("sup",{children:"2"})]}):null},accessor:"area"},{Header:"Rooms",accessor:"rooms"},{Header:"Published at",Cell:function(e){var t=e.value;return t?He()(t).format("YYYY-MM-DD HH:mm"):"Before 2018"},accessor:"published_at"}];function Ke(e){return["category","type"].includes(e.column.id)?"left":"right"}function $e(){var e,t=Object(s.d)(),n=Object(s.e)((e="page",Object(ee.a)(be,(function(t){return t[e]}))))||1,r=Object(a.useCallback)((function(e,n){var r=n.activePage;t(Object(Re.e)("?page="+r))}),[t]);return[parseInt(n,10)-1,r]}function Qe(e){var t=$e(),n=Object(q.a)(t,2),r=n[0],c=n[1],i=Object(qe.useTable)({columns:Ze,data:e.building.properties.results,initialState:{sortBy:[{id:"published_at",desc:!0}],pageSize:15,pageIndex:r,hiddenColumns:["rent_type"]}},qe.useFilters,qe.useSortBy,qe.usePagination),o=i.setFilter,s=i.headerGroups,l=i.rows,j=i.page,u=i.prepareRow,d=i.pageCount,b=i.gotoPage,p=i.state.pageIndex,h=Object(a.useCallback)((function(e,t){b(t.activePage-1),c(e,t)}),[b,c]);Object(a.useEffect)((function(){Object.entries(e.filters).forEach((function(e){var t=Object(q.a)(e,2),n=t[0],r=t[1];return o(n,r)})),h({},{activePage:1})}),[e.filters,o,e.building,h]);var O=Object(a.useMemo)((function(){return{total:l.map((function(e){return e.original.price})).filter((function(e){return e>0})),sqm:l.map((function(e){return e.original.price_per_sqm})).filter((function(e){return e>0}))}}),[l]),x=j.length>0;return Object(k.jsxs)(k.Fragment,{children:[x&&Object(k.jsx)("div",{className:We.a.stats,children:Object(k.jsx)(Ge,{prices:O})}),Object(k.jsxs)(Ee.a,{singleLine:x,sortable:!0,children:[Object(k.jsx)(Ee.a.Header,{children:s.map((function(e){return Object(k.jsx)(Ee.a.Row,Object(ae.a)(Object(ae.a)({textAlign:"center"},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(k.jsx)(Ee.a.HeaderCell,Object(ae.a)(Object(ae.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{sorted:e.isSorted?e.isSortedDesc?"descending":"ascending":null,children:e.render("Header")}))}))}))}))}),Object(k.jsxs)(Ee.a.Body,{children:[j.map((function(e){return u(e),Object(k.jsx)(Ee.a.Row,Object(ae.a)(Object(ae.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(k.jsx)(Ee.a.Cell,Object(ae.a)(Object(ae.a)({textAlign:Ke(e)},e.getCellProps()),{},{children:e.render("Cell")}))}))}))})),!x&&Object(k.jsx)(Ee.a.Row,{children:Object(k.jsx)(Ee.a.Cell,{colSpan:Ze.length,textAlign:"center",children:Object(k.jsxs)("p",{children:[Object(k.jsx)("strong",{children:"No classifieds could be found with the given filters."})," ","Clear the filters or open a different property to see data."]})})})]}),d>1&&Object(k.jsx)(Ee.a.Footer,{children:Object(k.jsx)(Ee.a.Row,{children:Object(k.jsx)(Ee.a.HeaderCell,{colSpan:Ze.length,children:Object(k.jsx)(Ae.a,{activePage:p+1,boundaryRange:1,onPageChange:h,size:"mini",siblingRange:2,totalPages:d})})})})]})]})}var Ue=n(689),Je=[{value:"apartment",text:"Apartment"},{value:"house",text:"House"},{value:"office",text:"Office"}],Xe=[{value:"sell",text:"Sell"},{value:"rent",text:"Rent"},{value:"auction",text:"Auction"}],et=[{value:"yearly",text:"Yearly"},{value:"monthly",text:"Monthly"},{value:"weekly",text:"Weekly"},{value:"daily",text:"Daily"}];function tt(e){var t=e.onChange,n=Object(a.useState)(),r=Object(q.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(),s=Object(q.a)(o,2),l=s[0],j=s[1],u=Object(a.useState)(),d=Object(q.a)(u,2),b=d[0],p=d[1],h=Object(a.useMemo)((function(){return{category:c||void 0,type:l||void 0,rent_type:"rent"===l&&b||void 0}}),[c,l,b]);return Object(a.useEffect)((function(){t(h)}),[t,h]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(S.a.Item,{fitted:!0,children:Object(k.jsx)(Ue.a,{placeholder:"Select category",clearable:!0,selection:!0,value:c,options:Je,onChange:function(e,t){return i(t.value)}})}),Object(k.jsx)(S.a.Item,{fitted:!0,children:Object(k.jsx)(Ue.a,{placeholder:"Select type",clearable:!0,selection:!0,value:l,options:Xe,onChange:function(e,t){return j(t.value)}})}),"rent"===l&&Object(k.jsx)(S.a.Item,{fitted:!0,children:Object(k.jsx)(Ue.a,{placeholder:"Select rent type",clearable:!0,selection:!0,fluid:!0,value:b,options:et,onChange:function(e,t){return p(t.value)}})})]})}function nt(e){var t=Object(s.d)(),n=Object(a.useCallback)((function(){return t({type:z})}),[t]);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(S.a,{secondary:!0,children:[Object(k.jsx)(S.a.Item,{fitted:!0,children:Object(k.jsx)(L.a,{content:"Return",icon:"left arrow",labelPosition:"left",onClick:n})}),Object(k.jsx)(tt,{onChange:e.onFiltersChange})]}),Object(k.jsx)(Le.a,{info:!0,children:Object(k.jsx)("p",{children:"Data might be inaccurate. Some people provide wrong locations for their classifieds."})})]})}function rt(e){var t=function(){var e=Object(x.e)().buildingId,t=Fe(Me,{variables:{id:Number(e)}}).data;return((null===t||void 0===t?void 0:t.buildings)||[])[0]}();return t?Object(k.jsx)(Qe,Object(ae.a)({building:t},e)):Object(k.jsxs)(Le.a,{warning:!0,children:[Object(k.jsx)(Le.a.Header,{children:"Building not found"}),Object(k.jsx)("p",{children:"We could not locate a building here. Try again later."})]})}var at=function(){var e=Object(a.useState)({}),t=Object(q.a)(e,2),n=t[0],r=t[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(nt,{onFiltersChange:r}),Object(k.jsx)(Se.ErrorBoundary,{fallback:Object(k.jsx)(Le.a,{negative:!0,children:"An unexpected error occured when attempting to fetch the data. Try again later."}),children:Object(k.jsx)(c.a.Suspense,{fallback:Object(k.jsxs)($.a,{basic:!0,children:[Object(k.jsx)(Q.a,{inverted:!0,active:!0,children:Object(k.jsx)(U.a,{content:"Loading the building data.."})}),Object(k.jsx)(Ie.a,{count:20})]}),children:Object(k.jsx)(rt,{filters:n})})})]})},ct=n(317),it=n.n(ct),ot=n(442),st=n.n(ot);it.a.start({releaseStage:"production",enabledReleaseStages:["production"],apiKey:"d834235e29f9f8aba796385d728e56f2",plugins:[new st.a],collectUserIp:!1});var lt=it.a,jt=n(702),ut=n(318),dt=n(319),bt=n.n(dt),pt=ce.riga.features.map((function(e){return{value:e.properties.id,text:e.properties.name}})),ht=[{value:"apartment",text:"Apartment"},{value:"house",text:"House"},{value:"land",text:"Land"}],Ot=[{value:"sell",text:"Sell"},{value:"rent",text:"Rent"}],xt=[{value:"total",text:"Total price"},{value:"sqm",text:"Price/sqm"}];var gt,ft=function(){var e=Object(s.d)(),t=Object(s.e)(le),n=t.category,r=t.type,a=t.price,c=Object(s.e)(se).id;return Object(k.jsx)("div",{className:bt.a.container,children:Object(k.jsxs)(S.a,{secondary:!0,children:[Object(k.jsx)(S.a.Item,{fitted:!0,children:Object(k.jsx)(Ue.a,{placeholder:"Select location",search:function(e,t){var n=new RegExp(Object(ut.transliterate)(t).replace(/[^a-z\s-]/gi,""),"i");return e.filter((function(e){return n.test(Object(ut.transliterate)(e.text))}))},selection:!0,options:pt,value:c,onChange:function(t,n){return e((r=n.value,{type:W,payload:r}));var r}})}),Object(k.jsx)(S.a.Item,{fitted:!0,className:bt.a.categoryDropdown,children:Object(k.jsx)(Ue.a,{placeholder:"Select category",fluid:!0,selection:!0,value:n,options:ht,onChange:function(t,n){return e(K({category:n.value}))}})}),Object(k.jsx)(S.a.Item,{fitted:!0,children:Object(k.jsx)(Ue.a,{placeholder:"Select type",fluid:!0,selection:!0,value:r,options:Ot,onChange:function(t,n){return e(K({type:n.value}))}})}),Object(k.jsx)(S.a.Item,{fitted:!0,children:Object(k.jsx)(Ue.a,{placeholder:"Select price type",fluid:!0,selection:!0,value:a,options:xt,onChange:function(t,n){return e(K({price:n.value}))}})})]})})},mt=n(658),vt=n(462),yt=n(16),_t=n(449),wt=n(333),kt=n.n(wt),Ct=Object(l.gql)(gt||(gt=Object(J.a)(['\n  query($filters: String!) {\n    response(filters: $filters)\n      @rest(\n        type: "PriceResults"\n        method: "GET"\n        path: "/stats/monthly?discard=0.1&filters={args.filters}"\n      ) {\n      loadingResults\n      results {\n        count\n        start_datetime\n        end_datetime\n        price {\n          min\n          max\n          median\n          mean\n          mode\n        }\n        pricePerSqm {\n          min\n          max\n          median\n          mean\n          mode\n        }\n      }\n    }\n  }\n'])));function St(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,n=Object(a.useState)(0),r=Object(q.a)(n,2),c=r[0],i=r[1],o=Object(s.e)(le),l=o.category,j=o.type,u=Object(s.e)(se),d=u.id,b={category:l,type:t||j,location_classificator:d},p=encodeURIComponent(JSON.stringify(b)),h=Fe(Ct,{variables:{filters:p},pollInterval:c}),O=h.data,x=(null===O||void 0===O?void 0:O.response)||{},g=x.loadingResults;return Object(a.useEffect)((function(){i((function(){return 0===g?0:g<=2?1e3:3e3}))}),[g]),O.response}function Pt(){var e=Object(s.e)(le).price,t=St().results,n=Object(a.useMemo)((function(){return[{id:"Average Price",data:t.map((function(t){var n="sqm"===e?t.pricePerSqm:t.price;return Object(ae.a)(Object(ae.a)({},n),{},{x:t.start_datetime.substr(0,10),y:n.mean})}))}]}),[t,e]),r=n[0].data.reduce((function(e,t){var n=t.max;return n>e?n:e}),0);function c(t){var n=t.value;return Object(k.jsxs)("span",{children:[Number(n).toLocaleString("en",{minimumFractionDigits:2})," ","sqm"===e?Object(k.jsxs)("span",{children:["\u20ac/m",Object(k.jsx)("sup",{children:"2"})]}):"\u20ac"]})}return Object(k.jsx)(_t.a,{data:n,margin:{top:10,right:10,bottom:100,left:50},xScale:{type:"time",format:"%Y-%m-%d",precision:"month"},xFormat:"time:%Y-%m-%d",yScale:{type:"linear",stacked:!1,max:1.05*r},sliceTooltip:function(e){var t=e.slice;return Object(k.jsx)("div",{className:kt.a.tooltip,children:t.points.map((function(e){return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{children:Object(k.jsx)("strong",{children:He()(e.data.x).format("YYYY-MM-DD")})}),Object(k.jsxs)("div",{children:[Object(k.jsx)("strong",{children:"Min:"})," ",Object(k.jsx)(c,{value:e.data.min})]}),Object(k.jsxs)("div",{children:[Object(k.jsxs)("strong",{children:[e.serieId,":"]})," ",Object(k.jsx)(c,{value:e.data.yFormatted})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("strong",{children:"Max:"})," ",Object(k.jsx)(c,{value:e.data.max})]}),Object(k.jsx)("hr",{}),Object(k.jsxs)("div",{children:[Object(k.jsx)("strong",{children:"Mode:"})," ",Object(k.jsx)(c,{value:e.data.mode})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("strong",{children:"Median:"})," ",Object(k.jsx)(c,{value:e.data.median})]})]},e.id)}))})},axisBottom:{format:"%Y-%m",tickValues:"every 2 months",tickRotation:-90},axisLeft:{format:function(e){return"".concat(e," \u20ac")}},enablePoints:!0,curve:"monotoneX",useMesh:!0,enableSlices:"x",layers:["grid","markers","axes","areas","crosshair",It,"lines","points","slices","mesh","legends"]})}function It(e){var t=e.series,n=e.xScale,r=e.yScale,a=(e.innerHeight,Object(mt.a)().x((function(e){return n(e.data.x)})).y0((function(e){return r(e.data.min)})).y1((function(e){return r(e.data.max)})).curve(vt.a));return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(yt.b,{defs:[{id:"pattern",type:"patternLines",background:"transparent",color:"#3daff7",lineWidth:1,spacing:6,rotation:-45}]}),Object(k.jsx)("path",{d:a(t[0].data),fill:"url(#pattern)",fillOpacity:.2,stroke:"#3daff7",strokeWidth:.4})]})}var Lt=function(){return Object(k.jsx)($.a,{basic:!0,className:kt.a.container,children:Object(k.jsx)(Se.ErrorBoundary,{fallback:Object(k.jsx)(Le.a,{negative:!0,children:"Failed loading chart data. Please try again later."}),onError:lt.notify,children:Object(k.jsx)(c.a.Suspense,{fallback:Object(k.jsx)(Q.a,{inverted:!0,active:!0,children:Object(k.jsx)(U.a,{})}),children:Object(k.jsx)(Pt,{})})})})};var Nt=n(191),Ft=n.n(Nt);function Mt(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("p",{children:"MoM: month-over-month"}),Object(k.jsx)("p",{children:"YoY: year-over-year"})]})}function Rt(){var e=Object(s.e)(le).price,t=function(){var e=Object(s.e)(le).price,t=St(),n=t.loadingResults,r=t.results;if(n>0)return{change:{}};var a="sqm"===e?"pricePerSqm":"price",c=r[r.length-1][a].mean;return{price:c,change:{mom:100*(1-c/r[r.length-2][a].mean),yoy:100*(1-c/r[r.length-13][a].mean)}}}(),n=t.price,r=t.change.mom,a=t.change.yoy;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(De.a.Value,{children:[Object(k.jsxs)("div",{className:Ft.a.statisticAddon,children:[isFinite(r)&&Object(k.jsxs)("div",{children:[Object(k.jsxs)("span",{className:r<0?Ft.a.textGreen:Ft.a.textRed,children:[r<0?"+":"",-r.toFixed(2),"%"]})," ","MoM"]}),isFinite(a)&&Object(k.jsxs)("div",{children:[Object(k.jsxs)("span",{className:a<0?Ft.a.textGreen:Ft.a.textRed,children:[a<0?"+":"",-a.toFixed(2),"%"]})," ","YoY"]})]}),n?parseInt(n,10).toLocaleString("en"):"?"]}),Object(k.jsxs)(De.a.Label,{children:["Average Price (\u20ac","sqm"===e?Object(k.jsxs)("span",{children:["/m",Object(k.jsx)("sup",{children:"2"})]}):"",")"," ",Object(k.jsx)(P.a,{content:Object(k.jsx)(Mt,{}),trigger:Object(k.jsx)(I.a,{name:"help circle"})})]})]})}var qt=function(){return Object(k.jsx)(De.a,{children:Object(k.jsx)(c.a.Suspense,{fallback:Object(k.jsx)(Ie.a,{height:60,width:240}),children:Object(k.jsx)(Rt,{})})})};function Et(){var e=function(){var e=Object(s.e)(le).price,t=St({type:"rent"}).results,n=St({type:"sell"}).results;if(!t.length||!n.length)return 0;var r="sqm"===e?"pricePerSqm":"price",a=t[t.length-1][r].mean,c=n[n.length-1][r].mean;return a&&c?a/c*100:0}(),t=e?"".concat(e.toFixed(2),"%"):"?";return Object(k.jsx)(De.a.Value,{children:t})}function At(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("p",{children:"How much of the invested capital can I expect to make back each year?"}),Object(k.jsx)("p",{children:"A bigger number is better for landlords; a smaller - for renters."}),Object(k.jsx)("p",{children:"Calculation: average rent price / sell price in the last month"})]})}var Bt=function(){return Object(k.jsxs)(De.a,{children:[Object(k.jsx)(c.a.Suspense,{fallback:Object(k.jsx)(Ie.a,{height:42}),children:Object(k.jsx)(Et,{})}),Object(k.jsxs)(De.a.Label,{children:["Rental Yield"," ",Object(k.jsx)(P.a,{content:Object(k.jsx)(At,{}),trigger:Object(k.jsx)(I.a,{name:"help circle"})})]})]})},Ht=n(334),Tt=n.n(Ht);var Dt=function(){var e=Object(s.e)(se).id,t=ce.riga.features.find((function(t){return t.properties.id===e})).properties.name;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{className:Tt.a.content,children:[Object(k.jsxs)(jt.a,{as:"h2",children:["Average Prices in"," ",Object(k.jsx)("span",{className:Tt.a.highlightedText,children:t})]}),Object(k.jsx)(ft,{}),Object(k.jsx)(Lt,{}),Object(k.jsx)(v.a,{children:Object(k.jsxs)(v.a.Row,{children:[Object(k.jsxs)(v.a.Column,{tablet:16,computer:16,largeScreen:10,widescreen:7,children:[Object(k.jsx)(jt.a,{as:"h3",children:"Last Month"}),Object(k.jsx)(Se.ErrorBoundary,{fallback:Object(k.jsx)(Le.a,{negative:!0,children:"Failed loading the data. Please try again later."}),onError:lt.notify,children:Object(k.jsxs)(De.a.Group,{size:"small",children:[Object(k.jsx)(qt,{}),Object(k.jsx)(Bt,{})]})})]}),Object(k.jsx)(v.a.Column,{tablet:16,computer:16,largeScreen:6,widescreen:9,verticalAlign:"bottom",stretched:!0,children:Object(k.jsx)(Le.a,{info:!0,icon:"info",header:"Interested in a specific building?",content:"Zoom in on the map and click on a building. This will show data about your selected property."})})]})})]})})},zt=n(192),Gt=n.n(zt);var Yt=function(e){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(m.a,{fluid:!0,className:Gt.a.container,children:[Object(k.jsx)(f.a,{className:Gt.a.githubCorner,href:"https://github.com/brokalys/map-app",direction:"left"}),Object(k.jsx)(x.c,{children:Object(k.jsx)(x.a,{path:["/:lat,:lng,:zoom/building/:buildingId(\\d+)","/:lat,:lng,:zoom","/"],children:Object(k.jsxs)(v.a,{className:Gt.a.grid,children:[Object(k.jsxs)(v.a.Column,{computer:9,className:Gt.a.leftPanel,children:[Object(k.jsx)(R,{}),Object(k.jsxs)(x.c,{children:[Object(k.jsx)(x.a,{path:"/:lat,:lng,:zoom/building/:buildingId(\\d+)",children:Object(k.jsx)(at,{})}),Object(k.jsx)(x.a,{path:"*",children:Object(k.jsx)(Dt,{})})]})]}),Object(k.jsx)(v.a.Column,{computer:7,className:Gt.a.rightPanel,children:Object(k.jsx)(Ce,{})})]})})})]}),Object(k.jsx)(C,{})]})},Wt=n(423),Vt=n(97),Zt=n(90),Kt=n(454),$t=n(456),Qt={bounds:{}};function Ut(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:var n=t.payload,r={nw:{lat:n.getBounds().getSouthWest().lat(),lng:n.getBounds().getNorthEast().lng()},ne:{lat:n.getBounds().getNorthEast().lat(),lng:n.getBounds().getNorthEast().lng()},sw:{lat:n.getBounds().getSouthWest().lat(),lng:n.getBounds().getSouthWest().lng()},se:{lat:n.getBounds().getNorthEast().lat(),lng:n.getBounds().getSouthWest().lng()}};return Object(ae.a)(Object(ae.a)({},e),{},{bounds:r});default:return e}}var Jt={selected:"latvia-riga-vecpilseta",filters:{category:"apartment",type:"sell",price:"sqm"}};function Xt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(ae.a)(Object(ae.a)({},e),{},{selected:t.payload});case V:return Object(ae.a)(Object(ae.a)({},e),{},{filters:Object(ae.a)(Object(ae.a)({},e.filters),t.payload)});default:return e}}var en=function(e){return Object(Zt.combineReducers)({router:Object(r.b)(e),map:Ut,neighborhood:Xt})},tn=n(14),nn=n.n(tn),rn=n(40),an=nn.a.mark(on),cn=nn.a.mark(sn);function on(){var e,t;return nn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(rn.c)(ue);case 2:return e=n.sent,t=e.split("/"),n.next=6,Object(rn.b)(Object(Re.d)("/".concat(t[1])));case 6:case"end":return n.stop()}}),an)}function sn(){return nn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rn.e)(z,on);case 2:case"end":return e.stop()}}),cn)}var ln=sn,jn=nn.a.mark(bn),un=nn.a.mark(pn);function dn(e){var t=e.reduce((function(t,n){return[t[0]+n[0]/e.length,t[1]+n[1]/e.length]}),[0,0]);return{lat:t[1],lng:t[0]}}function bn(e){var t,n,r,a,c;return nn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rn.c)(se);case 2:return t=e.sent,n=t.region,r=dn(n[0]),a=r.lat,c=r.lng,e.next=7,Object(rn.b)(Object(Re.e)("/".concat(a,",").concat(c,",13")));case 7:case"end":return e.stop()}}),jn)}function pn(){return nn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rn.d)(W,bn);case 2:case"end":return e.stop()}}),un)}var hn=pn,On=nn.a.mark(gn),xn=nn.a.mark(fn);function gn(e){var t,n,r,a;return nn.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.next=3,Object(rn.c)(ue);case 3:return n=c.sent,r=n.split("/"),a="/".concat(r[1],"/building/").concat(t),"building"===r[2]&&r[3]===String(t)&&(a="/".concat(r[1])),c.next=9,Object(rn.b)(Object(Re.d)(a));case 9:case"end":return c.stop()}}),On)}function fn(){return nn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rn.e)(D,gn);case 2:case"end":return e.stop()}}),xn)}var mn=fn,vn=nn.a.mark(_n),yn=nn.a.mark(wn);function _n(e){var t,n,r,a,c,i;return nn.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.getZoom(),o.next=4,Object(rn.c)(ue);case 4:return r=o.sent,o.next=7,Object(rn.c)(de);case 7:if(a=o.sent,c=r.split("/"),i="/".concat(t.center.lat(),",").concat(t.center.lng(),",").concat(n),"building"===c[2]&&n>14&&(i+="/building/".concat(c[3])),i!==r){o.next=13;break}return o.abrupt("return");case 13:return o.next=15,Object(rn.b)(Object(Re.e)(i+a));case 15:case"end":return o.stop()}}),vn)}function wn(){return nn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rn.e)(G,_n);case 2:case"end":return e.stop()}}),yn)}var kn=wn,Cn=nn.a.mark(Pn),Sn=nn.a.mark(In);function Pn(e){var t;return nn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(rn.b)(Z(t));case 3:case"end":return n.stop()}}),Cn)}function In(){return nn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rn.e)(G,Pn);case 2:case"end":return e.stop()}}),Sn)}var Ln=In,Nn=nn.a.mark(Fn);function Fn(){return nn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rn.a)([ln(),hn(),mn(),kn(),Ln()]);case 2:case"end":return e.stop()}}),Nn)}var Mn=Object(Vt.a)({hashType:"slash"}),Rn=Object($t.a)(),qn=Object(Zt.createStore)(en(Mn),Object(Kt.composeWithDevTools)(Object(Zt.applyMiddleware)(Object(Wt.a)(Mn),Rn)));Rn.run(Fn);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(629),n(630);var En=lt.getPlugin("react").createErrorBoundary(c.a);o.a.render(Object(k.jsx)(En,{children:Object(k.jsx)(s.a,{store:qn,children:Object(k.jsx)(r.a,{history:Mn,children:Object(k.jsx)(l.ApolloProvider,{client:O,children:Object(k.jsx)(Yt,{})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[631,1,2]]]);
//# sourceMappingURL=main.32a67cc6.chunk.js.map