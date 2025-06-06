document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slideTrack = document.querySelector('.slide-track');
    const slideWidth = 150;
    const totalSlides = 12;
    const visibleSlides = 6;
    const clones = document.querySelectorAll('.slide'); 

    clones.forEach(slide => {
        const clone = slide.cloneNode(true);
        slideTrack.appendChild(clone);
    });

    let position = 0;
    const speed = 1;

    function scroll() {
        position -= speed;
        if (Math.abs(position) >= slideWidth * totalSlides) {
            position = 0; 
        }
        slideTrack.style.transform = `translateX(${position}px)`;
        console.log('Position:', position);

        requestAnimationFrame(scroll);
    }

    scroll();
});