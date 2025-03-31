document.addEventListener("DOMContentLoaded", () => {
  textAreaCharacter();
});

const txtArea = document.querySelectorAll(".txtarea");
const areaContain = document.querySelectorAll(".txtarea-contain");
const contador = document.querySelectorAll("#count");
function textAreaCharacter() {
  txtArea.forEach((text, indice) => {
    text.addEventListener("input", () => {
      let maxCarac = 250;
      if (text.value.length > maxCarac) {
        text.value = text.value.substring(0, maxCarac);
        areaContain[indice].style.border = "3px solid red";
        areaContain[indice].style.color = "red";
        text.style.color = "red";
      }

      contador[indice].textContent = `${text.value.length} / ${maxCarac}`;
    });
  });
}
