if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
    }, function(err) {
      // registration failed
    });
  });
}

window.addEventListener('beforeinstallprompt', function(event) { 
  event.preventDefault();
});