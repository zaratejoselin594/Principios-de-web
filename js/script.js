
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