const nav = document.querySelector("item-nav");
const icon = document.querySelector("icon-menu");
const mql = matchMedia("(max-width: 700px)");

mql.addEventListener("change", () => {
  if (mql.matches) {
    nav.className.replace("item-nav", "responsiveNav");
    icon.className.replace("icon-menu", "responsive-icon")
  }
  else if (nav.className == "responsiveNav") {
    nav.className.replace("responsiveNav", "nav");
    icon.className.replace("responsive-icon", "icon-menu")
  }
})