document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slideTrack = document.querySelector('.slide-track');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = 150;
    const speed = 0.5;

    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slideTrack.appendChild(clone);
    });

    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slideTrack.appendChild(clone);
    });

    let position = 0;
    const totalSlides = slides.length;
    const totalWidth = slideWidth * totalSlides;

    function scroll() {
        position -= speed;
        if (Math.abs(position) >= totalWidth) {
            position = 0;
        }
        slideTrack.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(scroll);
    }

    scroll();
});