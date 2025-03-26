window.onload = iniciar();

function iniciar() {
  let btnCalc = document.getElementById("calcular");

  btnCalc.addEventListener("click", () => {
    let sueldo = document.getElementById("sueldo").value;
    let result = sueldo * 0.19;
    alert("IVA --> " + result);
  });
}
