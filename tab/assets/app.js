"use strict";

const tabLinks = document.querySelectorAll(".tab__el a");

if(tabLinks.length > 0){
    for (let tabLink of tabLinks) {
        tabLink.addEventListener("click", tabTrigger);
    }
}

function tabTrigger(event){
    event.preventDefault();
    
    const parentTab = event.currentTarget.closest(".tab");
    
    const activeLink = parentTab.querySelector(".tab__el--active");
    activeLink.classList.remove("tab__el--active");
    
    event.currentTarget.parentNode.classList.add("tab__el--active");

    const tabs = parentTab.querySelectorAll(".tab__content");
    const tabActive = parentTab.querySelector(".tab__content--active");

    tabActive.classList.remove("tab__content--active");
    
    const tabSelectID = event.currentTarget.getAttribute("href");
    const tabSelect = parentTab.querySelector(tabSelectID);
    tabSelect.classList.add("tab__content--active");
}