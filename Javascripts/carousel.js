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
setInterval(nextSlide, 2000); // Cambiar de imagen cada 3 segundos (ajusta según tus preferencias)
