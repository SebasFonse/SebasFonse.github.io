// Caja 1
const slider1 = document.querySelector("#slider1");
const btnLeft1 = document.querySelector("#btn-left1");
const btnRight1 = document.querySelector("#btn-right1");

slider1.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next1(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginleft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition= "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginleft = "-100%";
    }, 500);
}

function Prev1(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginleft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition= "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginleft = "-100%";
    }, 500);
}

btnRight1.addEventListener('click', function(){
    Next1();
});

btnLeft1.addEventListener('click', function(){
    Prev1();
});

// Repite el mismo bloque para slider2, btnLeft2, btnRight2 y así sucesivamente

// Caja 2
const slider2 = document.querySelector("#slider2");
const btnLeft2 = document.querySelector("#btn-left2");
const btnRight2 = document.querySelector("#btn-right2");

slider1.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next2(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginleft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition= "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginleft = "-100%";
    }, 500);
}

function Prev2(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginleft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition= "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginleft = "-100%";
    }, 500);
}

btnRight1.addEventListener('click', function(){
    Next2();
});

btnLeft1.addEventListener('click', function(){
    Prev2();
});












