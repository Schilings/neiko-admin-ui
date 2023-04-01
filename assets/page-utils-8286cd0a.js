const g=(c,s,n)=>{const a=[];for(const e in s)a.push(s[e]==="ascend"?`${e},asc`:`${e},desc`);const{pageSize:r,current:t,...o}=c;return{size:r,page:t,...o,...n,sort:a}};export{g as m};
