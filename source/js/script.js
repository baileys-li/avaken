import changeExpanded from "./utils/changeExpanded.js";
import initCarousel from "./utils/initCarousel.js";

const navigationTrigger = document.querySelector(".header__button");
const navigationLinks = document.querySelectorAll(".navigation__link");

navigationLinks.forEach((link) => [
	link.addEventListener("click", changeNavigationStatus),
]);

navigationTrigger.addEventListener("click", changeNavigationStatus);

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

// Carousel
const carousel = document.querySelector(".carousel");
initCarousel(carousel);

function changeNavigationStatus() {
	changeExpanded(navigationTrigger);
	document.body.classList.toggle("scroll-lock");
}
