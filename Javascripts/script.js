const carousel2 = document.querySelector('#carousel2');
const prevButton2 = document.querySelector('[data-target="carousel2"].prev');
const nextButton2 = document.querySelector('[data-target="carousel2"].next');
const images2 = document.querySelectorAll('#carousel2 img');
let currentIndex2 = 0;
const slideWidth2 = images2[0].clientWidth;

function goToIndex2(index) {
    currentIndex2 = index;
    carousel2.style.transform = `translateX(-${currentIndex2 * slideWidth2}px)`;
}

function nextSlide2() {
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    goToIndex2(currentIndex2);
}

function prevSlide2() {
    currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
    goToIndex2(currentIndex2);
}

nextButton2.addEventListener('click', nextSlide2);
prevButton2.addEventListener('click', prevSlide2);
setInterval(nextSlide2, 2000); // Cambiar de imagen cada 2 segundos (ajusta según tus preferencias)