import{U as T,R as D,V as O,x as G,J as Z,N as $,L as q,W as I,X as F,m as z,Y as Q,Z as tt,_ as et,$ as st,K as nt}from"./runtime-core.esm-bundler-e620233b.js";var ot=!1;let H;const w=t=>H=t,J=Symbol();function k(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var L;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(L||(L={}));function it(){const t=T(!0),n=t.run(()=>D({}));let s=[],e=[];const c=O({install(u){w(c),c._a=u,u.provide(J,c),u.config.globalProperties.$pinia=c,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ot?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return c}const V=()=>{};function x(t,n,s,e=V){t.push(n);const c=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&Q()&&tt(c),c}function P(t,...n){t.slice().forEach(s=>{s(...n)})}function C(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],c=t[s];k(c)&&k(e)&&t.hasOwnProperty(s)&&!I(e)&&!F(e)?t[s]=C(c,e):t[s]=e}return t}const ct=Symbol();function rt(t){return!k(t)||!t.hasOwnProperty(ct)}const{assign:v}=Object;function ut(t){return!!(I(t)&&t.effect)}function at(t,n,s,e){const{state:c,actions:u,getters:f}=n,a=s.state.value[t];let d;function h(){a||(s.state.value[t]=c?c():{});const b=st(s.state.value[t]);return v(b,u,Object.keys(f||{}).reduce((S,y)=>(S[y]=O(nt(()=>{w(s);const E=s._s.get(t);return f[y].call(E,E)})),S),{}))}return d=Y(t,h,n,s,e,!0),d.$reset=function(){const S=c?c():{};this.$patch(y=>{v(y,S)})},d}function Y(t,n,s={},e,c,u){let f;const a=v({actions:{}},s),d={deep:!0};let h,b,S=O([]),y=O([]),E;const m=e.state.value[t];!u&&!m&&(e.state.value[t]={}),D({});let N;function A(r){let o;h=b=!1,typeof r=="function"?(r(e.state.value[t]),o={type:L.patchFunction,storeId:t,events:E}):(C(e.state.value[t],r),o={type:L.patchObject,payload:r,storeId:t,events:E});const _=N=Symbol();et().then(()=>{N===_&&(h=!0)}),b=!0,P(S,o,e.state.value[t])}const M=V;function U(){f.stop(),S=[],y=[],e._s.delete(t)}function K(r,o){return function(){w(e);const _=Array.from(arguments),R=[],g=[];function X(i){R.push(i)}function B(i){g.push(i)}P(y,{args:_,name:r,store:l,after:X,onError:B});let j;try{j=o.apply(this&&this.$id===t?this:l,_)}catch(i){throw P(g,i),i}return j instanceof Promise?j.then(i=>(P(R,i),i)).catch(i=>(P(g,i),Promise.reject(i))):(P(R,j),j)}}const W={_p:e,$id:t,$onAction:x.bind(null,y),$patch:A,$reset:M,$subscribe(r,o={}){const _=x(S,r,o.detached,()=>R()),R=f.run(()=>$(()=>e.state.value[t],g=>{(o.flush==="sync"?b:h)&&r({storeId:t,type:L.direct,events:E},g)},v({},d,o)));return _},$dispose:U},l=q(W);e._s.set(t,l);const p=e._e.run(()=>(f=T(),f.run(()=>n())));for(const r in p){const o=p[r];if(I(o)&&!ut(o)||F(o))u||(m&&rt(o)&&(I(o)?o.value=m[r]:C(o,m[r])),e.state.value[t][r]=o);else if(typeof o=="function"){const _=K(r,o);p[r]=_,a.actions[r]=o}}return v(l,p),v(z(l),p),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:r=>{A(o=>{v(o,r)})}}),e._p.forEach(r=>{v(l,f.run(()=>r({store:l,app:e._a,pinia:e,options:a})))}),m&&u&&s.hydrate&&s.hydrate(l.$state,m),h=!0,b=!0,l}function lt(t,n,s){let e,c;const u=typeof n=="function";typeof t=="string"?(e=t,c=u?s:n):(c=t,e=t.id);function f(a,d){const h=G();return a=a||h&&Z(J,null),a&&w(a),a=H,a._s.has(e)||(u?Y(e,n,c,a):at(e,c,a)),a._s.get(e)}return f.$id=e,f}const ht="Neiko Admin",bt="Neiko Admin 是一套简单好用的后台管理系统",St="neiko-admin/",yt="RouterLayout",_t="_EmptyNode",vt="/redirect",dt="/login";export{_t as E,dt as L,ht as P,vt as R,St as S,bt as a,yt as b,it as c,lt as d};
