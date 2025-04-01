document.addEventListener("DOMContentLoaded", () => {
  desplegarMenu();
  seleccionarItem();
});

const menuTitulo = document.querySelector(".menu__titulo");
const menuItems = document.querySelector(".menu__items");
const indicador = document.getElementById("indicador");

const items = document.querySelectorAll(".item");
const selectItem = document.getElementById("selectItem");

function desplegarMenu() {
  menuTitulo.addEventListener("click", () => {
    let displayActual = window.getComputedStyle(menuItems).display;

    if (displayActual == "none") {
      menuItems.style.display = "block";
      indicador.innerText = "v";
    } else {
      menuItems.style.display = "none";
      indicador.innerText = "<";
    }
  });
}

function seleccionarItem() {
  /* console.log(items.length); */
  items.forEach((item) => {
    item.addEventListener("click", () => {
      /* console.log(item.innerHTML); */

      selectItem.innerText = item.innerHTML;
    });
  });
}
