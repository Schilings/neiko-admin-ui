import{i as E,k as $,_ as c,h as M,a as m,P as T}from"./useConfigInject-4e7e38f3.js";import{d as W,R as f,N as z,a as v}from"./runtime-core.esm-bundler-e620233b.js";var G=["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"],H={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:T.any,required:Boolean};const Q=W({compatConfig:{MODE:3},name:"Checkbox",inheritAttrs:!1,props:E(H,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup:function(a,d){var t=d.attrs,h=d.emit,g=d.expose,o=f(a.checked===void 0?a.defaultChecked:a.checked),i=f();z(function(){return a.checked},function(){o.value=a.checked}),g({focus:function(){var e;(e=i.value)===null||e===void 0||e.focus()},blur:function(){var e;(e=i.value)===null||e===void 0||e.blur()}});var l=f(),x=function(e){if(!a.disabled){a.checked===void 0&&(o.value=e.target.checked),e.shiftKey=l.value;var r={target:c(c({},a),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e};a.checked!==void 0&&(i.value.checked=!!a.checked),h("change",r),l.value=!1}},C=function(e){h("click",e),l.value=e.shiftKey};return function(){var n,e=a.prefixCls,r=a.name,s=a.id,p=a.type,b=a.disabled,K=a.readonly,P=a.tabindex,B=a.autofocus,N=a.value,S=a.required,_=$(a,G),q=t.class,D=t.onFocus,j=t.onBlur,w=t.onKeydown,R=t.onKeypress,A=t.onKeyup,k=c(c({},_),t),F=Object.keys(k).reduce(function(y,u){return(u.substr(0,5)==="aria-"||u.substr(0,5)==="data-"||u==="role")&&(y[u]=k[u]),y},{}),O=M(e,q,(n={},m(n,"".concat(e,"-checked"),o.value),m(n,"".concat(e,"-disabled"),b),n)),V=c(c({name:r,id:s,type:p,readonly:K,disabled:b,tabindex:P,class:"".concat(e,"-input"),checked:!!o.value,autofocus:B,value:N},F),{},{onChange:x,onClick:C,onFocus:D,onBlur:j,onKeydown:w,onKeypress:R,onKeyup:A,required:S});return v("span",{class:O},[v("input",c({ref:i},V),null),v("span",{class:"".concat(e,"-inner")},null)])}}});export{Q as V};