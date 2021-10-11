export default function initCarousel(carousel) {
	const slides = carousel.querySelectorAll(".carousel__slide");
	const controls = carousel.querySelectorAll(".carousel__control");
	let currentSlide = 0;

	controls[0].addEventListener("click", (evt) => {
		evt.preventDefault();
		const target =
			currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
		changeSlide(target);
	});

	controls[1].addEventListener("click", (evt) => {
		evt.preventDefault();
		const target =
			currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
		changeSlide(target);
	});

	function changeSlide(index) {
		slides[currentSlide].classList.remove("carousel__slide--current");
		slides[index].classList.add("carousel__slide--current");
		currentSlide = index;
	}
}
