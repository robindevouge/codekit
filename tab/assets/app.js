'use strict';

const tabLinks = document.querySelectorAll('.tab__el a');

if (tabLinks.length > 0) {
	for (let tabLink of tabLinks) {
		tabLink.addEventListener('click', tabTrigger);
	}
}

function tabTrigger(event) {
	event.preventDefault();

	const parentTab = event.currentTarget.closest('.tab');

	const activeLink = parentTab.querySelector('.tab__el--active');
	activeLink.classList.remove('tab__el--active');

	event.currentTarget.parentNode.classList.add('tab__el--active');

	const tabs = parentTab.querySelectorAll('.tab__content');
	const tabActive = parentTab.querySelector('.tab__content--active');

	tabActive.classList.remove('tab__content--active');

	const tabSelectID = event.currentTarget.getAttribute('href');
	const tabSelect = parentTab.querySelector(tabSelectID);
	tabSelect.classList.add('tab__content--active');

	/*
		The following are encased in conditions so it applies only to a single group as example
		in case we would want to do something else on another tab group.
		On a real project you should NEVER have duplicated code this way.
	*/

	if (parentTab.classList.contains('tab--a')) {
		// Adjust container height to the height of the active tab
		const tabContainer = parentTab.querySelector('.tab__container');
		const activeTabHeight = tabSelect.offsetHeight;
		tabContainer.style.height = `${activeTabHeight}px`;
	}

	if (parentTab.classList.contains('tab--b')) {
		// Adjust container height to the height of the active tab
		const tabContainer = parentTab.querySelector('.tab__container');
		const activeTabHeight = tabSelect.offsetHeight;
		tabContainer.style.height = `${activeTabHeight}px`;
	}
}

// Set tab A container to the height of the active tab on page load
const activeTabA = document.querySelector('.tab--a .tab__content--active');
const tabContainerA = document.querySelector('.tab--a .tab__container');
const activeTabHeightA = activeTabA.offsetHeight;
tabContainerA.style.height = `${activeTabHeightA}px`;

// Set tab B container to the height of the active tab on page load
const activeTabB = document.querySelector('.tab--b .tab__content--active');
const tabContainerB = document.querySelector('.tab--b .tab__container');
const activeTabHeightB = activeTabB.offsetHeight;
tabContainerB.style.height = `${activeTabHeightB}px`;
