import{S as t,i as n,s as o,z as s}from"../chunks/vendor-8d0236fa.js";import{r as e}from"../chunks/singletons-12a22614.js";import{b as i}from"../chunks/paths-45dac81d.js";const a=async function(t,n){return e.goto(t,n,[])};function c(t){var n=this&&this.__awaiter||function(t,n,o,s){return new(o||(o=Promise))((function(e,i){function a(t){try{r(s.next(t))}catch(n){i(n)}}function c(t){try{r(s.throw(t))}catch(n){i(n)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(t){t(n)}))).then(a,c)}r((s=s.apply(t,n||[])).next())}))};return s((()=>n(void 0,void 0,void 0,(function*(){const t=window.location.hash.split("/");let n="edit";t.length>2&&(n=`${t[1]}#${t[2]}`),yield a(`${i}/${n}`,{replaceState:!0})})))),[]}export default class extends t{constructor(t){super(),n(this,t,c,null,o,{})}}
