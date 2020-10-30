var webPush = require('web-push');

const vapidKeys = {
  "publicKey": "BBP-gHsKkmobWSH6cMCopjkN8JvMT20ALZJG6NCajmtAJrDBGS2kMNmkMYhyNmxnpTH3lh3TIDMG7dUro5Zru3g",
  "privateKey": "0KnKjLsKq7appjsOpQvdwyI5lhW9ptQA2SCFNmHzA9o"
};
webPush.setVapidDetails(
  'mailto:aqmal@dicoding.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)
var pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/cY1ZapsObjM:APA91bHR0P0lyKRwB4R9aXr1FBF-1kHqipGSdHpiz0ukpH36zBtC3K4S3nrgEuuQtMZRMNxZnJB5UxmcdG4hroAmOxUZ9fPF9nPFbTugDcRtkQjByfgJ5jQFcqdmJcAvlaqjAPxna_mt",
  "keys": {
    "p256dh": "BLLKUHwthZK5ZPhLRQsPwqN1AEK3Uf6XYu32z4HWpJBwuuXUH6qP9LaV60sohiuF6FwwYsTnzk7aLMRW9LT1zTU=",
    "auth": "9jDHO9899BfcUiV8/vmVkA=="
  }
};
var payload = 'Selamat!, ini notifikasi';

const options = {
  gcmAPIKey: '1042093515568',
  TTL: 60,
  vapidDetails: {
    subject: 'mailto:aqmal@dicoding.com',
    publicKey: vapidKeys.publicKey,
    privateKey: vapidKeys.privateKey
  }
}

webPush.sendNotification(
  pushSubscription,
  payload,
  options
).catch(err => console.log(err));