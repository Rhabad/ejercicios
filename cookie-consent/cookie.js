document.addEventListener("DOMContentLoaded", () => {
  cerrar();
  acceptCookie();
});

const contCookie = document.querySelector(".cookie");
const capaDifuminada = document.querySelector(".capa-difuminada");
// cerrar el cookie
function cerrar() {
  const x = document.querySelector(".cerrar");
  x.addEventListener("click", () => {
    contCookie.style.display = "none";
  });
}

function acceptCookie() {
  const btn = document.querySelector(".acept-cookie");
  btn.addEventListener("click", () => {
    contCookie.style.display = "none";
    capaDifuminada.style.display = "none";
  });
}
