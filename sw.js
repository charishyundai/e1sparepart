// Small helper that lets phones install E1 Sparepart Control as an app.
// It does not store any data; everything still comes from the Google app.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
