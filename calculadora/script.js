document.addEventListener("DOMContentLoaded", () => {
  capturarBtn();
});

const botones = document.querySelectorAll(".botones__btn-num-oper");
const reset = document.querySelector(".reset");
const igual = document.querySelector(".igual");
let cadenaParaCalcular = "";

function capturarBtn() {
  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      let pantalla = document.querySelector(".calculadora-superior__pantalla");

      /* console.log(btn.innerText); */
      if (pantalla.innerText == "0") {
        pantalla.innerText = btn.innerText;
      } else {
        pantalla.innerText += btn.innerText;
      }
      cadenaParaCalcular = pantalla.innerText;
    });
  });

  calcular();
}

function calcular() {
  /* separar la cadena */
  igual.addEventListener("click", () => {
    console.log(cadenaParaCalcular);
  });
}
