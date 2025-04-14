document.addEventListener("DOMContentLoaded", () => {
  capturarBtn();
});

const botones = document.querySelectorAll(".botones__btn-num-oper");
const reset = document.querySelector(".reset");
const igual = document.querySelector(".igual");
let cadenaParaCalcular = "0";
let pantalla = document.querySelector(".calculadora-superior__pantalla");

function capturarBtn() {
  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      /* console.log(btn.innerText); */

      //aqui borramos un caracter
      if (btn.innerText == "DEL") {
        pantalla.innerText = pantalla.innerText.slice(0, -1);
      } else if (pantalla.innerText.length < 14) {
        if (pantalla.innerText == "0") {
          pantalla.innerText = btn.innerText;
        } else {
          if (btn.innerText == "x") {
            pantalla.innerText += "*";
          } else {
            pantalla.innerText += btn.innerText;
          }
        }
      }

      cadenaParaCalcular = pantalla.innerText;
    });
  });

  //presionar el reset, reiniciar calculadora
  reset.addEventListener("click", () => {
    pantalla.innerText = "0";
    cadenaParaCalcular = "0";
  });

  calcular();
}
function calcular() {
  /* separar la cadena */
  igual.addEventListener("click", () => {
    /* console.log(cadenaParaCalcular); */
    if (/^[0-9+\-*/().\s]+$/.test(cadenaParaCalcular)) {
      pantalla.innerText = eval(cadenaParaCalcular);
    } else {
      throw new Error("Operacion no valida");
    }
  });
}
