/* empty css                *//* empty css              */import"./index-cf5fb184.js";import{_ as P,F as h}from"./index-e1aeaf6d.js";import"./index-64985671.js";import"./index-51c9200e.js";import{I as L}from"./index-4f3b583f.js";import{_ as N}from"./index-5d5b84ea.js";import{_ as V}from"./SysOrganizationTreeSelect.vue_vue_type_script_setup_true_lang-e554d1d9.js";import{u as D}from"./modal-94b635e5.js";import{u as K,F as p,a as $,l as j,w as G}from"./form-d9144801.js";import{o as H}from"./bean-utils-948c4eb4.js";import{c as J,u as Q}from"./index-8c05ae55.js";import{d as W,K as X,L as v,o as b,c as g,w as l,a as t,u as e,ad as Y,an as u}from"./runtime-core.esm-bundler-e620233b.js";import{_ as Z}from"./TextArea-c870182f.js";import{M as ee}from"./index-d8cf9b9f.js";const oe={name:"SysOrganizationFormModal"},ge=W({...oe,props:{organizationTree:null},emits:["submit-success"],setup(k,{expose:y,emit:C}){const w=k,x=X(()=>[{id:0,key:0,name:"根组织",children:w.organizationTree}]),{title:m,visible:F,openModal:I,closeModal:d}=D(),{formAction:c,isUpdateForm:M}=K(),A={[p.CREATE]:J,[p.UPDATE]:Q},o=v({id:void 0,parentId:0,name:"",sort:1,remarks:""}),U=v({parentId:[{required:!0,type:"number",message:"请选择父级组织"}],name:[{required:!0,message:"请输入组织名称!"}],remarks:[{max:512}]}),{submitLoading:_,validateAndSubmit:z,resetFields:T,validateInfos:i}=$(c,A,o,U),E=()=>{const r={...o};z(r,{onSuccess:()=>{d(),C("submit-success")}})},O=()=>{d(),_.value=!1};return y({open(r,a){I(),T(),c.value=r,r===p.CREATE?m.value="新建组织":(m.value="修改组织",H(o,a))}}),(r,a)=>{const f=L,s=P,R=N,S=Z,q=h,B=ee;return b(),g(B,{title:e(m),visible:e(F),"mask-closable":!1,"body-style":{paddingBottom:"8px"},"confirm-loading":e(_),onOk:E,onCancel:O},{default:l(()=>[t(q,{model:e(o),"label-col":e(j),"wrapper-col":e(G)},{default:l(()=>[e(M)?(b(),g(s,{key:0,style:{display:"none"}},{default:l(()=>[t(f,{value:e(o).id,"onUpdate:value":a[0]||(a[0]=n=>e(o).id=n)},null,8,["value"])]),_:1})):Y("",!0),t(s,u({label:"父级组织"},e(i).parentId),{default:l(()=>[t(V,{value:e(o).parentId,"onUpdate:value":a[1]||(a[1]=n=>e(o).parentId=n),placeholder:"父级组织","tree-data":e(x),"tree-default-expand-all":"","allow-clear":""},null,8,["value","tree-data"])]),_:1},16),t(s,u({label:"组织名称"},e(i).name),{default:l(()=>[t(f,{value:e(o).name,"onUpdate:value":a[2]||(a[2]=n=>e(o).name=n),placeholder:"组织名称"},null,8,["value"])]),_:1},16),t(s,{label:"排序"},{default:l(()=>[t(R,{value:e(o).sort,"onUpdate:value":a[3]||(a[3]=n=>e(o).sort=n),style:{width:"60%"},placeholder:"按数值由小到大升序"},null,8,["value"])]),_:1}),t(s,u({label:"备注信息"},e(i).remarks),{default:l(()=>[t(S,{value:e(o).remarks,"onUpdate:value":a[4]||(a[4]=n=>e(o).remarks=n),placeholder:"备注信息",rows:3,"max-length":512},null,8,["value"])]),_:1},16)]),_:1},8,["model","label-col","wrapper-col"])]),_:1},8,["title","visible","confirm-loading"])}}});export{ge as _};
