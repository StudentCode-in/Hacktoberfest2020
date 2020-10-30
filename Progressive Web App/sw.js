self.addEventListener('push', function (event) {
  let body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Tidak ada Pesan';
  }
  var options = {
    body: body,
    icon: 'img/icons/icon.png',
  }
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox)
  console.log(`Workbox berhasil dimuat`);

workbox.precaching.precacheAndRoute([{
    url: "home.html",
    revision: '1'
  },
  {
    url: "/manifest.json",
    revision: '1'
  },
  {
    url: "/favicon.ico",
    revision: '1'
  },
  {
    url: "/css/materialize.min.css",
    revision: '1'
  },
  {
    url: "/components/ComponentProvider.js",
    revision: '1'
  },
  {
    url: "/components/Favorites.js",
    revision: '2'
  },
  {
    url: "/components/Head.js",
    revision: '2'
  },
  {
    url: "/components/Score.js",
    revision: '2'
  },
  {
    url: "/components/Teams.js",
    revision: '2'
  },
  {
    url: "/index.html",
    revision: '1'
  },
  {
    url: "/js/nav.js",
    revision: '3'
  },
  {
    url: "/js/api.js",
    revision: '3'
  },
  {
    url: "/js/db.js",
    revision: '4'
  },
  {
    url: "/js/main.js",
    revision: '4'
  },
  {
    url: "/js/materialize.min.js",
    revision: '1'
  },
  {
    url: "/js/idb.js",
    revision: '2'
  },
], {
  ignoreUrlParametersMatching: [/.*/]
});

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('/pages/'),
  workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
  new RegExp('https://api.football-data.org/v2/'),
  workbox.strategies.networkFirst({
    cacheName: 'api'
  })
);