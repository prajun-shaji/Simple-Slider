const prevIcon = document.querySelector(".prev");
const nextIcon = document.querySelector(".next");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

var sliderIndex = 1;
const noOfSlides = images.length;

function prevSlide() {
  slider.style.transform = `translateX(-${(sliderIndex - 2) * 600}px)`;
  sliderIndex--;
}

function nextSlide() {
  slider.style.transform = `translateX(-${sliderIndex * 600}px)`;
  sliderIndex++;
}

function initialSlide() {
  slider.style.transform = `translateX(0px)`;
  sliderIndex = 1;
}

function finalSlide() {
  slider.style.transform = `translateX(-${(noOfSlides - 1) * 600}px)`;
  sliderIndex = noOfSlides;
}

prevIcon.addEventListener("click", () => { sliderIndex > 1 ? prevSlide() : finalSlide() });

nextIcon.addEventListener("click", () => { sliderIndex < noOfSlides ? nextSlide() : initialSlide() });