import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [permission, setPermission] = useState(Notification.permission);

  useEffect(() => {
    // 通知の許可をリクエスト
    if (permission === "default") {
      Notification.requestPermission().then((perm) => {
        setPermission(perm);
      });
    }
  }, [permission]);

  useEffect(() => {
    let intervalId: any;

    if (permission === "granted") {
      // 1分ごとに通知を送信
      intervalId = setInterval(() => {
        navigator.serviceWorker.getRegistration().then((registration) => {
          if (registration) {
            registration.showNotification("QRアラーム", {
              body: "起床時間です！QRコードをスキャンしてアラームを停止してください。",
              icon: "/icons/icon-192x192.png", // 適宜アイコンを設定
              badge: "/icons/badge-72x72.png", // 適宜バッジを設定
            });
            console.log("通知を送信しました");
          } else {
            console.error("Service Workerが登録されていません");
          }
        });
      }, 6000); // 60000ミリ秒 = 1分
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [permission]);

  return (
    <div className="App">
      <h1>QRアラームアプリ</h1>
      <p>通知の許可状況: {permission}</p>
    </div>
  );
}

export default App;
