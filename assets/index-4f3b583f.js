import{a as se,b as ve}from"./isObject-df4d31a6.js";import{o as pe,c as W}from"./vnode-695e877b.js";import{P as b,_ as S,h as F,a as f,G as ye,H as be,A as ge,j as me,b as he,e as xe}from"./useConfigInject-4e7e38f3.js";import{u as we,b as Be}from"./FormItemContext-d1513cce.js";import{o as X}from"./styleChecker-cd40cf0f.js";import{d as oe,R as E,a as A,N as ne,O as Ae,a0 as Ce,a1 as _e,F as Se,_ as Q,x as $e}from"./runtime-core.esm-bundler-e620233b.js";var Pe=pe(Object.getPrototypeOf,Object);const Ie=Pe;var Fe="[object Object]",je=Function.prototype,Ne=Object.prototype,ue=je.toString,Oe=Ne.hasOwnProperty,Re=ue.call(Object);function Ge(t){if(!se(t)||ve(t)!=Fe)return!1;var e=Ie(t);if(e===null)return!0;var c=Oe.call(e,"constructor")&&e.constructor;return typeof c=="function"&&c instanceof c&&ue.call(c)==Re}var le=function(){return{id:String,prefixCls:String,inputPrefixCls:String,defaultValue:b.oneOfType([b.string,b.number]),value:{type:[String,Number,Symbol],default:void 0},placeholder:{type:[String,Number]},autocomplete:String,type:{type:String,default:"text"},name:String,size:{type:String},disabled:{type:Boolean,default:void 0},readonly:{type:Boolean,default:void 0},addonBefore:b.any,addonAfter:b.any,prefix:b.any,suffix:b.any,autofocus:{type:Boolean,default:void 0},allowClear:{type:Boolean,default:void 0},lazy:{type:Boolean,default:!0},maxlength:Number,loading:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},showCount:{type:[Boolean,Object]},htmlSize:Number,onPressEnter:Function,onKeydown:Function,onKeyup:Function,onFocus:Function,onBlur:Function,onChange:Function,onInput:Function,"onUpdate:value":Function,valueModifiers:Object,hidden:Boolean}};const ze=le;var He=function(){return S(S({},X(le(),["prefix","addonBefore","addonAfter","suffix"])),{},{rows:Number,autosize:{type:[Boolean,Object],default:void 0},autoSize:{type:[Boolean,Object],default:void 0},onResize:{type:Function},onCompositionstart:Function,onCompositionend:Function,valueModifiers:Object})};function ie(t,e,c,r,o){var p;return F(t,(p={},f(p,"".concat(t,"-sm"),c==="small"),f(p,"".concat(t,"-lg"),c==="large"),f(p,"".concat(t,"-disabled"),r),f(p,"".concat(t,"-rtl"),o==="rtl"),f(p,"".concat(t,"-borderless"),!e),p))}var K=function(e){return e!=null&&(Array.isArray(e)?ye(e).length:!0)};function Te(t){return K(t.prefix)||K(t.suffix)||K(t.allowClear)}function ee(t){return K(t.addonBefore)||K(t.addonAfter)}var Me=["text","input"];const Ve=oe({compatConfig:{MODE:3},name:"ClearableLabeledInput",inheritAttrs:!1,props:{prefixCls:String,inputType:b.oneOf(be("text","input")),value:b.any,defaultValue:b.any,allowClear:{type:Boolean,default:void 0},element:b.any,handleReset:Function,disabled:{type:Boolean,default:void 0},direction:{type:String},size:{type:String},suffix:b.any,prefix:b.any,addonBefore:b.any,addonAfter:b.any,readonly:{type:Boolean,default:void 0},focused:{type:Boolean,default:void 0},bordered:{type:Boolean,default:!0},triggerFocus:{type:Function},hidden:Boolean},setup:function(e,c){var r=c.slots,o=c.attrs,p=E(),j=function(n){var d;if((d=p.value)!==null&&d!==void 0&&d.contains(n.target)){var i=e.triggerFocus;i==null||i()}},y=function(n){var d,i=e.allowClear,u=e.value,l=e.disabled,x=e.readonly,g=e.handleReset,C=e.suffix,m=C===void 0?r.suffix:C;if(!i)return null;var _=!l&&!x&&u,h="".concat(n,"-clear-icon");return A(ge,{onClick:g,onMousedown:function(w){return w.preventDefault()},class:F((d={},f(d,"".concat(h,"-hidden"),!_),f(d,"".concat(h,"-has-suffix"),!!m),d),h),role:"button"},null)},Y=function(n){var d,i=e.suffix,u=i===void 0?(d=r.suffix)===null||d===void 0?void 0:d.call(r):i,l=e.allowClear;return u||l?A("span",{class:"".concat(n,"-suffix")},[y(n),u]):null},U=function(n,d){var i,u,l,x=e.focused,g=e.value,C=e.prefix,m=C===void 0?(i=r.prefix)===null||i===void 0?void 0:i.call(r):C,_=e.size,h=e.suffix,I=h===void 0?(u=r.suffix)===null||u===void 0?void 0:u.call(r):h,w=e.disabled,N=e.allowClear,T=e.direction,D=e.readonly,O=e.bordered,L=e.hidden,G=e.addonAfter,Z=G===void 0?r.addonAfter:G,v=e.addonBefore,a=v===void 0?r.addonBefore:v,s=Y(n);if(!Te({prefix:m,suffix:I,allowClear:N}))return W(d,{value:g});var P=m?A("span",{class:"".concat(n,"-prefix")},[m]):null,B=F("".concat(n,"-affix-wrapper"),(l={},f(l,"".concat(n,"-affix-wrapper-focused"),x),f(l,"".concat(n,"-affix-wrapper-disabled"),w),f(l,"".concat(n,"-affix-wrapper-sm"),_==="small"),f(l,"".concat(n,"-affix-wrapper-lg"),_==="large"),f(l,"".concat(n,"-affix-wrapper-input-with-clear-btn"),I&&N&&g),f(l,"".concat(n,"-affix-wrapper-rtl"),T==="rtl"),f(l,"".concat(n,"-affix-wrapper-readonly"),D),f(l,"".concat(n,"-affix-wrapper-borderless"),!O),f(l,"".concat(o.class),!ee({addonAfter:Z,addonBefore:a})&&o.class),l));return A("span",{ref:p,class:B,style:o.style,onMouseup:j,hidden:L},[P,W(d,{style:null,value:g,class:ie(n,O,_,w)}),s])},k=function(n,d){var i,u,l,x=e.addonBefore,g=x===void 0?(i=r.addonBefore)===null||i===void 0?void 0:i.call(r):x,C=e.addonAfter,m=C===void 0?(u=r.addonAfter)===null||u===void 0?void 0:u.call(r):C,_=e.size,h=e.direction,I=e.hidden;if(!ee({addonBefore:g,addonAfter:m}))return d;var w="".concat(n,"-group"),N="".concat(w,"-addon"),T=g?A("span",{class:N},[g]):null,D=m?A("span",{class:N},[m]):null,O=F("".concat(n,"-wrapper"),w,f({},"".concat(w,"-rtl"),h==="rtl")),L=F("".concat(n,"-group-wrapper"),(l={},f(l,"".concat(n,"-group-wrapper-sm"),_==="small"),f(l,"".concat(n,"-group-wrapper-lg"),_==="large"),f(l,"".concat(n,"-group-wrapper-rtl"),h==="rtl"),l),o.class);return A("span",{class:L,style:o.style,hidden:I},[A("span",{class:O},[T,W(d,{style:null}),D])])},z=function(n,d){var i,u=e.value,l=e.allowClear,x=e.direction,g=e.bordered,C=e.hidden,m=e.addonAfter,_=m===void 0?r.addonAfter:m,h=e.addonBefore,I=h===void 0?r.addonBefore:h;if(!l)return W(d,{value:u});var w=F("".concat(n,"-affix-wrapper"),"".concat(n,"-affix-wrapper-textarea-with-clear-btn"),(i={},f(i,"".concat(n,"-affix-wrapper-rtl"),x==="rtl"),f(i,"".concat(n,"-affix-wrapper-borderless"),!g),f(i,"".concat(o.class),!ee({addonAfter:_,addonBefore:I})&&o.class),i));return A("span",{class:w,style:o.style,hidden:C},[W(d,{style:null,value:u}),y(n)])};return function(){var $,n=e.prefixCls,d=e.inputType,i=e.element,u=i===void 0?($=r.element)===null||$===void 0?void 0:$.call(r):i;return d===Me[0]?z(n,u):k(n,U(n,u))}}});function te(t){return typeof t>"u"||t===null?"":String(t)}function re(t,e,c,r){if(c){var o=e;if(e.type==="click"){Object.defineProperty(o,"target",{writable:!0}),Object.defineProperty(o,"currentTarget",{writable:!0});var p=t.cloneNode(!0);o.target=p,o.currentTarget=p,p.value="",c(o);return}if(r!==void 0){Object.defineProperty(o,"target",{writable:!0}),Object.defineProperty(o,"currentTarget",{writable:!0}),o.target=t,o.currentTarget=t,t.value=r,c(o);return}c(o)}}function ke(t,e){if(t){t.focus(e);var c=e||{},r=c.cursor;if(r){var o=t.value.length;switch(r){case"start":t.setSelectionRange(0,0);break;case"end":t.setSelectionRange(o,o);break;default:t.setSelectionRange(0,o)}}}}const qe=oe({compatConfig:{MODE:3},name:"AInput",inheritAttrs:!1,props:ze(),setup:function(e,c){var r=c.slots,o=c.attrs,p=c.expose,j=c.emit,y=E(),Y=E(),U,k=we(),z=me("input",e),$=z.direction,n=z.prefixCls,d=z.size,i=z.autocomplete,u=E(e.value===void 0?e.defaultValue:e.value),l=E(!1);ne(function(){return e.value},function(){u.value=e.value}),ne(function(){return e.disabled},function(){e.value!==void 0&&(u.value=e.value),e.disabled&&(l.value=!1)});var x=function(){U=setTimeout(function(){var a;((a=y.value)===null||a===void 0?void 0:a.getAttribute("type"))==="password"&&y.value.hasAttribute("value")&&y.value.removeAttribute("value")})},g=function(a){ke(y.value,a)},C=function(){var a;(a=y.value)===null||a===void 0||a.blur()},m=function(a,s,P){var B;(B=y.value)===null||B===void 0||B.setSelectionRange(a,s,P)},_=function(){var a;(a=y.value)===null||a===void 0||a.select()};p({focus:g,blur:C,input:y,stateValue:u,setSelectionRange:m,select:_});var h=function(a){var s=e.onFocus;l.value=!0,s==null||s(a),Q(function(){x()})},I=function(a){var s=e.onBlur;l.value=!1,s==null||s(a),k.onFieldBlur(),Q(function(){x()})},w=function(a){j("update:value",a.target.value),j("change",a),j("input",a),k.onFieldChange()},N=$e(),T=function(a,s){u.value!==a&&(e.value===void 0?u.value=a:Q(function(){y.value.value!==u.value&&N.update()}),Q(function(){s&&s()}))},D=function(a){re(y.value,a,w),T("",function(){g()})},O=function(a){var s=a.target,P=s.value,B=s.composing;if(!((a.isComposing||B)&&e.lazy||u.value===P)){var R=a.target.value;re(y.value,a,w),T(R,function(){x()})}},L=function(a){a.keyCode===13&&j("pressEnter",a),j("keydown",a)};Ae(function(){x()}),Ce(function(){clearTimeout(U)});var G=function(){var a,s=e.addonBefore,P=s===void 0?r.addonBefore:s,B=e.addonAfter,R=B===void 0?r.addonAfter:B,M=e.disabled,H=e.bordered,q=H===void 0?!0:H,V=e.valueModifiers,de=V===void 0?{}:V,fe=e.htmlSize,ae=X(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","size","bordered","htmlSize","lazy","showCount","valueModifiers"]),J=S(S(S({},ae),o),{},{autocomplete:i.value,onChange:O,onInput:O,onFocus:h,onBlur:I,onKeydown:L,class:F(ie(n.value,q,d.value,M,$.value),f({},o.class,o.class&&!P&&!R)),ref:y,key:"ant-input",size:fe,id:(a=ae.id)!==null&&a!==void 0?a:k.id.value});de.lazy&&delete J.onInput,J.autofocus||delete J.autofocus;var ce=A("input",X(J,["size"]),null);return _e(ce,[[Be]])},Z=function(){var a,s=u.value,P=e.maxlength,B=e.suffix,R=B===void 0?(a=r.suffix)===null||a===void 0?void 0:a.call(r):B,M=e.showCount,H=Number(P)>0;if(R||M){var q=he(te(s)).length,V=null;return xe(M)==="object"?V=M.formatter({count:q,maxlength:P}):V="".concat(q).concat(H?" / ".concat(P):""),A(Se,null,[!!M&&A("span",{class:F("".concat(n.value,"-show-count-suffix"),f({},"".concat(n.value,"-show-count-has-suffix"),!!R))},[V]),R])}return null};return function(){var v=S(S(S({},o),e),{},{prefixCls:n.value,inputType:"input",value:te(u.value),handleReset:D,focused:l.value&&!e.disabled});return A(Ve,S(S({},X(v,["element","valueModifiers","suffix","showCount"])),{},{ref:Y}),S(S({},r),{},{element:G,suffix:Z}))}}});export{Ve as C,qe as I,ze as a,ke as b,te as f,Ie as g,Ge as i,re as r,He as t};
