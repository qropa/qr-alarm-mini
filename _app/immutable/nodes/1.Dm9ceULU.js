import{a as d,t as v}from"../chunks/disclose-version.BzDdf9_k.js";import{o as h,q as p,v as x,u as $,w as u,g as _,x as k,y,z as q,p as w,f as z,b as E,l as S,a as j,c as l,r as g}from"../chunks/runtime.DKxlQrj-.js";import{s as b}from"../chunks/render.DpJcmuaQ.js";import{s as A,a as B}from"../chunks/store.DF5yVhLK.js";import{s as C}from"../chunks/entry.BF4vR9Mv.js";function D(s=!1){const e=x,t=e.l.u;if(!t)return;let n=()=>y(e.s);if(s){let a=0,r={};const f=q(()=>{let i=!1;const c=e.s;for(const o in c)c[o]!==r[o]&&(r[o]=c[o],i=!0);return i&&a++,a});n=()=>_(f)}t.b.length&&h(()=>{m(e,n),u(t.b)}),p(()=>{const a=$(()=>t.m.map(k));return()=>{for(const r of a)typeof r=="function"&&r()}}),t.a.length&&p(()=>{m(e,n),u(t.a)})}function m(s,e){if(s.l.s)for(const t of s.l.s)_(t);e()}const F=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},G={subscribe(s){return F().page.subscribe(s)}};var H=v("<h1> </h1> <p> </p>",1);function N(s,e){w(e,!1);const t=A(),n=()=>B(G,"$page",t);D();var a=H(),r=z(a),f=l(r,!0);g(r);var i=j(r,2),c=l(i,!0);g(i),E(()=>{var o;b(f,n().status),b(c,(o=n().error)==null?void 0:o.message)}),d(s,a),S()}export{N as component};