/* empty css                *//* empty css              */import{B as V}from"./index-cf5fb184.js";import{_ as q}from"./index-4948e659.js";import{D as G}from"./index-4e866bcb.js";import{_ as j}from"./DictTag-32f88914.js";import{P as z}from"./Table-804cc6fe.js";import{m as H}from"./page-utils-8286cd0a.js";import{p as J,r as K}from"./index-2012180d.js";import{u as L}from"./permission-a42399ff.js";import{_ as O}from"./SysRolePageSearch.vue_vue_type_script_setup_true_lang-1005f16e.js";import{_ as Q}from"./SysRoleFormModal.vue_vue_type_script_setup_true_lang-a5d9130e.js";import{_ as W}from"./SysRoleGrantDrawer.vue_vue_type_script_setup_true_lang-4ac621f3.js";import{_ as X}from"./SysRoleUserModal.vue_vue_type_script_setup_true_lang-38120ed6.js";import{F as b}from"./form-d9144801.js";import{d as Y}from"./request-b908f567.js";import{d as Z,R as s,o as e,a6 as a,a as o,u as R,w as n,a1 as l,c as k,a5 as c,F as P,ad as B,a7 as tt,aj as ot}from"./runtime-core.esm-bundler-e620233b.js";import{_ as et}from"./PlusOutlined-6c7b8f6a.js";import"./useConfigInject-4e7e38f3.js";import"./AntdIcon-50c809c3.js";import"./wave-9bd9da2d.js";import"./index-78dc20df.js";import"./useMergedState-49e4ba80.js";import"./KeyCode-e7009ae3.js";import"./isEqual-0db96e75.js";import"./isObject-df4d31a6.js";import"./vnode-695e877b.js";import"./index-86e42ee6.js";import"./index-b25e5e27.js";import"./styleChecker-cd40cf0f.js";import"./index-d8cf9b9f.js";import"./vue-router-ecc405fe.js";import"./_commonjsHelpers-c45321e7.js";import"./constants-2bea6948.js";import"./index-4b83e0fe.js";import"./pickAttrs-a6ea96de.js";/* empty css              */import"./useDict-c41ad46e.js";import"./dict-store-bf3c0a09.js";import"./index-f15f5a85.js";import"./types-d2ada5d8.js";import"./index-a8a83b8b.js";/* empty css                                                                */import"./_plugin-vue_export-helper-c27b6911.js";import"./index-5a8c2e19.js";import"./index-c9d35858.js";import"./index-51c9200e.js";import"./debounce-ec6630b4.js";import"./isMobile-8885869a.js";import"./collapseMotion-49c35061.js";import"./useState-6ab94c07.js";import"./VerticalAlignMiddleOutlined-1fbd9b6a.js";import"./index-fd0b6746.js";import"./iconUtil-13917c84.js";import"./toArray-03f06280.js";import"./FormItemContext-d1513cce.js";import"./List-f67cc211.js";import"./DownOutlined-1df0e7ad.js";import"./SearchOutlined-2febc2d4.js";import"./useMemo-4a215623.js";import"./index-64985671.js";import"./zh_CN-1ca40490.js";import"./index-a6c0766c.js";import"./RouteContext-d0ba1c8a.js";import"./index-da51896f.js";/* empty css              */import"./index-daa4fc82.js";import"./iconUtil-00aaf9c6.js";import"./CaretDownFilled-5dd372a5.js";import"./FolderOutlined-b28123ef.js";import"./index-54e1cd75.js";import"./index-d551a8fd.js";import"./Checkbox-e087e583.js";import"./index-6d8533be.js";import"./index-e1aeaf6d.js";import"./index-4f3b583f.js";import"./TextArea-c870182f.js";import"./index-af58b3ad.js";import"./Spin-99a3053a.js";import"./index-2ae081eb.js";import"./RadioButton-65a1cb88.js";import"./index-bd4b6c28.js";import"./Search-cfb19401.js";import"./Password-b11b167b.js";import"./EyeInvisibleOutlined-44fbb38d.js";import"./array-utils-d1025e0b.js";import"./index-dd4d7eb0.js";import"./index-38730972.js";import"./SearchActions.vue_vue_type_script_setup_true_lang-29f17459.js";import"./UpOutlined-2842b6e3.js";/* empty css              *//* empty css              */import"./DictRadioGroup.vue_vue_type_script_setup_true_lang-1f34ae93.js";/* empty css              */import"./SysOrganizationTreeSelect.vue_vue_type_script_setup_true_lang-e554d1d9.js";import"./index-d825368e.js";import"./index-8c05ae55.js";import"./modal-94b635e5.js";import"./bean-utils-948c4eb4.js";import"./index-67c01fa1.js";/* empty css              */import"./SysRoleUserSearch.vue_vue_type_script_setup_true_lang-e3a6633f.js";import"./index-5d5b84ea.js";const rt=["onClick"],it=["onClick"],mt=["onClick"],at=tt("a",{href:"javascript:",class:"ballcat-text-danger"},"删除",-1),pt={name:"SysRolePage"},me=Z({...pt,setup(st){const{hasPermission:T}=L(),_=s(),d=s(),v=s(),g=s();let C={};const $=(t,i,r)=>{const f=H(t,i,r);return J({...f,...C})},u=t=>{var i,r;(r=(i=_.value)==null?void 0:i.actionRef)==null||r.reload(t)},D=t=>{C=t,u(!0)},F=()=>{d.value.open(b.CREATE)},I=t=>{d.value.open(b.UPDATE,t)},M=t=>{Y(K(t.id),{successMessage:"删除成功！",onSuccess:()=>u()})},S=t=>{v.value.open(t)},A=t=>{g.value.open(t)},E=[{title:"角色名称",dataIndex:"name",sorter:!0,width:150,ellipsis:!0},{title:"角色标识",dataIndex:"code",sorter:!0,width:180,ellipsis:!0},{title:"类型",dataIndex:"type",sorter:!0,width:80},{title:"备注",dataIndex:"remarks",sorter:!0,width:150,ellipsis:!0},{title:"创建时间",dataIndex:"createTime",width:150,sorter:!0},{title:"更新时间",dataIndex:"updateTime",width:150,sorter:!0},{key:"operate",title:"操作",align:"center",width:180}];return(t,i)=>{var w;const r=et,f=V,N=j,y=G,U=q,p=ot("has");return e(),a(P,null,[o(O,{loading:(w=R(_))==null?void 0:w.loading,onSearch:D},null,8,["loading"]),o(R(z),{ref_key:"tableRef",ref:_,"header-title":"角色管理","row-key":"id",request:$,columns:E,scroll:{x:1100}},{toolBarRender:n(()=>[l((e(),k(f,{key:"show",type:"primary",onClick:F},{default:n(()=>[o(r),c(" 新建 ")]),_:1})),[[p,"system:role:add"]])]),bodyCell:n(({column:x,record:m})=>[x.key==="type"?(e(),k(N,{key:0,value:m.type,"dict-code":"role_type"},null,8,["value"])):x.key==="operate"?(e(),a(P,{key:1},[l((e(),a("a",{onClick:h=>I(m)},[c("修改")],8,rt)),[[p,"system:role:edit"]]),o(y,{type:"vertical"}),l((e(),a("a",{onClick:h=>S(m)},[c("授权")],8,it)),[[p,"system:role:grant"]]),o(y,{type:"vertical"}),l((e(),a("a",{onClick:h=>A(m)},[c("绑定")],8,mt)),[[p,"system:role:grant"]]),o(y,{type:"vertical"}),R(T)("system:role:del")?(e(),k(U,{key:0,title:"确认要删除吗？",onConfirm:h=>M(m)},{default:n(()=>[at]),_:2},1032,["onConfirm"])):B("",!0)],64)):B("",!0)]),_:1},512),o(Q,{ref_key:"sysRoleFormModalRef",ref:d,onSubmitSuccess:u},null,512),o(W,{ref_key:"sysRoleGrantDrawerRef",ref:v},null,512),o(X,{ref_key:"sysRoleUserModalRef",ref:g},null,512)],64)}}});export{me as default};