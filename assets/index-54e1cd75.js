import{F as $,i as h,_ as o,j as T,m as A,P as d,G as g}from"./useConfigInject-4e7e38f3.js";import{t as b,T as j,a as R}from"./index-78dc20df.js";import{o as E}from"./styleChecker-cd40cf0f.js";import{d as F,R as I,K as O,a as i,F as z}from"./runtime-core.esm-bundler-e620233b.js";var w=function(){return o(o({},R()),{},{content:d.any,title:d.any})},G=F({compatConfig:{MODE:3},name:"APopover",props:h(w(),o(o({},b()),{},{trigger:"hover",transitionName:"zoom-big",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup:function(n,p){var _=p.expose,r=p.slots,u=I();_({getPopupDomNode:function(){var t,e;return(t=u.value)===null||t===void 0||(e=t.getPopupDomNode)===null||e===void 0?void 0:e.call(t)}});var v=T("popover",n),l=v.prefixCls,y=v.configProvider,C=O(function(){return y.getPrefixCls()}),x=function(){var t,e,c=n.title,a=c===void 0?g((t=r.title)===null||t===void 0?void 0:t.call(r)):c,f=n.content,s=f===void 0?g((e=r.content)===null||e===void 0?void 0:e.call(r)):f,m=!!(Array.isArray(a)?a.length:a),N=!!(Array.isArray(s)?s.length:a);if(!(!m&&!N))return i(z,null,[m&&i("div",{class:"".concat(l.value,"-title")},[a]),i("div",{class:"".concat(l.value,"-inner-content")},[s])])};return function(){return i(j,o(o({},E(n,["title","content"])),{},{prefixCls:l.value,ref:u,transitionName:A(C.value,"zoom-big",n.transitionName)}),{title:x,default:r.default})}}});const V=$(G);export{V as _};