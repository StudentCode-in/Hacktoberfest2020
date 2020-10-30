// register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register("/sw.js").then(() => {
      console.log("SW registerd")
      navigator.serviceWorker.ready.then((registration) => {
        subscribe(registration)
      })
    }).catch((err) => {
      console.log(err)
    })
  })
}

if ("Notification" in window) {
  Notification.requestPermission().then(function (result) {
    if (result === "denied") {
      return;
    } else if (result === "default") {
      return;
    }
    console.log("notification diijinkan");
  });
} else {
  console.log("notification tidak didukung")
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function subscribe(registration) {
  if (('PushManager' in window)) {
    registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array("BBP-gHsKkmobWSH6cMCopjkN8JvMT20ALZJG6NCajmtAJrDBGS2kMNmkMYhyNmxnpTH3lh3TIDMG7dUro5Zru3g")
    }).then((subscribe) => {
      console.log('endpoint: ', subscribe.endpoint);
      console.log('p256dh key: ', btoa(String.fromCharCode.apply(
        null, new Uint8Array(subscribe.getKey('p256dh')))));
      console.log('auth key: ', btoa(String.fromCharCode.apply(
        null, new Uint8Array(subscribe.getKey('auth')))));
    }).catch((e) => console.error(e));
  }
}