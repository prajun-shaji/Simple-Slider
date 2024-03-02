const prevIcon = document.querySelector(".prev");
const nextIcon = document.querySelector(".next");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottomDots = document.querySelector(".slider-bottom");

var sliderIndex = 1;
const noOfSlides = images.length;

for(let i = 0; i < noOfSlides; i++) {
  const div = document.createElement("div");
  div.className = "dots";
  bottomDots.appendChild(div);
}

const dots = document.querySelectorAll(".dots");
dots[0].style.backgroundColor = "white";

function transparentDot() {
dots.forEach(dot => { dot.style.backgroundColor = "transparent"});
}

dots.forEach((dot, index) => {
dot.addEventListener("click", () => {
  sliderIndex = index + 1;
  slider.style.transform = `translateX(-${index * 600}px)`;
  transparentDot();
  dot.style.backgroundColor = "white";
});
});

function moveColour() {
  transparentDot();
  dots[sliderIndex - 1].style.backgroundColor = "white";
}

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

prevIcon.addEventListener("click", () => { sliderIndex > 1 ? prevSlide() : finalSlide();
moveColour();
 });

nextIcon.addEventListener("click", () => { sliderIndex < noOfSlides ? nextSlide() : initialSlide();
moveColour();
 });
