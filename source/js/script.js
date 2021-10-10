import changeExpanded from "./utils/changeExpanded.js";

const navigationTrigger = document.querySelector(".header__button");

navigationTrigger.addEventListener("click", () => {
	changeExpanded(navigationTrigger);
	document.body.classList.toggle("scroll-lock");
});


// Header transformation
const header = document.querySelector(".header");

let prevScrollPostion = window.pageYOffset;
const height = header.offsetHeight;
window.addEventListener("scroll", () => {
	prevScrollPostion > height
		? header.classList.add("header--light")
		: header.classList.remove("header--light");

	const currentScrollPosition = window.pageYOffset;
	header.style.top =
		prevScrollPostion > currentScrollPosition ? "0" : `-${height}px`;
	prevScrollPostion = currentScrollPosition;
});
