// このファイルはCRA（Create React App）で提供されるデフォルトのserviceWorkerRegistration.jsを使用します。
// 必要に応じてカスタマイズしてください。

// 以下は基本的な登録スクリプトです。

export function register() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker登録成功:", registration);
        })
        .catch((registrationError) => {
          console.log("Service Worker登録失敗:", registrationError);
        });
    });
  }
}
