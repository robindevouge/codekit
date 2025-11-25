'use strict';

const menuToggle = document.querySelector('.menu__toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__el a');

// click sur le bouton
if (menuToggle) {
	menuToggle.addEventListener('click', menuOpen);
}
function menuOpen() {
	menu.classList.toggle('menu--open');
	document.body.classList.toggle('no-scroll');
}

// click sur les liens
if (menuLinks) {
	for (let menuLink of menuLinks) {
		menuLink.addEventListener('click', menuOpen);
	}
}
