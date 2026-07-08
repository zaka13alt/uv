document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('url-input');

    input.addEventListener('keypress', async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            
            if (!__uv$config || !__uv$config.prefix || !__uv$config.encodeUrl) {
                console.error("Ultraviolet config is not loaded yet.");
                return;
            }

            const url = search(input.value.trim(), 'https://google.com');
            
            // Navigate to the proxied URL using window.__uv$config
            window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
        }
    });
});
