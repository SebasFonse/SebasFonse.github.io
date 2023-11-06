const slider2 = document.querySelector("#slider2")
let sliderSection2 = document.querySelectorAll(".slider__section2");
let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];

const btnLeft2 = document.querySelector("#btn-left2");
const btnRight2 = document.querySelector("#btn-right2");

slider2.insertAdjacentElement('afterbegin', sliderSectionLast2);

function Next(){
    let sliderSectionFirst2 = document.querySelectorAll(".slider__section2")[0];
    slider2.style.marginleft = "-200%";
    slider2.style.transition = "all 0.5s";
    setTimeout(function(){
        slider2.style.transition= "none";
        slider2.insertAdjacentElement('beforeend', sliderSectionFirst2);
        slider2.style.marginleft = "-100%";
    }, 500);
}

function Prev(){
    let sliderSection2 = document.querySelectorAll(".slider__section2");
    let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];
    slider2.style.marginleft = "0";
    slider2.style.transition = "all 0.5s";
    setTimeout(function(){
        slider2.style.transition= "none";
        slider2.insertAdjacentElement('afterbegin', sliderSectionLast2);
        slider2.style.marginleft = "-100%";
    }, 500);
}


btnRight2.addEventListener('click', function(){
    Next();
});

btnLeft2.addEventListener('click', function(){
    Prev();
});