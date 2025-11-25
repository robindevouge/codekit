"use strict";

const btnPrev = document.querySelector(".slider__btn--prev");
const btnNext = document.querySelector(".slider__btn--next");

if(btnPrev && btnNext){
    btnPrev.addEventListener("click", prev);
    btnNext.addEventListener("click", next);
}

// navigation clavier
document.addEventListener('keydown', function(e) {
    if (e.code == "ArrowLeft"){
        prev();
    }else if(e.code == "ArrowRight"){
        next();
    }
});

function next(){
    const elShow = document.querySelector(".slider__el--show"),
        elNext = elShow.nextElementSibling;

    elShow.classList.remove("slider__el--show");

    if(elNext){
        elNext.classList.add("slider__el--show");
    }else{
        const elFirst = elShow.parentNode.firstElementChild;
        elFirst.classList.add("slider__el--show");
    }
}
function prev(){
    const elShow = document.querySelector(".slider__el--show"),
        elPrev = elShow.previousElementSibling;

    elShow.classList.remove("slider__el--show");

    if(elPrev){
        elPrev.classList.add("slider__el--show");
    }else{
        const elLast = elShow.parentNode.lastElementChild;
        elLast.classList.add("slider__el--show");
    }
}