const e=location.pathname.split("/").slice(0,-1).join("/"),l=[e+"/_app/immutable/entry/app.BGlMP674.js",e+"/_app/immutable/nodes/0.C17SCtF0.js",e+"/_app/immutable/nodes/1.XYTtwRfa.js",e+"/_app/immutable/nodes/2.Duf52vRb.js",e+"/_app/immutable/chunks/disclose-version.S3VD1cWG.js",e+"/_app/immutable/chunks/entry.DRJ5l8H6.js",e+"/_app/immutable/chunks/render.D1gSxqPL.js",e+"/_app/immutable/chunks/runtime.DTMe_Voh.js",e+"/_app/immutable/chunks/store.DT4w5LnU.js",e+"/_app/immutable/entry/start.B2OO_K80.js"],p=[e+"/favicon.png",e+"/icon-192x192.png",e+"/icon-512x512.png",e+"/manifest.json"],u="1729942000759",i=`cache-${u}`,o=[...l,...p];self.addEventListener("install",t=>{async function s(){await(await caches.open(i)).addAll(o)}t.waitUntil(s())});self.addEventListener("activate",t=>{async function s(){for(const a of await caches.keys())a!==i&&await caches.delete(a)}t.waitUntil(s())});self.addEventListener("fetch",t=>{if(t.request.method!=="GET")return;async function s(){const a=new URL(t.request.url),n=await caches.open(i);if(o.includes(a.pathname))return n.match(a.pathname);try{const c=await fetch(t.request);return c.status===200&&n.put(t.request,c.clone()),c}catch{return n.match(t.request)}}t.respondWith(s())});
