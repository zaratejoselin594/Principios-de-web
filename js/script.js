
let sliderInner = document.querySelector(".slider-inner");

let img = document.querySelectorAll("#paisaje-img")

let i = 1;
setInterval(() => {
  let parcentage;
  let index;
  if (i >= img.length) {
    parcentage = i * -100;
    index = "i--"
  }
  else if (i <= 7) {
    parcentage = i * -100
    index = "i++"
  }
  sliderInner.style.transform = `translate(${parcentage}%)`;
  if (index === "i++")  i++ 
  else  i--
}, 3000);