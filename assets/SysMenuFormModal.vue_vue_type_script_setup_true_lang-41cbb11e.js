/* empty css                *//* empty css              */import"./index-cf5fb184.js";import{_ as ne,F as se}from"./index-e1aeaf6d.js";import"./index-64985671.js";import"./index-51c9200e.js";import{I as re}from"./index-4f3b583f.js";/* empty css              *//* empty css              */import{_ as ue}from"./index-5d5b84ea.js";import{_ as ie}from"./DictRadioGroup.vue_vue_type_script_setup_true_lang-1f34ae93.js";import{_ as pe}from"./index-d825368e.js";import{u as me}from"./modal-94b635e5.js";import{u as de,F as k,a as _e}from"./form-d9144801.js";import{d as fe,e as ce,M as ve,l as ge}from"./index-d8cf9b9f.js";import{A as be,_ as Ue}from"./index-abee35aa.js";import{o as Ie}from"./bean-utils-948c4eb4.js";import"./index-2ae081eb.js";import{R as xe,_ as ye}from"./RadioButton-65a1cb88.js";import{d as Xe,S as we,L as O,K as N,o as p,c as g,w as a,a as t,u as e,ad as b,a7 as ke,ac as F,an as U,a5 as i,a6 as Te,F as Re,m as Ce}from"./runtime-core.esm-bundler-e620233b.js";import{T as Ee}from"./index-78dc20df.js";import{a as Me,_ as Ae}from"./index-a6c0766c.js";import{f as De}from"./VerticalAlignMiddleOutlined-1fbd9b6a.js";import{a as Oe,S as Ne}from"./index-fd0b6746.js";import{_ as Fe}from"./TextArea-c870182f.js";var m=(u=>(u[u.DIRECTORY=0]="DIRECTORY",u[u.MENU=1]="MENU",u[u.BUTTON=2]="BUTTON",u))(m||{});const Be={name:"SysMenuFormModal"},it=Xe({...Be,props:{menuList:null},emits:["submit-success"],setup(u,{expose:B,emit:P}){const T=u,q={sm:{span:24},md:{span:4}},S={sm:{span:24},md:{span:20}},d={sm:{span:24},md:{span:8}},_={sm:{span:24},md:{span:16}},R=[{id:0,title:"根目录"}];we(()=>{R[0].children=T.menuList?ge(T.menuList.filter(c=>c.type!==m.BUTTON),0):[]});const{title:y,visible:L,openModal:h,closeModal:C}=me(),{formAction:E,isUpdateForm:j}=de(),l=O({id:void 0,parentId:0,title:"",icon:"",permission:"",path:"",targetType:1,uri:"",sort:1,keepAlive:1,hidden:0,type:m.DIRECTORY,remarks:""}),M=N(()=>l.type===m.MENU),I=N(()=>l.type===m.BUTTON),V=O({id:[{required:!0,validator:async(c,o)=>{const r=String(o);if(r){if(r.length!==6)return Promise.reject("菜单长度必须为 6 位！")}else return Promise.reject("请确认新密码！");return l.type===m.DIRECTORY&&!r.endsWith("0000")?Promise.reject("目录类型 ID 格式为 XX0000，xx 为目录编号"):l.type===m.MENU&&!r.endsWith("00")?Promise.reject("菜单类型 ID 格式为 XXXX00，前两位 XX 为所属目录编号，后两位 XX 为菜单编号"):Promise.resolve()}}],title:[{required:!0,message:"请输入菜单名称!"}],sort:[{required:!0,message:"请输入一个排序值!"}],path:[{required:!I,message:"请输入路由地址!"},{pattern:/^[a-z0-9-]+$/,message:"仅小写字母、中划线、数字"}],uri:[{required:M,message:"请输入资源路径!"}],permission:[{required:I,message:"请输入授权标识!"}]}),Y={[k.CREATE]:fe,[k.UPDATE]:ce},{submitLoading:A,validateAndSubmit:$,resetFields:W,validateInfos:f}=_e(E,Y,l,V),z=()=>{$(Ce(l),{onSuccess:()=>{C(),P("submit-success")}})},H=()=>{C(),A.value=!1};return B({open(c,o){h(),W(),c===k.CREATE?(y.value="菜单新建",l.parentId=(o==null?void 0:o.id)||0):(y.value="菜单修改",Ie(l,o),l.originalId=o==null?void 0:o.id),E.value=c}}),(c,o)=>{const r=re,s=ne,K=pe,Q=ie,G=Ue,J=Ee,v=Me,Z=ue,X=Ae,ee=De,w=Oe,te=Ne,x=xe,D=ye,le=Fe,ae=se,oe=ve;return p(),g(oe,{title:e(y),visible:e(L),"mask-closable":!1,centered:!0,"body-style":{padding:"24px 40px 8px 40px"},"confirm-loading":e(A),width:650,onOk:z,onCancel:H},{default:a(()=>[t(ae,{model:e(l),"label-col":q,"wrapper-col":S},{default:a(()=>[e(j)?(p(),g(s,{key:0,style:{display:"none"}},{default:a(()=>[t(r,{value:e(l).originalId,"onUpdate:value":o[0]||(o[0]=n=>e(l).originalId=n)},null,8,["value"])]),_:1})):b("",!0),t(s,{label:"上级菜单"},{default:a(()=>[t(K,{value:e(l).parentId,"onUpdate:value":o[1]||(o[1]=n=>e(l).parentId=n),placeholder:"父菜单","dropdown-style":{maxHeight:"350px",overflow:"auto"},"tree-data":R,"tree-default-expanded-keys":[0],"field-names":{value:"id"}},{title:a(n=>[ke("span",null," 【"+F(n.title)+"】"+F(n.id),1)]),_:1},8,["value"])]),_:1}),t(s,{label:"菜单类型"},{default:a(()=>[t(Q,{value:e(l).type,"onUpdate:value":o[2]||(o[2]=n=>e(l).type=n),class:"menu-type","dict-code":"menu_type"},null,8,["value"])]),_:1}),t(X,{gutter:16},{default:a(()=>[t(v,{xs:24,sm:24,md:12},{default:a(()=>[t(s,U({"label-col":d,"wrapper-col":_},e(f).id),{label:a(()=>[i(" 菜单ID "),t(J,{title:`菜单ID的长度固定为 6，由三部分构成。前两位是目录序号，中间两位是菜单序号，最后两位是按钮序号。\r
                例如目录的ID结构应为：XX0000，菜单结构为 XXXX00，按钮ID结构为 XXXXXX`},{default:a(()=>[t(G)]),_:1})]),default:a(()=>[t(r,{value:e(l).id,"onUpdate:value":o[3]||(o[3]=n=>e(l).id=n),placeholder:"请输入"},null,8,["value"])]),_:1},16)]),_:1}),t(v,{xs:24,sm:24,md:12},{default:a(()=>[t(s,U({label:"显示排序","label-col":d,"wrapper-col":_},e(f).sort),{default:a(()=>[t(Z,{value:e(l).sort,"onUpdate:value":o[4]||(o[4]=n=>e(l).sort=n),placeholder:"排序值(升序)",style:{width:"100%"}},null,8,["value"])]),_:1},16)]),_:1})]),_:1}),t(s,U({label:"菜单名称"},e(f).title),{default:a(()=>[t(r,{value:e(l).title,"onUpdate:value":o[5]||(o[5]=n=>e(l).title=n),placeholder:"请输入",style:{width:"65%"}},null,8,["value"])]),_:1},16),e(I)?b("",!0):(p(),g(X,{key:1,gutter:16},{default:a(()=>[t(v,{xs:24,sm:24,md:12},{default:a(()=>[t(s,{label:"菜单图标","label-col":d,"wrapper-col":_},{default:a(()=>[t(r,{value:e(l).icon,"onUpdate:value":o[6]||(o[6]=n=>e(l).icon=n),placeholder:"请选择"},{prefix:a(()=>[e(l).icon?(p(),g(e(be),{key:0,type:e(l).icon},null,8,["type"])):b("",!0)]),addonAfter:a(()=>[t(ee)]),_:1},8,["value"])]),_:1})]),_:1}),t(v,{xs:24,sm:24,md:12},{default:a(()=>[t(s,U({label:"路由地址","label-col":d,"wrapper-col":_},e(f).path),{default:a(()=>[t(r,{value:e(l).path,"onUpdate:value":o[7]||(o[7]=n=>e(l).path=n),placeholder:"请输入"},null,8,["value"])]),_:1},16)]),_:1})]),_:1})),e(M)?(p(),Te(Re,{key:2},[t(X,{gutter:16},{default:a(()=>[t(v,{xs:24,sm:24,md:12},{default:a(()=>[t(s,{label:"打开方式","label-col":d,"wrapper-col":_},{default:a(()=>[t(te,{value:e(l).targetType,"onUpdate:value":o[8]||(o[8]=n=>e(l).targetType=n)},{default:a(()=>[t(w,{value:1},{default:a(()=>[i(" 内部组件 ")]),_:1}),t(w,{value:2},{default:a(()=>[i(" 内嵌页面 ")]),_:1}),t(w,{value:3},{default:a(()=>[i(" 外部链接 ")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),t(v,{xs:24,sm:24,md:12},{default:a(()=>[t(s,{label:"组件缓存","label-col":d,"wrapper-col":_},{default:a(()=>[t(D,{value:e(l).keepAlive,"onUpdate:value":o[9]||(o[9]=n=>e(l).keepAlive=n)},{default:a(()=>[t(x,{value:1},{default:a(()=>[i(" 开启 ")]),_:1}),t(x,{value:0},{default:a(()=>[i(" 关闭 ")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),t(s,U({label:"资源路径"},e(f).uri),{default:a(()=>[t(r,{value:e(l).uri,"onUpdate:value":o[10]||(o[10]=n=>e(l).uri=n),placeholder:"请输入"},null,8,["value"])]),_:1},16)],64)):b("",!0),e(I)?b("",!0):(p(),g(s,{key:3,label:"是否可见"},{default:a(()=>[t(D,{value:e(l).hidden,"onUpdate:value":o[11]||(o[11]=n=>e(l).hidden=n)},{default:a(()=>[t(x,{value:0},{default:a(()=>[i(" 显示 ")]),_:1}),t(x,{value:1},{default:a(()=>[i(" 隐藏 ")]),_:1})]),_:1},8,["value"])]),_:1})),e(I)?(p(),g(s,U({key:4,label:"授权标识"},e(f).permission),{default:a(()=>[t(r,{value:e(l).permission,"onUpdate:value":o[12]||(o[12]=n=>e(l).permission=n),placeholder:"请输入"},null,8,["value"])]),_:1},16)):b("",!0),t(s,{label:"备注信息"},{default:a(()=>[t(le,{value:e(l).remarks,"onUpdate:value":o[13]||(o[13]=n=>e(l).remarks=n),placeholder:"最多输入 200 个字符","auto-size":{minRows:3,maxRows:6}},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","visible","confirm-loading"])}}});export{it as _};