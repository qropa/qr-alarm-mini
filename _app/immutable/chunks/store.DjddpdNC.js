import{n as i,h as c,o,q as f,g as a,b as l}from"./runtime.C9m5j9Mn.js";function d(u,e,n){if(u==null)return e(void 0),i;const s=c(()=>u.subscribe(e,n));return s.unsubscribe?()=>s.unsubscribe():s}let r=!1;function p(u,e,n){const s=n[e]??(n[e]={store:null,source:f(void 0),unsubscribe:i});if(s.store!==u)if(s.unsubscribe(),s.store=u??null,u==null)s.source.v=void 0,s.unsubscribe=i;else{var t=!0;s.unsubscribe=d(u,b=>{t?s.source.v=b:l(s.source,b)}),t=!1}return a(s.source)}function _(){const u={};return o(()=>{for(var e in u)u[e].unsubscribe()}),u}function v(u){var e=r;try{return r=!1,[u(),r]}finally{r=e}}export{p as a,v as c,_ as s};
