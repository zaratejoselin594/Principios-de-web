const nav = document.querySelector("item-nav");
const icon = document.querySelector("icon-menu");
const mql = matchMedia("(max-width: 700px)");

mql.addEventListener("change", () => {
  if (mql.matches) {
    nav.classList.replace("item-nav", "responsiveNav");
    icon.classList.replace("icon-menu", "responsive-icon");
  };
  else if (nav.className == "responsiveNav") {
    nav.classList.replace("responsiveNav", "nav");
    icon.classList.replace("responsive-icon", "icon-menu");
  }
})