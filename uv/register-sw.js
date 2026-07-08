if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        console.log('Ultraviolet Service Worker registered');
    }).catch((err) => {
        console.error('Service Worker registration failed:', err);
    });
}
