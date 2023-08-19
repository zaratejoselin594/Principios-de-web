/*
let sliderInner = document.querySelector(".slider-inner");

let img = document.querySelectorAll("#paisaje-img")

let i = 1;
setInterval(() => {
  let parcentage = i * -100;
  sliderInner.style.transform = `translate(${parcentage}%)`
  i++;
  if (i >= img.length) {
    i = 1;
  }
}, 4000);
*/

const slider = document.querySelector('.slider');
const sliderList = slider.querySelector('ul');
const sliderItems = slider.querySelectorAll('li');
const sliderCount = sliderItems.length;
const sliderWidth = slider.clientWidth;

let currentIndex = 0;

function shiftSlider() {
  sliderList.classList.add('shift');
  setTimeout(() => {
    sliderList.classList.remove('shift');
    sliderList.appendChild(sliderItems[currentIndex]);
  }, 500);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % sliderCount;
  shiftSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + sliderCount) % sliderCount;
  shiftSlider();
}

setInterval(nextSlide, 5000);

const nextButton = document.getElementById("siguiente");
nextButton.addEventListener('click', nextSlide);


const prevButton = document.getElementById('anterior');
prevButton.addEventListener('click', prevSlide);