/* empty css                *//* empty css              */import"./index-cf5fb184.js";import{_ as R}from"./index-4948e659.js";import{D as T}from"./index-4e866bcb.js";import{P as A}from"./Table-804cc6fe.js";import{m as B}from"./page-utils-8286cd0a.js";import{u as N}from"./permission-a42399ff.js";import{h as x}from"./index-d8cf9b9f.js";import"./form-d9144801.js";import{d as q}from"./request-b908f567.js";import{_ as D}from"./AuthorizationConsentPageSearch.vue_vue_type_script_setup_true_lang-ea9b0212.js";import{d as S,R as V,o as r,a6 as a,a as s,u as l,w as m,F as u,c as k,ak as F,a7 as c,ac as $,ad as v}from"./runtime-core.esm-bundler-e620233b.js";import{_ as j}from"./index-54e1cd75.js";import"./useConfigInject-4e7e38f3.js";import"./AntdIcon-50c809c3.js";import"./wave-9bd9da2d.js";import"./index-78dc20df.js";import"./useMergedState-49e4ba80.js";import"./KeyCode-e7009ae3.js";import"./isEqual-0db96e75.js";import"./isObject-df4d31a6.js";import"./vnode-695e877b.js";import"./index-86e42ee6.js";import"./index-b25e5e27.js";import"./styleChecker-cd40cf0f.js";import"./index-5a8c2e19.js";import"./index-c9d35858.js";import"./index-51c9200e.js";import"./debounce-ec6630b4.js";import"./isMobile-8885869a.js";import"./PlusOutlined-6c7b8f6a.js";import"./collapseMotion-49c35061.js";import"./useState-6ab94c07.js";import"./VerticalAlignMiddleOutlined-1fbd9b6a.js";import"./index-fd0b6746.js";import"./iconUtil-13917c84.js";import"./toArray-03f06280.js";import"./FormItemContext-d1513cce.js";import"./pickAttrs-a6ea96de.js";import"./List-f67cc211.js";import"./DownOutlined-1df0e7ad.js";import"./SearchOutlined-2febc2d4.js";import"./useMemo-4a215623.js";import"./index-64985671.js";import"./zh_CN-1ca40490.js";import"./index-a6c0766c.js";import"./RouteContext-d0ba1c8a.js";import"./index-4b83e0fe.js";import"./index-da51896f.js";/* empty css              */import"./index-daa4fc82.js";import"./iconUtil-00aaf9c6.js";import"./CaretDownFilled-5dd372a5.js";import"./FolderOutlined-b28123ef.js";import"./index-d551a8fd.js";import"./Checkbox-e087e583.js";import"./index-6d8533be.js";import"./index-e1aeaf6d.js";import"./index-4f3b583f.js";import"./TextArea-c870182f.js";import"./index-af58b3ad.js";import"./Spin-99a3053a.js";import"./index-2ae081eb.js";import"./RadioButton-65a1cb88.js";import"./index-bd4b6c28.js";import"./Search-cfb19401.js";import"./Password-b11b167b.js";import"./EyeInvisibleOutlined-44fbb38d.js";import"./array-utils-d1025e0b.js";import"./vue-router-ecc405fe.js";import"./_commonjsHelpers-c45321e7.js";import"./constants-2bea6948.js";import"./index-dd4d7eb0.js";import"./index-38730972.js";import"./SearchActions.vue_vue_type_script_setup_true_lang-29f17459.js";import"./UpOutlined-2842b6e3.js";import"./index-584fda6a.js";import"./dayjs.min-eeabd586.js";import"./index-a8a83b8b.js";import"./SwapRightOutlined-01ac0855.js";/* empty css              */import"./dayjs-5cb6792f.js";function E(i){return x.get("/authorization/authorizationConsent/authorizationConsentPage",{params:i})}function L(i){return x.delete("/authorization/authorizationConsent/"+i)}const M=c("a",null,"查看",-1),G=c("a",{href:"javascript:",class:"ballcat-text-danger"},"删除",-1),H={name:"AuthorizationConsentPage"},zo=S({...H,setup(i){const{hasPermission:z}=N(),p=V();let d={};const y=(t,e,o)=>{const n=B(t,e,o);return E({...n,...d})},_=t=>{var e,o;(o=(e=p.value)==null?void 0:e.actionRef)==null||o.reload(t)},P=t=>{d=t,_(!0)},b=t=>{q(L(t.id),{successMessage:"删除成功！",onSuccess:()=>_()})},w=[{title:"客户端Id",dataIndex:"registeredClientId",sorter:!0,width:150,ellipsis:!0},{title:"主体",dataIndex:"principalName",sorter:!0,width:180,ellipsis:!0},{title:"权限",dataIndex:"authorities",sorter:!0,width:80},{title:"创建时间",dataIndex:"createTime",width:150,sorter:!0},{title:"更新时间",dataIndex:"updateTime",width:150,sorter:!0}];return(t,e)=>{var h;const o=j,n=T,I=R;return r(),a(u,null,[s(D,{loading:(h=l(p))==null?void 0:h.loading,onSearch:P},null,8,["loading"]),s(l(A),{ref_key:"tableRef",ref:p,"header-title":"授权同意记录","row-key":"id",request:y,columns:w,scroll:{x:1100}},{bodyCell:m(({column:f,record:g})=>[f.key==="authorities"?(r(),k(o,{key:0,trigger:"hover"},{content:m(()=>[(r(!0),a(u,null,F(g.authorities,(C,J)=>(r(),a("div",null,[c("p",null,$(C),1)]))),256))]),default:m(()=>[M]),_:2},1024)):f.key==="operate"?(r(),a(u,{key:1},[s(n,{type:"vertical"}),l(z)("authorization:authorizationConsent:del")?(r(),k(I,{key:0,title:"确认要删除吗？",onConfirm:C=>b(g)},{default:m(()=>[G]),_:2},1032,["onConfirm"])):v("",!0)],64)):v("",!0)]),_:1},512)],64)}}});export{zo as default};
