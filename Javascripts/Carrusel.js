// Asegúrate de que este nuevo código JavaScript esté debajo del código anterior.

const carousel3 = document.querySelector('#carousel3');
const prevButton3 = document.querySelector('[data-target="carousel3"].prev');
const nextButton3 = document.querySelector('[data-target="carousel3"].next');
const images3 = document.querySelectorAll('#carousel3 img');
let currentIndex3 = 0;
const slideWidth3 = images3[0].clientWidth;

function goToIndex3(index) {
    currentIndex3 = index;
    carousel3.style.transform = `translateX(-${currentIndex3 * slideWidth3}px)`;
}

function nextSlide3() {
    currentIndex3 = (currentIndex3 + 1) % images3.length;
    goToIndex3(currentIndex3);
}

function prevSlide3() {
    currentIndex3 = (currentIndex3 - 1 + images3.length) % images3.length;
    goToIndex3(currentIndex3);
}

nextButton3.addEventListener('click', nextSlide3);
prevButton3.addEventListener('click', prevSlide3);
setInterval(nextSlide3, 2000); // Cambiar de imagen cada 2 segundos (ajusta según tus preferencias)