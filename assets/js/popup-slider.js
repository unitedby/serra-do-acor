document.querySelectorAll('.popup-image.slider').forEach(slider => {
    const slides = slider.querySelectorAll('.slides .slide');
    const dots = slider.querySelectorAll('.popup-image-dots .dot');

    // FIX: your popup wrapper uses class="popup", not "popup-container"
    const popup = slider.closest('.popup');

    let currentIndex = 0;
    let intervalId = null;

    function showSlide(index) {
        slides.forEach(img => img.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function startSlider() {
        stopSlider();
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 4000);
    }

    function stopSlider() {
        if (intervalId) clearInterval(intervalId);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(index);
            startSlider();
        });
    });

    // 🔥 Detect popup open/close
    const observer = new MutationObserver(() => {
        const isOpen = popup.classList.contains('active');

        if (isOpen) {
            currentIndex = 0;
            showSlide(0);
            startSlider();
        } else {
            stopSlider();
        }
    });

    observer.observe(popup, { attributes: true, attributeFilter: ['class'] });
});
