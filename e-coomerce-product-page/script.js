document.addEventListener("DOMContentLoaded", () => {
  menuDesplegable();
  cambiarImagen();
  stock();
});

/* menu desplegable en dispositivos pequeños */
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
/* menu desplegable en dispositivos pequeños */

function cambiarImagen() {
  /* moverse entre las imagenes diferentes */
  const fotoProducto = document.querySelector(".galeria-foto");
  const btnIzquierda = document.querySelector(".btn-izquierda");
  const btnDerecha = document.querySelector(".btn-derecha");
  let index = 0;
  let imagenes = [
    "zapatos/zapatos1.webp",
    "zapatos/zapato2.jpg",
    "zapatos/zapato3.jpeg",
  ];

  btnIzquierda.addEventListener("click", () => {
    index = (index - 1 + imagenes.length) % imagenes.length;
    /* console.log(index); */
    fotoProducto.src = imagenes[index];
  });
  btnDerecha.addEventListener("click", () => {
    index = (index + 1) % imagenes.length;
    fotoProducto.src = imagenes[index];
  });
}
/* moverse entre las imagenes diferentes */

/* agregar o remover stock */
function stock() {
  let totalStock = document.querySelector(".stock-producto p");
  const btnRemove = document.querySelector(".btn-remove");
  const btnAdd = document.querySelector(".btn-add");

  btnAdd.addEventListener("click", () => {
    let valorActual = parseInt(totalStock.innerText);
    totalStock.innerText = valorActual + 1;
  });

  btnRemove.addEventListener("click", () => {
    let valorActual = parseInt(totalStock.innerText);
    if (valorActual == 0) {
      totalStock.innerText = 0;
    } else {
      totalStock.innerText = valorActual - 1;
    }
  });
}
/* agregar o remover stock */

/* agregar compra al carrita, solo un mensaje, 
es para mostrar que se realizo la compra */
