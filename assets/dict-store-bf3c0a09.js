import{d as n}from"./constants-2bea6948.js";import{g as f,i as h}from"./index-f15f5a85.js";import{c as o}from"./index-d8cf9b9f.js";import{u as l}from"./index-4b83e0fe.js";function c(t){return o(`dict:${t}`)}const D=o("dict-hash"),g=n("dictStore",{state:()=>({dictDataCache:{},dictRequestLocks:{},dictHash:l(D,{},{writeDefaults:!1})}),actions:{async getDictData(t){if(!t)return;const{dictDataCache:e,dictRequestLocks:s}=this;let a=e[t];if(a)return a;const i=localStorage.getItem(c(t));if(i&&(a=JSON.parse(i),e[t]=a),a)return a;if(!s[t]){s[t]=!0;try{const r=await f([t]);Array.isArray(r.data)&&r.data.length>0&&(a=r.data[0],e[t]=a,localStorage.setItem(c(t),JSON.stringify(a)),this.dictHash[t]=a.hashCode)}finally{s[t]=!1}}return a},async getDictDataItems(t){const e=await this.getDictData(t);return(e==null?void 0:e.dictItems)||[]},async checkDictData(){const{dictDataCache:t,dictHash:e}=this;if(e&&Object.getOwnPropertyNames(e).length>0){const s=await h(e);if(s.code===200&&s.data)for(const a of s.data)delete e[a],localStorage.removeItem(c(a)),delete t[a]}}}});g().checkDictData();export{g as u};