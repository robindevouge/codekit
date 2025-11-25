"use strict";

const backTop = document.querySelector(".backTop");

if(backTop){
    window.addEventListener("scroll", scrollListener);
}

function scrollListener(event){
    const currentScroll = window.scrollY;
    if(currentScroll > 300){
        backTop.classList.add("backTop--show");
    }else{
        backTop.classList.remove("backTop--show");
    }    
}