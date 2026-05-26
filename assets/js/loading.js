(function () {
    const screen = document.getElementById('loading-screen');
    const fill   = document.getElementById('loading-bar-fill');
    const label  = document.getElementById('loading-text');

const sources = Array.from(
    document.querySelectorAll('link[rel="preload"][as="image"]')
).map(link => link.href);


    const imgs = sources.map(src => {
        const img = new Image();
        img.src = src;
        return img;
    });

    if (imgs.every(img => img.complete && img.naturalWidth > 0)) {
        screen.remove();
        return;
    }

    let loaded = 0;

    function onLoad() {
        loaded++;
        const pct = Math.round((loaded / sources.length) * 100);
        fill.style.width = pct + '%';
        label.textContent = 'A carregar... ' + pct + '%';
        if (loaded === sources.length) finish();
    }

    function finish() {
        setTimeout(() => {
            screen.classList.add('fade-out');
            setTimeout(() => screen.remove(), 650);
        }, 200);
    }

    imgs.forEach(img => {
        if (img.complete) {
            onLoad();
        } else {
            img.onload  = onLoad;
            img.onerror = onLoad;
        }
    });
})();