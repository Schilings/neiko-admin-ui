/* empty css                */import{t as g,_ as y}from"./index-d825368e.js";/* empty css              */import{l as S}from"./index-d8cf9b9f.js";import{l as k}from"./index-8c05ae55.js";import{i as v}from"./useConfigInject-4e7e38f3.js";import{d as x,R as u,S as C,o as t,c as V,w as T,a6 as s,ak as D,F as p,u as a,ac as m,a5 as N,ad as P,an as z,W as B}from"./runtime-core.esm-bundler-e620233b.js";const E={name:"SysOrganizationTreeSelect"},U=x({...E,props:v(g(),{allowClear:!0,showSearch:!0,treeNodeFilterProp:"name",fieldNames:{label:"name",value:"id"},dropdownStyle:{maxHeight:"400px",overflow:"auto"}}),emits:["update:value"],setup(d,{emit:_}){const n=d,e=u(""),l=u(),f=r=>{_("update:value",r)};return C(()=>{if(n.treeData){l.value=n.treeData;return}k().then(r=>{l.value=S(r.data,0)})}),(r,c)=>{const h=y;return t(),V(h,z(n,{searchValue:a(e),"onUpdate:searchValue":c[0]||(c[0]=o=>B(e)?e.value=o:null),style:{width:"100%"},"tree-data":a(l),onChange:f}),{title:T(({name:o})=>[o?(t(!0),s(p,{key:0},D(o.toString().split(new RegExp(`(?<=${a(e)})|(?=${a(e)})`,"i")),(i,w)=>(t(),s(p,null,[i.toLowerCase()===a(e).toLowerCase()?(t(),s("span",{key:w,style:{color:"#08c"}},m(i),1)):(t(),s(p,{key:1},[N(m(i),1)],64))],64))),256)):P("",!0)]),_:1},16,["searchValue","tree-data"])}}});export{U as _};
