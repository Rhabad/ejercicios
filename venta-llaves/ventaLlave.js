document.addEventListener("DOMContentLoaded", () => {
  insertarLlaves(llaveEtiquetas());
});

function llaveEtiquetas() {
  let imagen = `<img src="llaveVieja.jpg" alt="una llave vieja" />`;
  let nombre = `<h2>Llave Antigua</h2>`;
  let modelo = `<p>Modelo: ${Math.floor(Math.random() * (300 - 100 + 1))}</p>`;
  let precio = `<p>Precio: <b>$${Math.floor(
    Math.random() * (3000 - 1000 + 1) + 1000
  )}</b></p>`;

  return `${imagen} ${nombre} ${modelo} ${precio}`;
}

// quedaria algo asi div.flex-wrapper>(div.item{los 3 elementos})*20
function insertarLlaves(llave) {
  let contenedor = document.querySelector(".flex-wrapper");
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < 20; i++) {
    let div = document.createElement("DIV");
    div.classList.add("item");
    //insectamos los datos de la llave al div
    div.innerHTML = llave;

    fragment.appendChild(div);
  }

  let btn = document.createElement("BUTTON");
  contenedor.appendChild(fragment);
}
