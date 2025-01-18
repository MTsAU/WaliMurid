self.addEventListener('install', (event) => {
  console.log('Service worker dipasang');
});

self.addEventListener('activate', (event) => {
  console.log('Service worker aktif');
});
