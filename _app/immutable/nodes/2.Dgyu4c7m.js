import{a as h,t as g}from"../chunks/disclose-version.DqaEW6ob.js";import{p as u,s as o,f as b,t as k,a as d,c as _,r as W,b as S,g as i,m as x}from"../chunks/runtime.C9m5j9Mn.js";import{e as n,s as R}from"../chunks/render.Cm4C8Kpz.js";import{i as C}from"../chunks/lifecycle.CnzNC4is.js";var Q=g("<h1>Welcome to SvelteKit</h1> <h1> </h1> <button>Increment</button> <button>Check Service Worker</button>",1);function N(c,l){u(l,!1);let e=x(0);function m(){S(e,i(e)+1)}function f(){navigator.serviceWorker.getRegistration().then(s=>{s?(console.log("Service Worker is registered"),s.showNotification("QRアラーム",{body:"起床時間です！QRコードをスキャンしてアラームを停止してください。"})):console.log("Service Worker is not registered")})}C();var a=Q(),t=o(b(a),2),p=_(t);W(t);var r=o(t,2),v=o(r,2);k(()=>R(p,`a is ${i(e)??""}`)),n("click",r,m),n("click",v,f),h(c,a),d()}export{N as component};
