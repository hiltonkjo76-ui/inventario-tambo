self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  // Service worker vacio: solo existe para que Chrome/Android reconozca
  // la pagina como una PWA instalable y use el icono real del manifest
  // al "Agregar a pantalla de inicio" (en vez del icono generico).
});
