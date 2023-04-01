import{_ as g,T as wt,w as Zt,h as yt,S as St,f as rt,e as te,g as Te,v as be,D as At,a as Ce,$ as xe,p as Me,b as Dt,P as x,y as Z,a0 as Oe,a1 as Se,a2 as Et,G as Ae,a3 as De}from"./useConfigInject-4e7e38f3.js";import{c as F,a as Y,s as L,b as Ee,P as Nt,u as Ne}from"./KeyCode-e7009ae3.js";import{w as W}from"./wave-9bd9da2d.js";import{a as M,a1 as ee,aj as $e,d as K,R as P,N as R,O as ne,a0 as Ve,K as q,_ as vt,l as Re,P as He,ae as ke,J as Be,M as Fe,F as We,u as _e,S as Ie,m as Xe}from"./runtime-core.esm-bundler-e620233b.js";import{_ as ze,u as je}from"./isEqual-0db96e75.js";import{c as ie}from"./vnode-695e877b.js";import{i as Ye}from"./index-86e42ee6.js";var oe=["moz","ms","webkit"];function Le(){var e=0;return function(t){var n=new Date().getTime(),i=Math.max(0,16-(n-e)),o=window.setTimeout(function(){t(n+i)},i);return e=n+i,o}}function Ue(){if(typeof window>"u")return function(){};if(window.requestAnimationFrame)return window.requestAnimationFrame.bind(window);var e=oe.filter(function(t){return"".concat(t,"RequestAnimationFrame")in window})[0];return e?window["".concat(e,"RequestAnimationFrame")]:Le()}function qe(e){if(typeof window>"u")return null;if(window.cancelAnimationFrame)return window.cancelAnimationFrame(e);var t=oe.filter(function(n){return"".concat(n,"CancelAnimationFrame")in window||"".concat(n,"CancelRequestAnimationFrame")in window})[0];return t?(window["".concat(t,"CancelAnimationFrame")]||window["".concat(t,"CancelRequestAnimationFrame")]).call(this,e):clearTimeout(e)}var $t=Ue(),Ge=function(t){return qe(t.id)},Ke=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=Date.now();function o(){Date.now()-i>=n?t.call():r.id=$t(o)}var r={id:$t(o)};return r},Pt={visible:Boolean,prefixCls:String,zIndex:Number,destroyPopupOnHide:Boolean,forceRender:Boolean,animation:[String,Object],transitionName:String,stretch:{type:String},align:{type:Object},point:{type:Object},getRootDomNode:{type:Function},getClassNameFromAlign:{type:Function},onMouseenter:{type:Function},onMouseleave:{type:Function},onMousedown:{type:Function},onTouchstart:{type:Function}},Je=g(g({},Pt),{},{mobile:{type:Object}}),Qe=g(g({},Pt),{},{mask:Boolean,mobile:{type:Object},maskAnimation:String,maskTransitionName:String});function re(e){var t=e.prefixCls,n=e.animation,i=e.transitionName;return n?{name:"".concat(t,"-").concat(n)}:i?{name:i}:{}}function ae(e){var t=e.prefixCls,n=e.visible,i=e.zIndex,o=e.mask,r=e.maskAnimation,a=e.maskTransitionName;if(!o)return null;var s={};return(a||r)&&(s=re({prefixCls:t,transitionName:a,animation:r})),M(wt,g({appear:!0},s),{default:function(){return[ee(M("div",{style:{zIndex:i},class:"".concat(t,"-mask")},null),[[$e("if"),n]])]}})}ae.displayName="Mask";const Ze=K({compatConfig:{MODE:3},name:"MobilePopupInner",inheritAttrs:!1,props:Je,emits:["mouseenter","mouseleave","mousedown","touchstart","align"],setup:function(t,n){var i=n.expose,o=n.slots,r=P();return i({forceAlign:function(){},getElement:function(){return r.value}}),function(){var a,s=t.zIndex,u=t.visible,f=t.prefixCls,l=t.mobile;l=l===void 0?{}:l;var y=l.popupClassName,d=l.popupStyle,p=l.popupMotion,v=p===void 0?{}:p,h=l.popupRender,T=g({zIndex:s},d),m=Zt((a=o.default)===null||a===void 0?void 0:a.call(o));m.length>1&&(m=M("div",{class:"".concat(f,"-content")},[m])),h&&(m=h(m));var w=yt(f,y);return M(wt,g({ref:r},v),{default:function(){return[u?M("div",{class:w,style:T},[m]):null]}})}}});var Vt=["measure","align",null,"motion"];const tn=function(e,t){var n=P(null),i=P(),o=P(!1);function r(u){o.value||(n.value=u)}function a(){W.cancel(i.value)}function s(u){a(),i.value=W(function(){var f=n.value;switch(n.value){case"align":f="motion";break;case"motion":f="stable";break}r(f),u==null||u()})}return R(e,function(){r("measure")},{immediate:!0,flush:"post"}),ne(function(){R(n,function(){switch(n.value){case"measure":t();break}n.value&&(i.value=W(ze(St.mark(function u(){var f,l;return St.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:f=Vt.indexOf(n.value),l=Vt[f+1],l&&f!==-1&&r(l);case 3:case"end":return d.stop()}},u)}))))},{immediate:!0,flush:"post"})}),Ve(function(){o.value=!0,a()}),[n,s]},en=function(e){var t=P({width:0,height:0});function n(o){t.value={width:o.offsetWidth,height:o.offsetHeight}}var i=q(function(){var o={};if(e.value){var r=t.value,a=r.width,s=r.height;e.value.indexOf("height")!==-1&&s?o.height="".concat(s,"px"):e.value.indexOf("minHeight")!==-1&&s&&(o.minHeight="".concat(s,"px")),e.value.indexOf("width")!==-1&&a?o.width="".concat(a,"px"):e.value.indexOf("minWidth")!==-1&&a&&(o.minWidth="".concat(a,"px"))}return o});return[i,n]};function Rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,i)}return n}function Ht(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rt(Object(n),!0).forEach(function(i){nn(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rt(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function ot(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ot=function(t){return typeof t}:ot=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ot(e)}function nn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j,on={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function at(){if(j!==void 0)return j;j="";var e=document.createElement("p").style,t="Transform";for(var n in on)n+t in e&&(j=n);return j}function se(){return at()?"".concat(at(),"TransitionProperty"):"transitionProperty"}function st(){return at()?"".concat(at(),"Transform"):"transform"}function kt(e,t){var n=se();n&&(e.style[n]=t,n!=="transitionProperty"&&(e.style.transitionProperty=t))}function ft(e,t){var n=st();n&&(e.style[n]=t,n!=="transform"&&(e.style.transform=t))}function rn(e){return e.style.transitionProperty||e.style[se()]}function an(e){var t=window.getComputedStyle(e,null),n=t.getPropertyValue("transform")||t.getPropertyValue(st());if(n&&n!=="none"){var i=n.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(i[12]||i[4],0),y:parseFloat(i[13]||i[5],0)}}return{x:0,y:0}}var sn=/matrix\((.*)\)/,un=/matrix3d\((.*)\)/;function ln(e,t){var n=window.getComputedStyle(e,null),i=n.getPropertyValue("transform")||n.getPropertyValue(st());if(i&&i!=="none"){var o,r=i.match(sn);if(r)r=r[1],o=r.split(",").map(function(s){return parseFloat(s,10)}),o[4]=t.x,o[5]=t.y,ft(e,"matrix(".concat(o.join(","),")"));else{var a=i.match(un)[1];o=a.split(",").map(function(s){return parseFloat(s,10)}),o[12]=t.x,o[13]=t.y,ft(e,"matrix3d(".concat(o.join(","),")"))}}else ft(e,"translateX(".concat(t.x,"px) translateY(").concat(t.y,"px) translateZ(0)"))}var fn=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,J;function Bt(e){var t=e.style.display;e.style.display="none",e.offsetHeight,e.style.display=t}function _(e,t,n){var i=n;if(ot(t)==="object"){for(var o in t)t.hasOwnProperty(o)&&_(e,o,t[o]);return}if(typeof i<"u"){typeof i=="number"&&(i="".concat(i,"px")),e.style[t]=i;return}return J(e,t)}function cn(e){var t,n,i,o=e.ownerDocument,r=o.body,a=o&&o.documentElement;return t=e.getBoundingClientRect(),n=Math.floor(t.left),i=Math.floor(t.top),n-=a.clientLeft||r.clientLeft||0,i-=a.clientTop||r.clientTop||0,{left:n,top:i}}function ue(e,t){var n=e["page".concat(t?"Y":"X","Offset")],i="scroll".concat(t?"Top":"Left");if(typeof n!="number"){var o=e.document;n=o.documentElement[i],typeof n!="number"&&(n=o.body[i])}return n}function le(e){return ue(e)}function fe(e){return ue(e,!0)}function G(e){var t=cn(e),n=e.ownerDocument,i=n.defaultView||n.parentWindow;return t.left+=le(i),t.top+=fe(i),t}function Tt(e){return e!=null&&e==e.window}function ce(e){return Tt(e)?e.document:e.nodeType===9?e:e.ownerDocument}function pn(e,t,n){var i=n,o="",r=ce(e);return i=i||r.defaultView.getComputedStyle(e,null),i&&(o=i.getPropertyValue(t)||i[t]),o}var dn=new RegExp("^(".concat(fn,")(?!px)[a-z%]+$"),"i"),vn=/^(top|right|bottom|left)$/,ct="currentStyle",pt="runtimeStyle",B="left",hn="px";function mn(e,t){var n=e[ct]&&e[ct][t];if(dn.test(n)&&!vn.test(t)){var i=e.style,o=i[B],r=e[pt][B];e[pt][B]=e[ct][B],i[B]=t==="fontSize"?"1em":n||0,n=i.pixelLeft+hn,i[B]=o,e[pt][B]=r}return n===""?"auto":n}typeof window<"u"&&(J=window.getComputedStyle?pn:mn);function tt(e,t){return e==="left"?t.useCssRight?"right":e:t.useCssBottom?"bottom":e}function Ft(e){if(e==="left")return"right";if(e==="right")return"left";if(e==="top")return"bottom";if(e==="bottom")return"top"}function Wt(e,t,n){_(e,"position")==="static"&&(e.style.position="relative");var i=-999,o=-999,r=tt("left",n),a=tt("top",n),s=Ft(r),u=Ft(a);r!=="left"&&(i=999),a!=="top"&&(o=999);var f="",l=G(e);("left"in t||"top"in t)&&(f=rn(e)||"",kt(e,"none")),"left"in t&&(e.style[s]="",e.style[r]="".concat(i,"px")),"top"in t&&(e.style[u]="",e.style[a]="".concat(o,"px")),Bt(e);var y=G(e),d={};for(var p in t)if(t.hasOwnProperty(p)){var v=tt(p,n),h=p==="left"?i:o,T=l[p]-y[p];v===p?d[v]=h+T:d[v]=h-T}_(e,d),Bt(e),("left"in t||"top"in t)&&kt(e,f);var m={};for(var w in t)if(t.hasOwnProperty(w)){var b=tt(w,n),O=t[w]-l[w];w===b?m[b]=d[b]+O:m[b]=d[b]-O}_(e,m)}function gn(e,t){var n=G(e),i=an(e),o={x:i.x,y:i.y};"left"in t&&(o.x=i.x+t.left-n.left),"top"in t&&(o.y=i.y+t.top-n.top),ln(e,o)}function wn(e,t,n){if(n.ignoreShake){var i=G(e),o=i.left.toFixed(0),r=i.top.toFixed(0),a=t.left.toFixed(0),s=t.top.toFixed(0);if(o===a&&r===s)return}n.useCssRight||n.useCssBottom?Wt(e,t,n):n.useCssTransform&&st()in document.body.style?gn(e,t):Wt(e,t,n)}function bt(e,t){for(var n=0;n<e.length;n++)t(e[n])}function pe(e){return J(e,"boxSizing")==="border-box"}var yn=["margin","border","padding"],ht=-1,Pn=2,mt=1,Tn=0;function bn(e,t,n){var i={},o=e.style,r;for(r in t)t.hasOwnProperty(r)&&(i[r]=o[r],o[r]=t[r]);n.call(e);for(r in t)t.hasOwnProperty(r)&&(o[r]=i[r])}function U(e,t,n){var i=0,o,r,a;for(r=0;r<t.length;r++)if(o=t[r],o)for(a=0;a<n.length;a++){var s=void 0;o==="border"?s="".concat(o).concat(n[a],"Width"):s=o+n[a],i+=parseFloat(J(e,s))||0}return i}var N={getParent:function(t){var n=t;do n.nodeType===11&&n.host?n=n.host:n=n.parentNode;while(n&&n.nodeType!==1&&n.nodeType!==9);return n}};bt(["Width","Height"],function(e){N["doc".concat(e)]=function(t){var n=t.document;return Math.max(n.documentElement["scroll".concat(e)],n.body["scroll".concat(e)],N["viewport".concat(e)](n))},N["viewport".concat(e)]=function(t){var n="client".concat(e),i=t.document,o=i.body,r=i.documentElement,a=r[n];return i.compatMode==="CSS1Compat"&&a||o&&o[n]||a}});function _t(e,t,n){var i=n;if(Tt(e))return t==="width"?N.viewportWidth(e):N.viewportHeight(e);if(e.nodeType===9)return t==="width"?N.docWidth(e):N.docHeight(e);var o=t==="width"?["Left","Right"]:["Top","Bottom"],r=Math.floor(t==="width"?e.getBoundingClientRect().width:e.getBoundingClientRect().height),a=pe(e),s=0;(r==null||r<=0)&&(r=void 0,s=J(e,t),(s==null||Number(s)<0)&&(s=e.style[t]||0),s=parseFloat(s)||0),i===void 0&&(i=a?mt:ht);var u=r!==void 0||a,f=r||s;return i===ht?u?f-U(e,["border","padding"],o):s:u?i===mt?f:f+(i===Pn?-U(e,["border"],o):U(e,["margin"],o)):s+U(e,yn.slice(i),o)}var Cn={position:"absolute",visibility:"hidden",display:"block"};function It(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i,o=t[0];return o.offsetWidth!==0?i=_t.apply(void 0,t):bn(o,Cn,function(){i=_t.apply(void 0,t)}),i}bt(["width","height"],function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);N["outer".concat(t)]=function(i,o){return i&&It(i,e,o?Tn:mt)};var n=e==="width"?["Left","Right"]:["Top","Bottom"];N[e]=function(i,o){var r=o;if(r!==void 0){if(i){var a=pe(i);return a&&(r+=U(i,["padding","border"],n)),_(i,e,r)}return}return i&&It(i,e,ht)}});function de(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var c={getWindow:function(t){if(t&&t.document&&t.setTimeout)return t;var n=t.ownerDocument||t;return n.defaultView||n.parentWindow},getDocument:ce,offset:function(t,n,i){if(typeof n<"u")wn(t,n,i||{});else return G(t)},isWindow:Tt,each:bt,css:_,clone:function(t){var n,i={};for(n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);var o=t.overflow;if(o)for(n in t)t.hasOwnProperty(n)&&(i.overflow[n]=t.overflow[n]);return i},mix:de,getWindowScrollLeft:function(t){return le(t)},getWindowScrollTop:function(t){return fe(t)},merge:function(){for(var t={},n=0;n<arguments.length;n++)c.mix(t,n<0||arguments.length<=n?void 0:arguments[n]);return t},viewportWidth:0,viewportHeight:0};de(c,N);var dt=c.getParent;function gt(e){if(c.isWindow(e)||e.nodeType===9)return null;var t=c.getDocument(e),n=t.body,i,o=c.css(e,"position"),r=o==="fixed"||o==="absolute";if(!r)return e.nodeName.toLowerCase()==="html"?null:dt(e);for(i=dt(e);i&&i!==n&&i.nodeType!==9;i=dt(i))if(o=c.css(i,"position"),o!=="static")return i;return null}var Xt=c.getParent;function xn(e){if(c.isWindow(e)||e.nodeType===9)return!1;var t=c.getDocument(e),n=t.body,i=null;for(i=Xt(e);i&&i!==n&&i!==t;i=Xt(i)){var o=c.css(i,"position");if(o==="fixed")return!0}return!1}function Ct(e,t){for(var n={left:0,right:1/0,top:0,bottom:1/0},i=gt(e),o=c.getDocument(e),r=o.defaultView||o.parentWindow,a=o.body,s=o.documentElement;i;){if((navigator.userAgent.indexOf("MSIE")===-1||i.clientWidth!==0)&&i!==a&&i!==s&&c.css(i,"overflow")!=="visible"){var u=c.offset(i);u.left+=i.clientLeft,u.top+=i.clientTop,n.top=Math.max(n.top,u.top),n.right=Math.min(n.right,u.left+i.clientWidth),n.bottom=Math.min(n.bottom,u.top+i.clientHeight),n.left=Math.max(n.left,u.left)}else if(i===a||i===s)break;i=gt(i)}var f=null;if(!c.isWindow(e)&&e.nodeType!==9){f=e.style.position;var l=c.css(e,"position");l==="absolute"&&(e.style.position="fixed")}var y=c.getWindowScrollLeft(r),d=c.getWindowScrollTop(r),p=c.viewportWidth(r),v=c.viewportHeight(r),h=s.scrollWidth,T=s.scrollHeight,m=window.getComputedStyle(a);if(m.overflowX==="hidden"&&(h=r.innerWidth),m.overflowY==="hidden"&&(T=r.innerHeight),e.style&&(e.style.position=f),t||xn(e))n.left=Math.max(n.left,y),n.top=Math.max(n.top,d),n.right=Math.min(n.right,y+p),n.bottom=Math.min(n.bottom,d+v);else{var w=Math.max(h,y+p);n.right=Math.min(n.right,w);var b=Math.max(T,d+v);n.bottom=Math.min(n.bottom,b)}return n.top>=0&&n.left>=0&&n.bottom>n.top&&n.right>n.left?n:null}function Mn(e,t,n,i){var o=c.clone(e),r={width:t.width,height:t.height};return i.adjustX&&o.left<n.left&&(o.left=n.left),i.resizeWidth&&o.left>=n.left&&o.left+r.width>n.right&&(r.width-=o.left+r.width-n.right),i.adjustX&&o.left+r.width>n.right&&(o.left=Math.max(n.right-r.width,n.left)),i.adjustY&&o.top<n.top&&(o.top=n.top),i.resizeHeight&&o.top>=n.top&&o.top+r.height>n.bottom&&(r.height-=o.top+r.height-n.bottom),i.adjustY&&o.top+r.height>n.bottom&&(o.top=Math.max(n.bottom-r.height,n.top)),c.mix(o,r)}function xt(e){var t,n,i;if(!c.isWindow(e)&&e.nodeType!==9)t=c.offset(e),n=c.outerWidth(e),i=c.outerHeight(e);else{var o=c.getWindow(e);t={left:c.getWindowScrollLeft(o),top:c.getWindowScrollTop(o)},n=c.viewportWidth(o),i=c.viewportHeight(o)}return t.width=n,t.height=i,t}function zt(e,t){var n=t.charAt(0),i=t.charAt(1),o=e.width,r=e.height,a=e.left,s=e.top;return n==="c"?s+=r/2:n==="b"&&(s+=r),i==="c"?a+=o/2:i==="r"&&(a+=o),{left:a,top:s}}function et(e,t,n,i,o){var r=zt(t,n[1]),a=zt(e,n[0]),s=[a.left-r.left,a.top-r.top];return{left:Math.round(e.left-s[0]+i[0]-o[0]),top:Math.round(e.top-s[1]+i[1]-o[1])}}function jt(e,t,n){return e.left<n.left||e.left+t.width>n.right}function Yt(e,t,n){return e.top<n.top||e.top+t.height>n.bottom}function On(e,t,n){return e.left>n.right||e.left+t.width<n.left}function Sn(e,t,n){return e.top>n.bottom||e.top+t.height<n.top}function nt(e,t,n){var i=[];return c.each(e,function(o){i.push(o.replace(t,function(r){return n[r]}))}),i}function it(e,t){return e[t]=-e[t],e}function Lt(e,t){var n;return/%$/.test(e)?n=parseInt(e.substring(0,e.length-1),10)/100*t:n=parseInt(e,10),n||0}function Ut(e,t){e[0]=Lt(e[0],t.width),e[1]=Lt(e[1],t.height)}function ve(e,t,n,i){var o=n.points,r=n.offset||[0,0],a=n.targetOffset||[0,0],s=n.overflow,u=n.source||e;r=[].concat(r),a=[].concat(a),s=s||{};var f={},l=0,y=!!(s&&s.alwaysByViewport),d=Ct(u,y),p=xt(u);Ut(r,p),Ut(a,t);var v=et(p,t,o,r,a),h=c.merge(p,v);if(d&&(s.adjustX||s.adjustY)&&i){if(s.adjustX&&jt(v,p,d)){var T=nt(o,/[lr]/gi,{l:"r",r:"l"}),m=it(r,0),w=it(a,0),b=et(p,t,T,m,w);On(b,p,d)||(l=1,o=T,r=m,a=w)}if(s.adjustY&&Yt(v,p,d)){var O=nt(o,/[tb]/gi,{t:"b",b:"t"}),E=it(r,1),S=it(a,1),H=et(p,t,O,E,S);Sn(H,p,d)||(l=1,o=O,r=E,a=S)}l&&(v=et(p,t,o,r,a),c.mix(h,v));var A=jt(v,p,d),k=Yt(v,p,d);if(A||k){var I=o;A&&(I=nt(o,/[lr]/gi,{l:"r",r:"l"})),k&&(I=nt(o,/[tb]/gi,{t:"b",b:"t"})),o=I,r=n.offset||[0,0],a=n.targetOffset||[0,0]}f.adjustX=s.adjustX&&A,f.adjustY=s.adjustY&&k,(f.adjustX||f.adjustY)&&(h=Mn(v,p,d,f))}return h.width!==p.width&&c.css(u,"width",c.width(u)+h.width-p.width),h.height!==p.height&&c.css(u,"height",c.height(u)+h.height-p.height),c.offset(u,{left:h.left,top:h.top},{useCssRight:n.useCssRight,useCssBottom:n.useCssBottom,useCssTransform:n.useCssTransform,ignoreShake:n.ignoreShake}),{points:o,offset:r,targetOffset:a,overflow:f}}function An(e,t){var n=Ct(e,t),i=xt(e);return!n||i.left+i.width<=n.left||i.top+i.height<=n.top||i.left>=n.right||i.top>=n.bottom}function Mt(e,t,n){var i=n.target||t,o=xt(i),r=!An(i,n.overflow&&n.overflow.alwaysByViewport);return ve(e,o,n,r)}Mt.__getOffsetParent=gt;Mt.__getVisibleRectForElement=Ct;function Dn(e,t,n){var i,o,r=c.getDocument(e),a=r.defaultView||r.parentWindow,s=c.getWindowScrollLeft(a),u=c.getWindowScrollTop(a),f=c.viewportWidth(a),l=c.viewportHeight(a);"pageX"in t?i=t.pageX:i=s+t.clientX,"pageY"in t?o=t.pageY:o=u+t.clientY;var y={left:i,top:o,width:0,height:0},d=i>=0&&i<=s+f&&o>=0&&o<=u+l,p=[n.points[0],"cc"];return ve(e,y,Ht(Ht({},n),{},{points:p}),d)}const En=function(e){if(!e)return!1;if(e.offsetParent)return!0;if(e.getBBox){var t=e.getBBox();if(t.width||t.height)return!0}if(e.getBoundingClientRect){var n=e.getBoundingClientRect();if(n.width||n.height)return!0}return!1};function Nn(e,t){return e===t?!0:!e||!t?!1:"pageX"in t&&"pageY"in t?e.pageX===t.pageX&&e.pageY===t.pageY:"clientX"in t&&"clientY"in t?e.clientX===t.clientX&&e.clientY===t.clientY:!1}function $n(e,t){e!==document.activeElement&&F(t,e)&&typeof e.focus=="function"&&e.focus()}function qt(e,t){var n=null,i=null;function o(a){var s=rt(a,1),u=s[0].target;if(document.documentElement.contains(u)){var f=u.getBoundingClientRect(),l=f.width,y=f.height,d=Math.floor(l),p=Math.floor(y);(n!==d||i!==p)&&Promise.resolve().then(function(){t({width:d,height:p})}),n=d,i=p}}var r=new Ye(o);return e&&r.observe(e),function(){r.disconnect()}}const Vn=function(e,t){var n=!1,i=null;function o(){clearTimeout(i)}function r(a){if(!n||a===!0){if(e()===!1)return;n=!0,o(),i=setTimeout(function(){n=!1},t.value)}else o(),i=setTimeout(function(){n=!1,r()},t.value)}return[r,function(){n=!1,o()}]};var Rn={align:Object,target:[Object,Function],onAlign:Function,monitorBufferTime:Number,monitorWindowResize:Boolean,disabled:Boolean};function Gt(e){return typeof e!="function"?null:e()}function Kt(e){return te(e)!=="object"||!e?null:e}const Hn=K({compatConfig:{MODE:3},name:"Align",props:Rn,emits:["align"],setup:function(t,n){var i=n.expose,o=n.slots,r=P({}),a=P(),s=Vn(function(){var h=t.disabled,T=t.target,m=t.align,w=t.onAlign;if(!h&&T&&a.value){var b=a.value,O,E=Gt(T),S=Kt(T);r.value.element=E,r.value.point=S,r.value.align=m;var H=document,A=H.activeElement;return E&&En(E)?O=Mt(b,E,m):S&&(O=Dn(b,S,m)),$n(A,b),w&&O&&w(b,O),!0}return!1},q(function(){return t.monitorBufferTime})),u=rt(s,2),f=u[0],l=u[1],y=P({cancel:function(){}}),d=P({cancel:function(){}}),p=function(){var T=t.target,m=Gt(T),w=Kt(T);a.value!==d.value.element&&(d.value.cancel(),d.value.element=a.value,d.value.cancel=qt(a.value,f)),(r.value.element!==m||!Nn(r.value.point,w)||!je(r.value.align,t.align))&&(f(),y.value.element!==m&&(y.value.cancel(),y.value.element=m,y.value.cancel=qt(m,f)))};ne(function(){vt(function(){p()})}),Re(function(){vt(function(){p()})}),R(function(){return t.disabled},function(h){h?l():f()},{immediate:!0,flush:"post"});var v=P(null);return R(function(){return t.monitorWindowResize},function(h){h?v.value||(v.value=Y(window,"resize",f)):v.value&&(v.value.remove(),v.value=null)},{flush:"post"}),He(function(){y.value.cancel(),d.value.cancel(),v.value&&v.value.remove(),l()}),i({forceAlign:function(){return f(!0)}}),function(){var h=o==null?void 0:o.default();return h?ie(h[0],{ref:a},!0,!0):null}}}),kn=K({compatConfig:{MODE:3},name:"PopupInner",inheritAttrs:!1,props:Pt,emits:["mouseenter","mouseleave","mousedown","touchstart","align"],setup:function(t,n){var i=n.expose,o=n.attrs,r=n.slots,a=P(),s=P(),u=P(),f=en(ke(t,"stretch")),l=rt(f,2),y=l[0],d=l[1],p=function(){t.stretch&&d(t.getRootDomNode())},v=P(!1),h;R(function(){return t.visible},function(C){clearTimeout(h),C?h=setTimeout(function(){v.value=t.visible}):v.value=!1},{immediate:!0});var T=tn(v,p),m=rt(T,2),w=m[0],b=m[1],O=P(),E=function(){return t.point?t.point:t.getRootDomNode},S=function(){var D;(D=a.value)===null||D===void 0||D.forceAlign()},H=function(D,$){var V=t.getClassNameFromAlign($),ut=u.value;if(u.value!==V&&(u.value=V),w.value==="align"){var X;ut!==V?Promise.resolve().then(function(){S()}):b(function(){var z;(z=O.value)===null||z===void 0||z.call(O)}),(X=t.onAlign)===null||X===void 0||X.call(t,D,$)}},A=q(function(){var C=te(t.animation)==="object"?t.animation:re(t);return["onAfterEnter","onAfterLeave"].forEach(function(D){var $=C[D];C[D]=function(V){b(),w.value="stable",$==null||$(V)}}),C}),k=function(){return new Promise(function(D){O.value=D})};R([A,w],function(){!A.value&&w.value==="motion"&&b()},{immediate:!0}),i({forceAlign:S,getElement:function(){return s.value.$el||s.value}});var I=q(function(){var C;return!((C=t.align)!==null&&C!==void 0&&C.points&&(w.value==="align"||w.value==="stable"))});return function(){var C,D=t.zIndex,$=t.align,V=t.prefixCls,ut=t.destroyPopupOnHide,X=t.onMouseenter,z=t.onMouseleave,Ot=t.onTouchstart,he=Ot===void 0?function(){}:Ot,me=t.onMousedown,lt=w.value,ge=[g(g({},y.value),{},{zIndex:D,opacity:lt==="motion"||lt==="stable"||!v.value?null:0,pointerEvents:!v.value&&lt!=="stable"?"none":null}),o.style],Q=Zt((C=r.default)===null||C===void 0?void 0:C.call(r,{visible:t.visible}));Q.length>1&&(Q=M("div",{class:"".concat(V,"-content")},[Q]));var we=yt(V,o.class,u.value),ye=v.value||!t.visible,Pe=ye?Te(A.value.name,A.value):{};return M(wt,g(g({ref:s},Pe),{},{onBeforeEnter:k}),{default:function(){return!ut||t.visible?ee(M(Hn,{target:E(),key:"popup",ref:a,monitorWindowResize:!0,disabled:I.value,align:$,onAlign:H},{default:function(){return M("div",g(g({class:we,onMouseenter:X,onMouseleave:z,onMousedown:At(me,["capture"])},Ce({},L?"onTouchstartPassive":"onTouchstart",At(he,["capture"]))),{},{style:ge}),[Q])}}),[[be,v.value]]):null}})}}}),Bn=K({compatConfig:{MODE:3},name:"Popup",inheritAttrs:!1,props:Qe,setup:function(t,n){var i=n.attrs,o=n.slots,r=n.expose,a=P(!1),s=P(!1),u=P();return R([function(){return t.visible},function(){return t.mobile}],function(){a.value=t.visible,t.visible&&t.mobile&&(s.value=!0)},{immediate:!0,flush:"post"}),r({forceAlign:function(){var l;(l=u.value)===null||l===void 0||l.forceAlign()},getElement:function(){var l;return(l=u.value)===null||l===void 0?void 0:l.getElement()}}),function(){var f=g(g(g({},t),i),{},{visible:a.value}),l=s.value?M(Ze,g(g({},f),{},{mobile:t.mobile,ref:u}),{default:o.default}):M(kn,g(g({},f),{},{ref:u}),{default:o.default});return M("div",null,[M(ae,f,null),l])}}});function Fn(e,t,n){return n?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function Jt(e,t,n){var i=e[t]||{};return g(g({},i),n)}function Wn(e,t,n,i){for(var o=n.points,r=Object.keys(e),a=0;a<r.length;a+=1){var s=r[a];if(Fn(e[s].points,o,i))return"".concat(t,"-placement-").concat(s)}return""}const _n={methods:{setState:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,i=typeof t=="function"?t(this.$data,this.$props):t;if(this.getDerivedStateFromProps){var o=this.getDerivedStateFromProps(xe(this),g(g({},this.$data),i));if(o===null)return;i=g(g({},i),o||{})}Me(this.$data,i),this._.isMounted&&this.$forceUpdate(),vt(function(){n&&n()})},__emit:function(){var t=[].slice.call(arguments,0),n=t[0];n="on".concat(n[0].toUpperCase()).concat(n.substring(1));var i=this.$props[n]||this.$attrs[n];if(t.length&&i)if(Array.isArray(i))for(var o=0,r=i.length;o<r;o++)i[o].apply(i,Dt(t.slice(1)));else i.apply(void 0,Dt(t.slice(1)))}}};function Qt(){}function In(){return""}function Xn(e){return e?e.ownerDocument:window.document}var zn=["onClick","onMousedown","onTouchstart","onMouseenter","onMouseleave","onFocus","onBlur","onContextmenu"];const Zn=K({compatConfig:{MODE:3},name:"Trigger",mixins:[_n],inheritAttrs:!1,props:{action:x.oneOfType([x.string,x.arrayOf(x.string)]).def([]),showAction:x.any.def([]),hideAction:x.any.def([]),getPopupClassNameFromAlign:x.any.def(In),onPopupVisibleChange:Function,afterPopupVisibleChange:x.func.def(Qt),popup:x.any,popupStyle:{type:Object,default:void 0},prefixCls:x.string.def("rc-trigger-popup"),popupClassName:x.string.def(""),popupPlacement:String,builtinPlacements:x.object,popupTransitionName:String,popupAnimation:x.any,mouseEnterDelay:x.number.def(0),mouseLeaveDelay:x.number.def(.1),zIndex:Number,focusDelay:x.number.def(0),blurDelay:x.number.def(.15),getPopupContainer:Function,getDocument:x.func.def(Xn),forceRender:{type:Boolean,default:void 0},destroyPopupOnHide:{type:Boolean,default:!1},mask:{type:Boolean,default:!1},maskClosable:{type:Boolean,default:!0},popupAlign:x.object.def(function(){return{}}),popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},maskTransitionName:String,maskAnimation:String,stretch:String,alignPoint:{type:Boolean,default:void 0},autoDestroy:{type:Boolean,default:!1},mobile:Object,getTriggerDOMNode:Function,tryPopPortal:Boolean},setup:function(t){var n=q(function(){var u=t.popupPlacement,f=t.popupAlign,l=t.builtinPlacements;return u&&l?Jt(l,u,f):f}),i=Ee(t.tryPopPortal),o=i.setPortal,r=i.popPortal,a=P(null),s=function(f){a.value=f};return{popPortal:r,setPortal:o,vcTriggerContext:Be("vcTriggerContext",{}),popupRef:a,setPopupRef:s,triggerRef:P(null),align:n,focusTime:null,clickOutsideHandler:null,contextmenuOutsideHandler1:null,contextmenuOutsideHandler2:null,touchOutsideHandler:null,attachId:null,delayTimer:null,hasPopupMouseDown:!1,preClickTime:null,preTouchTime:null,mouseDownTimeout:null,childOriginEvents:{}}},data:function(){var t=this,n,i=this.$props,o;return this.popupVisible!==void 0?o=!!i.popupVisible:o=!!i.defaultPopupVisible,zn.forEach(function(r){t["fire".concat(r)]=function(a){t.fireEvents(r,a)}}),(n=this.setPortal)===null||n===void 0||n.call(this,M(Nt,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},{default:this.getComponent})),{prevPopupVisible:o,sPopupVisible:o,point:null}},watch:{popupVisible:function(t){t!==void 0&&(this.prevPopupVisible=this.sPopupVisible,this.sPopupVisible=t)}},created:function(){Fe("vcTriggerContext",{onPopupMouseDown:this.onPopupMouseDown}),Ne(this)},deactivated:function(){this.setPopupVisible(!1)},mounted:function(){var t=this;this.$nextTick(function(){t.updatedCal()})},updated:function(){var t=this;this.$nextTick(function(){t.updatedCal()})},beforeUnmount:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),W.cancel(this.attachId)},methods:{updatedCal:function(){var t=this.$props,n=this.$data;if(n.sPopupVisible){var i;!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextmenuToShow())&&(i=t.getDocument(this.getRootDomNode()),this.clickOutsideHandler=Y(i,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(i=i||t.getDocument(this.getRootDomNode()),this.touchOutsideHandler=Y(i,"touchstart",this.onDocumentClick,L?{passive:!1}:!1)),!this.contextmenuOutsideHandler1&&this.isContextmenuToShow()&&(i=i||t.getDocument(this.getRootDomNode()),this.contextmenuOutsideHandler1=Y(i,"scroll",this.onContextmenuClose)),!this.contextmenuOutsideHandler2&&this.isContextmenuToShow()&&(this.contextmenuOutsideHandler2=Y(window,"blur",this.onContextmenuClose))}else this.clearOutsideHandler()},onMouseenter:function(t){var n=this.$props.mouseEnterDelay;this.fireEvents("onMouseenter",t),this.delaySetPopupVisible(!0,n,n?null:t)},onMouseMove:function(t){this.fireEvents("onMousemove",t),this.setPoint(t)},onMouseleave:function(t){this.fireEvents("onMouseleave",t),this.delaySetPopupVisible(!1,this.$props.mouseLeaveDelay)},onPopupMouseenter:function(){this.clearDelayTimer()},onPopupMouseleave:function(t){var n;t&&t.relatedTarget&&!t.relatedTarget.setTimeout&&F((n=this.popupRef)===null||n===void 0?void 0:n.getElement(),t.relatedTarget)||this.delaySetPopupVisible(!1,this.$props.mouseLeaveDelay)},onFocus:function(t){this.fireEvents("onFocus",t),this.clearDelayTimer(),this.isFocusToShow()&&(this.focusTime=Date.now(),this.delaySetPopupVisible(!0,this.$props.focusDelay))},onMousedown:function(t){this.fireEvents("onMousedown",t),this.preClickTime=Date.now()},onTouchstart:function(t){this.fireEvents("onTouchstart",t),this.preTouchTime=Date.now()},onBlur:function(t){F(t.target,t.relatedTarget||document.activeElement)||(this.fireEvents("onBlur",t),this.clearDelayTimer(),this.isBlurToHide()&&this.delaySetPopupVisible(!1,this.$props.blurDelay))},onContextmenu:function(t){t.preventDefault(),this.fireEvents("onContextmenu",t),this.setPopupVisible(!0,t)},onContextmenuClose:function(){this.isContextmenuToShow()&&this.close()},onClick:function(t){if(this.fireEvents("onClick",t),this.focusTime){var n;if(this.preClickTime&&this.preTouchTime?n=Math.min(this.preClickTime,this.preTouchTime):this.preClickTime?n=this.preClickTime:this.preTouchTime&&(n=this.preTouchTime),Math.abs(n-this.focusTime)<20)return;this.focusTime=0}this.preClickTime=0,this.preTouchTime=0,this.isClickToShow()&&(this.isClickToHide()||this.isBlurToHide())&&t&&t.preventDefault&&t.preventDefault(),t&&t.domEvent&&t.domEvent.preventDefault();var i=!this.$data.sPopupVisible;(this.isClickToHide()&&!i||i&&this.isClickToShow())&&this.setPopupVisible(!this.$data.sPopupVisible,t)},onPopupMouseDown:function(){var t=this,n=this.vcTriggerContext,i=n===void 0?{}:n;this.hasPopupMouseDown=!0,clearTimeout(this.mouseDownTimeout),this.mouseDownTimeout=setTimeout(function(){t.hasPopupMouseDown=!1},0),i.onPopupMouseDown&&i.onPopupMouseDown.apply(i,arguments)},onDocumentClick:function(t){if(!(this.$props.mask&&!this.$props.maskClosable)){var n=t.target,i=this.getRootDomNode(),o=this.getPopupDomNode();(!F(i,n)||this.isContextMenuOnly())&&!F(o,n)&&!this.hasPopupMouseDown&&this.delaySetPopupVisible(!1,.1)}},getPopupDomNode:function(){var t;return((t=this.popupRef)===null||t===void 0?void 0:t.getElement())||null},getRootDomNode:function(){var t=this.$props.getTriggerDOMNode;if(t){var n=Z(this.triggerRef);return Z(t(n))}try{var i=Z(this.triggerRef);if(i)return i}catch{}return Z(this)},handleGetPopupClassFromAlign:function(t){var n=[],i=this.$props,o=i.popupPlacement,r=i.builtinPlacements,a=i.prefixCls,s=i.alignPoint,u=i.getPopupClassNameFromAlign;return o&&r&&n.push(Wn(r,a,t,s)),u&&n.push(u(t)),n.join(" ")},getPopupAlign:function(){var t=this.$props,n=t.popupPlacement,i=t.popupAlign,o=t.builtinPlacements;return n&&o?Jt(o,n,i):i},getComponent:function(){var t=this,n={};this.isMouseEnterToShow()&&(n.onMouseenter=this.onPopupMouseenter),this.isMouseLeaveToHide()&&(n.onMouseleave=this.onPopupMouseleave),n.onMousedown=this.onPopupMouseDown,n[L?"onTouchstartPassive":"onTouchstart"]=this.onPopupMouseDown;var i=this.handleGetPopupClassFromAlign,o=this.getRootDomNode,r=this.getContainer,a=this.$attrs,s=this.$props,u=s.prefixCls,f=s.destroyPopupOnHide,l=s.popupClassName,y=s.popupAnimation,d=s.popupTransitionName,p=s.popupStyle,v=s.mask,h=s.maskAnimation,T=s.maskTransitionName,m=s.zIndex,w=s.stretch,b=s.alignPoint,O=s.mobile,E=s.forceRender,S=this.$data,H=S.sPopupVisible,A=S.point,k=g(g({prefixCls:u,destroyPopupOnHide:f,visible:H,point:b?A:null,align:this.align,animation:y,getClassNameFromAlign:i,stretch:w,getRootDomNode:o,mask:v,zIndex:m,transitionName:d,maskAnimation:h,maskTransitionName:T,getContainer:r,class:l,style:p,onAlign:a.onPopupAlign||Qt},n),{},{ref:this.setPopupRef,mobile:O,forceRender:E});return M(Bn,k,{default:this.$slots.popup||function(){return Oe(t,"popup")}})},attachParent:function(t){var n=this;W.cancel(this.attachId);var i=this.$props,o=i.getPopupContainer,r=i.getDocument,a=this.getRootDomNode(),s;o?(a||o.length===0)&&(s=o(a)):s=r(this.getRootDomNode()).body,s?s.appendChild(t):this.attachId=W(function(){n.attachParent(t)})},getContainer:function(){var t=this.$props,n=t.getDocument,i=n(this.getRootDomNode()).createElement("div");return i.style.position="absolute",i.style.top="0",i.style.left="0",i.style.width="100%",this.attachParent(i),i},setPopupVisible:function(t,n){var i=this.alignPoint,o=this.sPopupVisible,r=this.onPopupVisibleChange;this.clearDelayTimer(),o!==t&&(Se(this,"popupVisible")||this.setState({sPopupVisible:t,prevPopupVisible:o}),r&&r(t)),i&&n&&t&&this.setPoint(n)},setPoint:function(t){var n=this.$props.alignPoint;!n||!t||this.setState({point:{pageX:t.pageX,pageY:t.pageY}})},handlePortalUpdate:function(){this.prevPopupVisible!==this.sPopupVisible&&this.afterPopupVisibleChange(this.sPopupVisible)},delaySetPopupVisible:function(t,n,i){var o=this,r=n*1e3;if(this.clearDelayTimer(),r){var a=i?{pageX:i.pageX,pageY:i.pageY}:null;this.delayTimer=Ke(function(){o.setPopupVisible(t,a),o.clearDelayTimer()},r)}else this.setPopupVisible(t,i)},clearDelayTimer:function(){this.delayTimer&&(Ge(this.delayTimer),this.delayTimer=null)},clearOutsideHandler:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextmenuOutsideHandler1&&(this.contextmenuOutsideHandler1.remove(),this.contextmenuOutsideHandler1=null),this.contextmenuOutsideHandler2&&(this.contextmenuOutsideHandler2.remove(),this.contextmenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)},createTwoChains:function(t){var n=function(){},i=Et(this);return this.childOriginEvents[t]&&i[t]?this["fire".concat(t)]:(n=this.childOriginEvents[t]||i[t]||n,n)},isClickToShow:function(){var t=this.$props,n=t.action,i=t.showAction;return n.indexOf("click")!==-1||i.indexOf("click")!==-1},isContextMenuOnly:function(){var t=this.$props.action;return t==="contextmenu"||t.length===1&&t[0]==="contextmenu"},isContextmenuToShow:function(){var t=this.$props,n=t.action,i=t.showAction;return n.indexOf("contextmenu")!==-1||i.indexOf("contextmenu")!==-1},isClickToHide:function(){var t=this.$props,n=t.action,i=t.hideAction;return n.indexOf("click")!==-1||i.indexOf("click")!==-1},isMouseEnterToShow:function(){var t=this.$props,n=t.action,i=t.showAction;return n.indexOf("hover")!==-1||i.indexOf("mouseenter")!==-1},isMouseLeaveToHide:function(){var t=this.$props,n=t.action,i=t.hideAction;return n.indexOf("hover")!==-1||i.indexOf("mouseleave")!==-1},isFocusToShow:function(){var t=this.$props,n=t.action,i=t.showAction;return n.indexOf("focus")!==-1||i.indexOf("focus")!==-1},isBlurToHide:function(){var t=this.$props,n=t.action,i=t.hideAction;return n.indexOf("focus")!==-1||i.indexOf("blur")!==-1},forcePopupAlign:function(){if(this.$data.sPopupVisible){var t;(t=this.popupRef)===null||t===void 0||t.forceAlign()}},fireEvents:function(t,n){this.childOriginEvents[t]&&this.childOriginEvents[t](n);var i=this.$props[t]||this.$attrs[t];i&&i(n)},close:function(){this.setPopupVisible(!1)}},render:function(){var t=this,n=this.$attrs,i=Ae(De(this)),o=this.$props.alignPoint,r=i[0];this.childOriginEvents=Et(r);var a={key:"trigger"};this.isContextmenuToShow()?a.onContextmenu=this.onContextmenu:a.onContextmenu=this.createTwoChains("onContextmenu"),this.isClickToHide()||this.isClickToShow()?(a.onClick=this.onClick,a.onMousedown=this.onMousedown,a[L?"onTouchstartPassive":"onTouchstart"]=this.onTouchstart):(a.onClick=this.createTwoChains("onClick"),a.onMousedown=this.createTwoChains("onMousedown"),a[L?"onTouchstartPassive":"onTouchstart"]=this.createTwoChains("onTouchstart")),this.isMouseEnterToShow()?(a.onMouseenter=this.onMouseenter,o&&(a.onMousemove=this.onMouseMove)):a.onMouseenter=this.createTwoChains("onMouseenter"),this.isMouseLeaveToHide()?a.onMouseleave=this.onMouseleave:a.onMouseleave=this.createTwoChains("onMouseleave"),this.isFocusToShow()||this.isBlurToHide()?(a.onFocus=this.onFocus,a.onBlur=this.onBlur):(a.onFocus=this.createTwoChains("onFocus"),a.onBlur=function(l){l&&(!l.relatedTarget||!F(l.target,l.relatedTarget))&&t.createTwoChains("onBlur")(l)});var s=yt(r&&r.props&&r.props.class,n.class);s&&(a.class=s);var u=ie(r,g(g({},a),{},{ref:"triggerRef"}),!0,!0);if(this.popPortal)return u;var f=M(Nt,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},{default:this.getComponent});return M(We,null,[f,u])}});function ti(e,t){var n=t||{},i=n.defaultValue,o=n.value,r=o===void 0?P():o,a=typeof e=="function"?e():e;r.value!==void 0&&(a=_e(r)),i!==void 0&&(a=typeof i=="function"?i():i);var s=P(a),u=P(a);Ie(function(){var l=r.value!==void 0?r.value:s.value;t.postState&&(l=t.postState(l)),u.value=l});function f(l){var y=u.value;s.value=l,Xe(u.value)!==l&&t.onChange&&t.onChange(l,y)}return R(r,function(){s.value=r.value}),[u,f]}export{_n as B,Zn as T,En as i,ti as u};
