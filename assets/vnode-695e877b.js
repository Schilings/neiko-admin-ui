import{G as o,_ as u,Q as g,e as m}from"./useConfigInject-4e7e38f3.js";import{ai as i}from"./runtime-core.esm-bundler-e620233b.js";function l(e,r){return function(n){return e(r(n))}}function f(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,s=e;if(Array.isArray(e)&&(s=o(e)[0]),!s)return null;var t=i(s,r,a);return t.props=n?u(u({},t.props),r):t.props,g(m(t.props.class)!=="object","class must be string"),t}function c(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return e.map(function(a){return f(a,r,n)})}export{c as a,f as c,l as o};