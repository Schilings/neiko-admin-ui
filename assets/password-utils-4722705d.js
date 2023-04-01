import{C as t}from"./index-7ca0d04e.js";const o="==BallCat-Auth==",s=e=>{const r=t.enc.Utf8.parse(o);return t.AES.encrypt(e,r,{iv:r,mode:t.mode.CBC,padding:t.pad.Pkcs7}).toString()};export{s as p};
