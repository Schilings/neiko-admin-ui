import{b as r,u as e}from"./vue-router-ecc405fe.js";import{u as s}from"./index-d8cf9b9f.js";import{L as u}from"./constants-2bea6948.js";import{d as n,o as p,a6 as i}from"./runtime-core.esm-bundler-e620233b.js";import"./_commonjsHelpers-c45321e7.js";import"./index-4b83e0fe.js";import"./index-cf5fb184.js";import"./useConfigInject-4e7e38f3.js";import"./AntdIcon-50c809c3.js";import"./wave-9bd9da2d.js";import"./KeyCode-e7009ae3.js";import"./styleChecker-cd40cf0f.js";import"./pickAttrs-a6ea96de.js";import"./index-b25e5e27.js";const m={name:"Oauth2Authorize"},b=n({...m,setup(a){const o=r().query.return_to,t=s().accessToken;return t?o?window.location.href=o+"&access_token="+t:e().push("/"):e().push({path:u,query:o?{return_to:o}:{}}),(f,l)=>(p(),i("div"))}});export{b as default};
