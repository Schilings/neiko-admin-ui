function r(e,n){return n?e?e.includes(n):!1:!0}function u(e,n){if(!n)return!0;if(!e)return!1;if(Array.isArray(n)){for(const t of n)if(r(e,t))return!0}else return r(e,n)}function f(e){return e?e.length===0:!1}export{u as a,r as h,f as i};