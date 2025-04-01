document.addEventListener("DOMContentLoaded", () => {
  desplegarContenido();
});

const items = document.querySelectorAll(".item");
const itemsContenido = document.querySelectorAll(".item__contenido");
function desplegarContenido() {
  items.forEach((item, indice) => {
    item.addEventListener("click", () => {
      let estiloActual = window.getComputedStyle(
        itemsContenido[indice]
      ).display;
      /* agregamos la clase para que aparezca el contenido */
      if (estiloActual == "none") {
        itemsContenido[indice].style.display = "block";
      } else {
        itemsContenido[indice].style.display = "none";
      }
    });
  });
}
