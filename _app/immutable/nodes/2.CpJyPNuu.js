import{a as C,t as G}from"../chunks/disclose-version.B3b0YnCN.js";import{v as y,Z as K,_ as O,$ as U,a0 as Y,p as j,j as c,h as q,t as V,i as W,g as l,Y as b,k as Z,l as z,a1 as T}from"../chunks/runtime.DEK_1SnM.js";import{s as F,e as k,a as J,b as Q}from"../chunks/store.2BMIJ2G_.js";import{i as X}from"../chunks/lifecycle.D_hHb3C2.js";import{o as ee}from"../chunks/index-client.K_nDozx7.js";import{w as te}from"../chunks/index.DgYvWGhN.js";let L=!1;function M(){L||(L=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const s of e.target.elements)(t=s.__on_r)==null||t.call(s)})},{capture:!0}))}function re(e){if(y){var t=!1,s=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var n=e.value;D(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var r=e.checked;D(e,"checked",null),e.checked=r}}};e.__on_r=s,K(s),M()}}function D(e,t,s,n){var r=e.__attributes??(e.__attributes={});y&&(r[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||r[t]!==(r[t]=s)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[O]=s),e.removeAttribute(t))}function se(e,t,s,n=s){e.addEventListener(t,s);const r=e.__on_r;r?e.__on_r=()=>{r(),n()}:e.__on_r=n,M()}function ae(e,t,s=t){var n=U();se(e,"input",()=>{var r=H(e)?P(e.value):e.value;s(r),n&&r!==(r=t())&&(e.value=r??"")}),Y(()=>{var r=t();if(y&&e.defaultValue!==e.value){s(e.value);return}H(e)&&r===P(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function H(e){var t=e.type;return t==="number"||t==="range"}function P(e){return e===""?null:+e}const ne=""+new URL("../assets/umineko.DH4kiles.mp3",import.meta.url).href,oe=""+new URL("../assets/muon.BINCiEG0.m4a",import.meta.url).href;var ie=G('<h1>Welcome to SvelteKit</h1> <h1> </h1> <button>Increment</button> <input type="time" placeholder="Start Time (HH:MM)"> <button>Stop</button> <button>Play</button>',1);function me(e,t){j(t,!1);const s=F(),n=()=>Q(f,"$isPlaying",s);let r=T(0);function N(){b(r,l(r)+1)}let i=T(""),g=null,a;const f=te(!1),_=()=>{f.set(!0),a=new Audio(oe),a.play(),a.onended=()=>{a.currentTime=0},g=setInterval(()=>{a!==null&&(S()&&(a.pause(),a.currentTime=0,a=new Audio(ne)),a.play(),a.onended=()=>{a.currentTime=0})},3e4)},w=()=>{f.set(!1),clearInterval(g),a&&(a.pause(),a.currentTime=0,a=null),b(i,"")};function S(){const o=new Date,[p,h]=l(i).split(":").map(Number),u=new Date;return u.setHours(p,h,0,0),o>=u}const $=()=>{const o=new Date,[p,h]=l(i).split(":").map(Number),u=new Date;if(u.setHours(p,h,0,0),o>=u)_();else{const B=u-o;setTimeout(_,B)}};ee(()=>{const o=setInterval(()=>{l(i)&&$()},6e3);return()=>{clearInterval(o),w()}});const x=()=>{_()};X();var A=ie(),v=c(q(A),2),E=Z(v);z(v);var I=c(v,2),m=c(I,2);re(m);var d=c(m,2),R=c(d,2);V(()=>{J(E,`a is ${l(r)??""}`),d.disabled=n()===!1}),k("click",I,N),ae(m,()=>l(i),o=>b(i,o)),k("click",d,w),k("click",R,x),C(e,A),W()}export{me as component};
