document.addEventListener("DOMContentLoaded", () => {
  menuDesplegable();
});

const navItems = document.querySelector("nav");
const menu = document.querySelector(".logo img");
function menuDesplegable() {
  menu.addEventListener("click", () => {
    let showNav = navItems.classList.contains("mostrar-nav");
    if (showNav) {
      navItems.classList.remove("mostrar-nav");
    } else {
      navItems.classList.add("mostrar-nav");
    }
  });
}
