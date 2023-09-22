const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;
const slideWidth = images[0].clientWidth;
function goToIndex(index) {
    currentIndex = index;
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    goToIndex(currentIndex);
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    goToIndex(currentIndex);
}
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
setInterval(nextSlide, 3000); // Cambiar de imagen cada 3 segundos (ajusta según tus preferencias)



// Asegúrate de que este nuevo código JavaScript esté debajo del código anterior.

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
setInterval(nextSlide2, 3000); // Cambiar de imagen cada 2 segundos (ajusta según tus preferencias)