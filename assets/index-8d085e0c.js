import{a as w,a3 as ae,ai as re,a7 as ce,_ as p,P as L,j as se,e as te,w as ie,Q as ue}from"./useConfigInject-4e7e38f3.js";import{a as X,r as Y}from"./index-64985671.js";import{a,J as de,R as F,F as ve,d as ne,a4 as fe,a0 as ye,M as pe,ae as Z,K as me}from"./runtime-core.esm-bundler-e620233b.js";import{c as be}from"./vnode-695e877b.js";function k(l){return l!=null}var Se=function(e){var n=e.itemPrefixCls,t=e.component,r=e.span,o=e.labelStyle,u=e.contentStyle,b=e.bordered,c=e.label,i=e.content,s=e.colon,S=t;if(b){var v;return a(S,{class:[(v={},w(v,"".concat(n,"-item-label"),k(c)),w(v,"".concat(n,"-item-content"),k(i)),v)],colSpan:r},{default:function(){return[k(c)&&a("span",{style:o},[c]),k(i)&&a("span",{style:u},[i])]}})}return a(S,{class:["".concat(n,"-item")],colSpan:r},{default:function(){return[a("div",{class:"".concat(n,"-item-container")},[c&&a("span",{class:["".concat(n,"-item-label"),w({},"".concat(n,"-item-no-colon"),!s)],style:o},[c]),i&&a("span",{class:"".concat(n,"-item-content"),style:u},[i])])]}})};const B=Se;var Ce=function(e){var n=function(v,d,m){var P=d.colon,I=d.prefixCls,C=d.bordered,x=m.component,O=m.type,N=m.showLabel,R=m.showContent,h=m.labelStyle,$=m.contentStyle;return v.map(function(f,j){var g,D,y=f.props||{},U=y.prefixCls,E=U===void 0?I:U,T=y.span,J=T===void 0?1:T,K=y.labelStyle,Q=K===void 0?y["label-style"]:K,V=y.contentStyle,q=V===void 0?y["content-style"]:V,G=y.label,H=G===void 0?(g=f.children)===null||g===void 0||(D=g.label)===null||D===void 0?void 0:D.call(g):G,W=ae(f),M=re(f),A=ce(f),z=f.key;return typeof x=="string"?a(B,{key:"".concat(O,"-").concat(String(z)||j),class:M,style:A,labelStyle:p(p({},h),Q),contentStyle:p(p({},$),q),span:J,colon:P,component:x,itemPrefixCls:E,bordered:C,label:N?H:null,content:R?W:null},null):[a(B,{key:"label-".concat(String(z)||j),class:M,style:p(p(p({},h),A),Q),span:1,colon:P,component:x[0],itemPrefixCls:E,bordered:C,label:H},null),a(B,{key:"content-".concat(String(z)||j),class:M,style:p(p(p({},$),A),q),span:J*2-1,component:x[1],itemPrefixCls:E,bordered:C,content:W},null)]})},t=e.prefixCls,r=e.vertical,o=e.row,u=e.index,b=e.bordered,c=de(oe,{labelStyle:F({}),contentStyle:F({})}),i=c.labelStyle,s=c.contentStyle;return r?a(ve,null,[a("tr",{key:"label-".concat(u),class:"".concat(t,"-row")},[n(o,e,{component:"th",type:"label",showLabel:!0,labelStyle:i.value,contentStyle:s.value})]),a("tr",{key:"content-".concat(u),class:"".concat(t,"-row")},[n(o,e,{component:"td",type:"content",showContent:!0,labelStyle:i.value,contentStyle:s.value})])]):a("tr",{key:u,class:"".concat(t,"-row")},[n(o,e,{component:b?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:i.value,contentStyle:s.value})])};const xe=Ce;L.any;var he=function(){return{prefixCls:String,label:L.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}},ge=ne({compatConfig:{MODE:3},name:"ADescriptionsItem",props:he(),slots:["label"],setup:function(e,n){var t=n.slots;return function(){var r;return(r=t.default)===null||r===void 0?void 0:r.call(t)}}}),le={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function _e(l,e){if(typeof l=="number")return l;if(te(l)==="object")for(var n=0;n<Y.length;n++){var t=Y[n];if(e[t]&&l[t]!==void 0)return l[t]||le[t]}return 3}function ee(l,e,n){var t=l;return(e===void 0||e>n)&&(t=be(l,{span:n}),ue(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),t}function we(l,e){var n=ie(l),t=[],r=[],o=e;return n.forEach(function(u,b){var c,i=(c=u.props)===null||c===void 0?void 0:c.span,s=i||1;if(b===n.length-1){r.push(ee(u,i,o)),t.push(r);return}s<o?(o-=s,r.push(u)):(r.push(ee(u,s,o)),t.push(r),o=e,r=[])}),t}var Pe=function(){return{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:L.any,extra:L.any,column:{type:[Number,Object],default:function(){return le}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}},oe=Symbol("descriptionsContext"),_=ne({compatConfig:{MODE:3},name:"ADescriptions",props:Pe(),slots:["title","extra"],Item:ge,setup:function(e,n){var t=n.slots,r=se("descriptions",e),o=r.prefixCls,u=r.direction,b,c=F({});fe(function(){b=X.subscribe(function(s){te(e.column)==="object"&&(c.value=s)})}),ye(function(){X.unsubscribe(b)}),pe(oe,{labelStyle:Z(e,"labelStyle"),contentStyle:Z(e,"contentStyle")});var i=me(function(){return _e(e.column,c.value)});return function(){var s,S,v,d,m=e.size,P=e.bordered,I=P===void 0?!1:P,C=e.layout,x=C===void 0?"horizontal":C,O=e.colon,N=O===void 0?!0:O,R=e.title,h=R===void 0?(s=t.title)===null||s===void 0?void 0:s.call(t):R,$=e.extra,f=$===void 0?(S=t.extra)===null||S===void 0?void 0:S.call(t):$,j=(v=t.default)===null||v===void 0?void 0:v.call(t),g=we(j,i.value);return a("div",{class:[o.value,(d={},w(d,"".concat(o.value,"-").concat(m),m!=="default"),w(d,"".concat(o.value,"-bordered"),!!I),w(d,"".concat(o.value,"-rtl"),u.value==="rtl"),d)]},[(h||f)&&a("div",{class:"".concat(o.value,"-header")},[h&&a("div",{class:"".concat(o.value,"-title")},[h]),f&&a("div",{class:"".concat(o.value,"-extra")},[f])]),a("div",{class:"".concat(o.value,"-view")},[a("table",null,[a("tbody",null,[g.map(function(D,y){return a(xe,{key:y,index:y,colon:N,prefixCls:o.value,vertical:x==="vertical",bordered:I,row:D},null)})])])])])}}});_.install=function(l){return l.component(_.name,_),l.component(_.Item.name,_.Item),l};const Oe=_;export{ge as D,Oe as _};
