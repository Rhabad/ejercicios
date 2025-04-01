document.addEventListener("DOMContentLoaded", () => {
  calcularEdad();
});

const btn = document.querySelector("button");
const resultadoMensaje = document.getElementById("resultado");
function calcularEdad() {
  btn.addEventListener("click", () => {
    let birtDate = new Date(document.querySelector("#date").value);
    let hoy = new Date();

    let edad = hoy.getFullYear() - birtDate.getFullYear();
    let mes = -(hoy.getMonth() - birtDate.getMonth());
    let dia = hoy.getDate() - birtDate.getDate();

    // Ajustar si aún no ha pasado el cumpleaños en el año actual
    if (mes < 0 || (mes === 0 && dia < 0)) {
      edad--;
    }

    let edadTotal = `You are ${edad} years ${mes} months old, and ${dia} days`;

    resultadoMensaje.textContent = edadTotal;
  });
}
