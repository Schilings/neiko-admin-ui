import{F as z,H as J,j as K,J as C,h as R,a as l,l as q,K as G,g as Q,v as U,_ as P,T as W,P as c,z as X,M as Y,A as Z,B as ee,n as ne,I as ae,o as oe,E as te}from"./useConfigInject-4e7e38f3.js";import{c as le}from"./vnode-695e877b.js";import{d as se,R as g,a as o,a1 as ce}from"./runtime-core.esm-bundler-e620233b.js";var ie={success:X,info:Y,error:Z,warning:ee},re={success:ne,info:ae,error:oe,warning:te},ue=J("success","info","warning","error"),de=function(){return{type:c.oneOf(ue),closable:{type:Boolean,default:void 0},closeText:c.any,message:c.any,description:c.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:c.any,closeIcon:c.any,onClose:Function}},ve=se({compatConfig:{MODE:3},name:"AAlert",inheritAttrs:!1,props:de(),setup:function(a,v){var s=v.slots,H=v.emit,h=v.attrs,_=v.expose,I=K("alert",a),L=I.prefixCls,N=I.direction,i=g(!1),b=g(!1),w=g(),S=function(n){n.preventDefault();var t=w.value;t.style.height="".concat(t.offsetHeight,"px"),t.style.height="".concat(t.offsetHeight,"px"),i.value=!0,H("close",n)},A=function(){var n;i.value=!1,b.value=!0,(n=a.afterClose)===null||n===void 0||n.call(a)};_({animationEnd:A});var j=g({});return function(){var r,n,t=a.banner,E=a.closeIcon,T=E===void 0?(r=s.closeIcon)===null||r===void 0?void 0:r.call(s):E,y=a.closable,u=a.type,d=a.showIcon,x=C(s,a,"closeText"),f=C(s,a,"description"),F=C(s,a,"message"),p=C(s,a,"icon");d=t&&d===void 0?!0:d,u=t&&u===void 0?"warning":u||"info";var M=(f?re:ie)[u]||null;x&&(y=!0);var e=L.value,$=R(e,(n={},l(n,"".concat(e,"-").concat(u),!0),l(n,"".concat(e,"-closing"),i.value),l(n,"".concat(e,"-with-description"),!!f),l(n,"".concat(e,"-no-icon"),!d),l(n,"".concat(e,"-banner"),!!t),l(n,"".concat(e,"-closable"),y),l(n,"".concat(e,"-rtl"),N.value==="rtl"),n)),k=y?o("button",{type:"button",onClick:S,class:"".concat(e,"-close-icon"),tabindex:0},[x?o("span",{class:"".concat(e,"-close-text")},[x]):T===void 0?o(q,null,null):T]):null,D=p&&(G(p)?le(p,{class:"".concat(e,"-icon")}):o("span",{class:"".concat(e,"-icon")},[p]))||o(M,{class:"".concat(e,"-icon")},null),V=Q("".concat(e,"-motion"),{appear:!1,css:!0,onAfterLeave:A,onBeforeLeave:function(m){m.style.maxHeight="".concat(m.offsetHeight,"px")},onLeave:function(m){m.style.maxHeight="0px"}});return b.value?null:o(W,V,{default:function(){return[ce(o("div",P(P({role:"alert"},h),{},{style:[h.style,j.value],class:[h.class,$],"data-show":!i.value,ref:w}),[d?D:null,o("div",{class:"".concat(e,"-content")},[F?o("div",{class:"".concat(e,"-message")},[F]):null,f?o("div",{class:"".concat(e,"-description")},[f]):null]),k]),[[U,!i.value]])]}})}}});const Ce=z(ve);export{Ce as A};