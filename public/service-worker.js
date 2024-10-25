const CACHE_NAME = "qr-alarm-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/static/js/bundle.js",
  // 必要に応じて他のリソースを追加
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("キャッシュに追加:", cache);
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Workerがアクティベートされました");
  return self.clients.claim();
});

// プッシュ通知を受信した際の処理
self.addEventListener("push", (event) => {
  const options = {
    body: "起床時間です！QRコードをスキャンしてアラームを停止してください。",
    icon: "/icons/icon-192x192.png", // 適宜アイコンを設定
    badge: "/icons/badge-72x72.png", // 適宜バッジを設定
  };
  event.waitUntil(self.registration.showNotification("QRアラーム", options));
});
