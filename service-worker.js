const e=location.pathname.split("/").slice(0,-1).join("/"),p=[e+"/_app/immutable/entry/app.Fli1EE6c.js",e+"/_app/immutable/nodes/0.SkczsOqg.js",e+"/_app/immutable/nodes/1.Dm9ceULU.js",e+"/_app/immutable/nodes/2._MzJtKGt.js",e+"/_app/immutable/assets/umineko.DH4kiles.mp3",e+"/_app/immutable/chunks/disclose-version.BzDdf9_k.js",e+"/_app/immutable/chunks/entry.BF4vR9Mv.js",e+"/_app/immutable/chunks/render.DpJcmuaQ.js",e+"/_app/immutable/chunks/runtime.DKxlQrj-.js",e+"/_app/immutable/chunks/store.DF5yVhLK.js",e+"/_app/immutable/entry/start.DF3enQme.js"],l=[e+"/favicon.png",e+"/icon-192x192.png",e+"/icon-512x512.png",e+"/manifest.json"],u="1730002594182",i=`cache-${u}`,o=[...p,...l];self.addEventListener("install",t=>{async function s(){await(await caches.open(i)).addAll(o)}t.waitUntil(s())});self.addEventListener("activate",t=>{async function s(){for(const a of await caches.keys())a!==i&&await caches.delete(a)}t.waitUntil(s())});self.addEventListener("fetch",t=>{if(t.request.method!=="GET")return;async function s(){const a=new URL(t.request.url),n=await caches.open(i);if(o.includes(a.pathname))return n.match(a.pathname);try{const c=await fetch(t.request);return c.status===200&&n.put(t.request,c.clone()),c}catch{return n.match(t.request)}}t.respondWith(s())});
