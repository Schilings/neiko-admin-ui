/* empty css                *//* empty css              */import"./index-cf5fb184.js";import{_ as V,F as $}from"./index-e1aeaf6d.js";import"./index-64985671.js";import"./index-51c9200e.js";import{I as z}from"./index-4f3b583f.js";/* empty css              */import{_ as D}from"./DictRadioGroup.vue_vue_type_script_setup_true_lang-1f34ae93.js";import{_ as K}from"./SysOrganizationTreeSelect.vue_vue_type_script_setup_true_lang-e554d1d9.js";import{u as G}from"./modal-94b635e5.js";import{u as H,F as f,a as J,l as Q,w as W}from"./form-d9144801.js";import{o as X}from"./bean-utils-948c4eb4.js";import{c as Y,u as Z}from"./index-2012180d.js";import{d as h,L,K as ee,o as v,c as b,w as a,a as t,u as e,ad as T,an as d,a5 as i}from"./runtime-core.esm-bundler-e620233b.js";import{a as oe,S as se}from"./index-fd0b6746.js";import{_ as te}from"./TextArea-c870182f.js";import{M as ae}from"./index-d8cf9b9f.js";const le={name:"SysRoleFormModal"},Ue=h({...le,emits:["submit-success"],setup(ue,{expose:k,emit:U}){const{title:c,visible:x,openModal:E,closeModal:R}=G(),{formAction:y,isUpdateForm:_}=H(),F=async(u,o)=>o===""?Promise.reject("请输入角色标识！"):o.indexOf("ROLE_")!==0?Promise.reject("角色标识必须以ROLE_开头！"):Promise.resolve(),s=L({id:void 0,name:"",code:"",type:1,scopeType:1,scopeResources:void 0,remarks:"",scopeResourceList:[]}),g=ee(()=>s.scopeType===5),M=L({name:[{required:!0,message:"请输入角色名!"}],code:[{validator:F}],type:[{required:!0,message:"请选择角色类型!"}],scopeType:[{required:!0,message:"请选择数据权限!"}],scopeResources:[{required:g,message:"请选择权限范围！"}]}),S={[f.CREATE]:Y,[f.UPDATE]:Z},{submitLoading:C,validateAndSubmit:w,resetFields:A,validateInfos:m}=J(y,S,s,M),O=()=>{var o;const u={...s};u.scopeResources=(o=u.scopeResourceList)==null?void 0:o.join(","),delete u.scopeResourceList,w(u,{onSuccess:()=>{R(),U("submit-success")}})},P=()=>{R(),C.value=!1};return k({open(u,o){var n;E(),A(),u===f.CREATE?c.value="角色新建":(c.value="角色修改",X(s,o),s.scopeResourceList=(n=o==null?void 0:o.scopeResources)==null?void 0:n.split(",").map(Number)),y.value=u}}),(u,o)=>{const n=z,r=V,q=D,p=oe,N=se,j=te,B=$,I=ae;return v(),b(I,{title:e(c),visible:e(x),"mask-closable":!1,"body-style":{paddingBottom:"8px"},"confirm-loading":e(C),onOk:O,onCancel:P},{default:a(()=>[t(B,{model:e(s),"label-col":e(Q),"wrapper-col":e(W)},{default:a(()=>[e(_)?(v(),b(r,{key:0,style:{display:"none"}},{default:a(()=>[t(n,{value:e(s).id,"onUpdate:value":o[0]||(o[0]=l=>e(s).id=l)},null,8,["value"])]),_:1})):T("",!0),t(r,d({label:"角色名"},e(m).name),{default:a(()=>[t(n,{value:e(s).name,"onUpdate:value":o[1]||(o[1]=l=>e(s).name=l),placeholder:"请输入"},null,8,["value"])]),_:1},16),t(r,d({label:"角色标识"},e(m).code),{default:a(()=>[t(n,{value:e(s).code,"onUpdate:value":o[2]||(o[2]=l=>e(s).code=l),disabled:e(_),placeholder:"角色标识必须以ROLE_开头!"},null,8,["value","disabled"])]),_:1},16),t(r,d({label:"角色类型"},e(m).type),{default:a(()=>[t(q,{value:e(s).type,"onUpdate:value":o[3]||(o[3]=l=>e(s).type=l),disabled:e(_),type:"button","dict-code":"role_type"},null,8,["value","disabled"])]),_:1},16),t(r,d({label:"数据权限"},e(m).scopeType),{default:a(()=>[t(N,{value:e(s).scopeType,"onUpdate:value":o[4]||(o[4]=l=>e(s).scopeType=l)},{default:a(()=>[t(p,{value:0},{default:a(()=>[i("全部")]),_:1}),t(p,{value:1},{default:a(()=>[i("个人")]),_:1}),t(p,{value:2},{default:a(()=>[i("本人及子级")]),_:1}),t(p,{value:3},{default:a(()=>[i("本级")]),_:1}),t(p,{value:4},{default:a(()=>[i("本级及子级")]),_:1}),t(p,{value:5},{default:a(()=>[i("自定义")]),_:1})]),_:1},8,["value"])]),_:1},16),e(g)?(v(),b(r,d({key:1,label:"数据范围"},e(m).scopeResources),{default:a(()=>[t(K,{value:e(s).scopeResourceList,"onUpdate:value":o[5]||(o[5]=l=>e(s).scopeResourceList=l),multiple:!0},null,8,["value"])]),_:1},16)):T("",!0),t(r,{label:"备注"},{default:a(()=>[t(j,{value:e(s).remarks,"onUpdate:value":o[6]||(o[6]=l=>e(s).remarks=l),"auto-size":{minRows:4,maxRows:8},placeholder:"备注信息"},null,8,["value"])]),_:1})]),_:1},8,["model","label-col","wrapper-col"])]),_:1},8,["title","visible","confirm-loading"])}}});export{Ue as _};
