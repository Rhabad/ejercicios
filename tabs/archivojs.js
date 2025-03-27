window.onload = inicio;

// -al presionar tab muestra contenido
// -capturar el click
// -ocultamos los demas contenido que no queremos
// -mostrar solo el contenido deseado
function inicio() {
  let btns = document.querySelectorAll("button");
  let tabs = document.querySelectorAll(".tab");

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      btns.forEach((btn) => btn.classList.remove("btn-activo"));
      tabs.forEach((tab) => tab.classList.remove("tab-active"));

      this.classList.add("btn-active");
      document.getElementById(this.dataset.tab).classList.add("tab-active");
    });
  });
}
