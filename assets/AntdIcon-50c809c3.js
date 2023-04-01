import{h as D,_ as ge,a as z}from"./runtime-core.esm-bundler-e620233b.js";function u(e,t){be(e)&&(e="100%");var r=pe(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function ar(e){return Math.min(1,Math.max(0,e))}function be(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function pe(e){return typeof e=="string"&&e.indexOf("%")!==-1}function he(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function A(e){return e<=1?"".concat(Number(e)*100,"%"):e}function p(e){return e.length===1?"0"+e:String(e)}function me(e,t,r){return{r:u(e,255)*255,g:u(t,255)*255,b:u(r,255)*255}}function or(e,t,r){e=u(e,255),t=u(t,255),r=u(r,255);var n=Math.max(e,t,r),a=Math.min(e,t,r),o=0,f=0,i=(n+a)/2;if(n===a)f=0,o=0;else{var l=n-a;switch(f=i>.5?l/(2-n-a):l/(n+a),n){case e:o=(t-r)/l+(t<r?6:0);break;case t:o=(r-e)/l+2;break;case r:o=(e-t)/l+4;break}o/=6}return{h:o,s:f,l:i}}function _(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ye(e,t,r){var n,a,o;if(e=u(e,360),t=u(t,100),r=u(r,100),t===0)a=r,o=r,n=r;else{var f=r<.5?r*(1+t):r+t-r*t,i=2*r-f;n=_(i,f,e+1/3),a=_(i,f,e),o=_(i,f,e-1/3)}return{r:n*255,g:a*255,b:o*255}}function ve(e,t,r){e=u(e,255),t=u(t,255),r=u(r,255);var n=Math.max(e,t,r),a=Math.min(e,t,r),o=0,f=n,i=n-a,l=n===0?0:i/n;if(n===a)o=0;else{switch(n){case e:o=(t-r)/i+(t<r?6:0);break;case t:o=(r-e)/i+2;break;case r:o=(e-t)/i+4;break}o/=6}return{h:o,s:l,v:f}}function Ce(e,t,r){e=u(e,360)*6,t=u(t,100),r=u(r,100);var n=Math.floor(e),a=e-n,o=r*(1-t),f=r*(1-a*t),i=r*(1-(1-a)*t),l=n%6,c=[r,f,o,o,i,r][l],h=[i,r,r,f,o,o][l],m=[o,o,i,r,r,f][l];return{r:c*255,g:h*255,b:m*255}}function we(e,t,r,n){var a=[p(Math.round(e).toString(16)),p(Math.round(t).toString(16)),p(Math.round(r).toString(16))];return n&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function ir(e,t,r,n,a){var o=[p(Math.round(e).toString(16)),p(Math.round(t).toString(16)),p(Math.round(r).toString(16)),p(xe(n))];return a&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function xe(e){return Math.round(parseFloat(e)*255).toString(16)}function U(e){return s(e)/255}function s(e){return parseInt(e,16)}function fr(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var q={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function C(e){var t={r:0,g:0,b:0},r=1,n=null,a=null,o=null,f=!1,i=!1;return typeof e=="string"&&(e=ke(e)),typeof e=="object"&&(g(e.r)&&g(e.g)&&g(e.b)?(t=me(e.r,e.g,e.b),f=!0,i=String(e.r).substr(-1)==="%"?"prgb":"rgb"):g(e.h)&&g(e.s)&&g(e.v)?(n=A(e.s),a=A(e.v),t=Ce(e.h,n,a),f=!0,i="hsv"):g(e.h)&&g(e.s)&&g(e.l)&&(n=A(e.s),o=A(e.l),t=ye(e.h,n,o),f=!0,i="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=he(r),{ok:f,format:e.format||i,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}var Se="[-\\+]?\\d+%?",Ae="[-\\+]?\\d*\\.\\d+%?",b="(?:".concat(Ae,")|(?:").concat(Se,")"),M="[\\s|\\(]+(".concat(b,")[,|\\s]+(").concat(b,")[,|\\s]+(").concat(b,")\\s*\\)?"),P="[\\s|\\(]+(".concat(b,")[,|\\s]+(").concat(b,")[,|\\s]+(").concat(b,")[,|\\s]+(").concat(b,")\\s*\\)?"),d={CSS_UNIT:new RegExp(b),rgb:new RegExp("rgb"+M),rgba:new RegExp("rgba"+P),hsl:new RegExp("hsl"+M),hsla:new RegExp("hsla"+P),hsv:new RegExp("hsv"+M),hsva:new RegExp("hsva"+P),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ke(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(q[e])e=q[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var r=d.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=d.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=d.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=d.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=d.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=d.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=d.hex8.exec(e),r?{r:s(r[1]),g:s(r[2]),b:s(r[3]),a:U(r[4]),format:t?"name":"hex8"}:(r=d.hex6.exec(e),r?{r:s(r[1]),g:s(r[2]),b:s(r[3]),format:t?"name":"hex"}:(r=d.hex4.exec(e),r?{r:s(r[1]+r[1]),g:s(r[2]+r[2]),b:s(r[3]+r[3]),a:U(r[4]+r[4]),format:t?"name":"hex8"}:(r=d.hex3.exec(e),r?{r:s(r[1]+r[1]),g:s(r[2]+r[2]),b:s(r[3]+r[3]),format:t?"name":"hex"}:!1)))))))))}function g(e){return Boolean(d.CSS_UNIT.exec(String(e)))}var k=2,L=.16,Te=.05,Oe=.05,je=.15,ne=5,ae=4,Ie=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function V(e){var t=e.r,r=e.g,n=e.b,a=ve(t,r,n);return{h:a.h*360,s:a.s,v:a.v}}function T(e){var t=e.r,r=e.g,n=e.b;return"#".concat(we(t,r,n,!1))}function _e(e,t,r){var n=r/100,a={r:(t.r-e.r)*n+e.r,g:(t.g-e.g)*n+e.g,b:(t.b-e.b)*n+e.b};return a}function G(e,t,r){var n;return Math.round(e.h)>=60&&Math.round(e.h)<=240?n=r?Math.round(e.h)-k*t:Math.round(e.h)+k*t:n=r?Math.round(e.h)+k*t:Math.round(e.h)-k*t,n<0?n+=360:n>=360&&(n-=360),n}function Y(e,t,r){if(e.h===0&&e.s===0)return e.s;var n;return r?n=e.s-L*t:t===ae?n=e.s+L:n=e.s+Te*t,n>1&&(n=1),r&&t===ne&&n>.1&&(n=.1),n<.06&&(n=.06),Number(n.toFixed(2))}function Z(e,t,r){var n;return r?n=e.v+Oe*t:n=e.v-je*t,n>1&&(n=1),Number(n.toFixed(2))}function R(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[],n=C(e),a=ne;a>0;a-=1){var o=V(n),f=T(C({h:G(o,a,!0),s:Y(o,a,!0),v:Z(o,a,!0)}));r.push(f)}r.push(T(n));for(var i=1;i<=ae;i+=1){var l=V(n),c=T(C({h:G(l,i),s:Y(l,i),v:Z(l,i)}));r.push(c)}return t.theme==="dark"?Ie.map(function(h){var m=h.index,S=h.opacity,j=T(_e(C(t.backgroundColor||"#141414"),C(r[m]),S*100));return j}):r}var E={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},F={},$={};Object.keys(E).forEach(function(e){F[e]=R(E[e]),F[e].primary=F[e][5],$[e]=R(E[e],{theme:"dark",backgroundColor:"#141414"}),$[e].primary=$[e][5]});var J=[],w=[],Me="insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";function Pe(){var e=document.createElement("style");return e.setAttribute("type","text/css"),e}function Ee(e,t){if(t=t||{},e===void 0)throw new Error(Me);var r=t.prepend===!0?"prepend":"append",n=t.container!==void 0?t.container:document.querySelector("head"),a=J.indexOf(n);a===-1&&(a=J.push(n)-1,w[a]={});var o;return w[a]!==void 0&&w[a][r]!==void 0?o=w[a][r]:(o=w[a][r]=Pe(),r==="prepend"?n.insertBefore(o,n.childNodes[0]):n.appendChild(o)),e.charCodeAt(0)===65279&&(e=e.substr(1,e.length)),o.styleSheet?o.styleSheet.cssText+=e:o.textContent+=e,o}function Q(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){Fe(e,a,r[a])})}return e}function Fe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function lr(e,t){}function X(e){return typeof e=="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&(typeof e.icon=="object"||typeof e.icon=="function")}function N(e,t,r){return r?D(e.tag,Q({key:t},r,e.attrs),(e.children||[]).map(function(n,a){return N(n,"".concat(t,"-").concat(e.tag,"-").concat(a))})):D(e.tag,Q({key:t},e.attrs),(e.children||[]).map(function(n,a){return N(n,"".concat(t,"-").concat(e.tag,"-").concat(a))}))}function oe(e){return R(e)[0]}function ie(e){return e?Array.isArray(e)?e:[e]:[]}var ur={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},$e=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,K=!1,Re=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$e;ge(function(){K||(typeof window<"u"&&window.document&&window.document.documentElement&&Ee(t,{prepend:!0}),K=!0)})},Ne=["icon","primaryColor","secondaryColor"];function He(e,t){if(e==null)return{};var r=Be(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Be(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function O(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){We(e,a,r[a])})}return e}function We(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function De(e){var t=e.primaryColor,r=e.secondaryColor;x.primaryColor=t,x.secondaryColor=r||oe(t),x.calculated=!!r}function ze(){return O({},x)}var y=function(t,r){var n=O({},t,r.attrs),a=n.icon,o=n.primaryColor,f=n.secondaryColor,i=He(n,Ne),l=x;if(o&&(l={primaryColor:o,secondaryColor:f||oe(o)}),Re(),X(a),!X(a))return null;var c=a;return c&&typeof c.icon=="function"&&(c=O({},c,{icon:c.icon(l.primaryColor,l.secondaryColor)})),N(c.icon,"svg-".concat(c.name),O({},i,{"data-icon":c.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}))};y.props={icon:Object,primaryColor:String,secondaryColor:String,focusable:String};y.inheritAttrs=!1;y.displayName="IconBase";y.getTwoToneColors=ze;y.setTwoToneColors=De;const B=y;function Ue(e,t){return Ge(e)||Ve(e,t)||Le(e,t)||qe()}function qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(e,t){if(e){if(typeof e=="string")return ee(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ee(e,t)}}function ee(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ve(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],a=!0,o=!1,f,i;try{for(r=r.call(e);!(a=(f=r.next()).done)&&(n.push(f.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,i=l}finally{try{!a&&r.return!=null&&r.return()}finally{if(o)throw i}}return n}}function Ge(e){if(Array.isArray(e))return e}function fe(e){var t=ie(e),r=Ue(t,2),n=r[0],a=r[1];return B.setTwoToneColors({primaryColor:n,secondaryColor:a})}function Ye(){var e=B.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var Ze=["class","icon","spin","rotate","tabindex","twoToneColor","onClick"];function Je(e,t){return er(e)||Ke(e,t)||Xe(e,t)||Qe()}function Qe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xe(e,t){if(e){if(typeof e=="string")return re(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return re(e,t)}}function re(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ke(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],a=!0,o=!1,f,i;try{for(r=r.call(e);!(a=(f=r.next()).done)&&(n.push(f.value),!(t&&n.length===t));a=!0);}catch(l){o=!0,i=l}finally{try{!a&&r.return!=null&&r.return()}finally{if(o)throw i}}return n}}function er(e){if(Array.isArray(e))return e}function te(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){H(e,a,r[a])})}return e}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function rr(e,t){if(e==null)return{};var r=tr(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function tr(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}fe("#1890ff");var v=function(t,r){var n,a=te({},t,r.attrs),o=a.class,f=a.icon,i=a.spin,l=a.rotate,c=a.tabindex,h=a.twoToneColor,m=a.onClick,S=rr(a,Ze),j=(n={anticon:!0},H(n,"anticon-".concat(f.name),Boolean(f.name)),H(n,o,o),n),le=i===""||i||f.name==="loading"?"anticon-spin":"",I=c;I===void 0&&m&&(I=-1,S.tabindex=I);var ue=l?{msTransform:"rotate(".concat(l,"deg)"),transform:"rotate(".concat(l,"deg)")}:void 0,ce=ie(h),W=Je(ce,2),se=W[0],de=W[1];return z("span",te({role:"img","aria-label":f.name},S,{onClick:m,class:j}),[z(B,{class:le,icon:f,primaryColor:se,secondaryColor:de,style:ue},null)])};v.props={spin:Boolean,rotate:Number,icon:Object,twoToneColor:String};v.displayName="AntdIcon";v.inheritAttrs=!1;v.getTwoToneColor=Ye;v.setTwoToneColor=fe;const cr=v;export{cr as A,or as a,he as b,we as c,ir as d,ar as e,u as f,q as g,R as h,C as i,fe as j,Ye as k,fr as n,E as p,ve as r,ur as s,Re as u,lr as w};
