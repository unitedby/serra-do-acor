const popup = document.getElementById('popup-fichatecnica');
const openBtn = document.getElementById('fichatecnica-btn');
const closeBtn = document.getElementById('popup-fichatecnica-close');

// Abrir
openBtn.addEventListener('click', () => {
    popup.style.visibility = 'visible';
    popup.style.pointerEvents = 'auto';

    requestAnimationFrame(() => {
        popup.classList.add('visible');
    });
});

// Fechar
closeBtn.addEventListener('click', () => {
    popup.classList.remove('visible');
});

// Fechar ao clicar fora da caixa interna
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('visible');
    }
});

// Após a transição, esconder de verdade
popup.addEventListener('transitionend', () => {
    if (!popup.classList.contains('visible')) {
        popup.style.visibility = 'hidden';
        popup.style.pointerEvents = 'none';
    }
});
