const slider = document.querySelector("#slider")
let sliderSection = Document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnleft = document.querySelector("#btn-left");
const btnright = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);