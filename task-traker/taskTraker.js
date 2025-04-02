document.addEventListener("DOMContentLoaded", () => {
  crearTarea();
  eliminarTarea();
  tareaCompletada();
});

const task = document.querySelector('.create-task input[type="text"]');
const btnCrearTask = document.querySelector(".create-task button");
function crearTarea() {
  task.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      /* console.log("pre"); */
      btnCrearTask.style.backgroundColor = "#0009";
      nuevaTarea();
      setTimeout(() => {
        btnCrearTask.style.backgroundColor = "#000";
      }, 200);
    }
  });

  btnCrearTask.addEventListener("click", nuevaTarea);
}

const containTask = document.querySelector(".task-tracker__tasks");
function nuevaTarea() {
  let tareaNueva = task.value;

  /* crear el div con la tarea */
  let formatoTarea = `<div class="tasks">
                        <input class="check" type="checkbox" />
                        <p>${tareaNueva}</p>
                        <button class="borrar">Borrar</button>
                    </div>`;

  containTask.innerHTML += formatoTarea;
}

const tareas = document.querySelectorAll(".tasks");
/* const tareaBotones = document.querySelectorAll(".tasks button"); */
function eliminarTarea() {
  // EVENT DELEGATION: Escuchamos los clics en el contenedor principal
  containTask.addEventListener("click", (event) => {
    if (event.target.classList.contains("borrar")) {
      event.target.closest(".tasks").remove(); // Elimina la tarea completa
    }
  });

  /* tareaBotones.forEach((btn, indice) => {
    btn.addEventListener("click", () => {
      tareas[indice].remove();
    });
  }); */
}

const tareasCheckbox = document.querySelectorAll(
  '.tasks input[type="checkbox"]'
);
const tareasTextos = document.querySelectorAll(".tasks p");
function tareaCompletada() {
  containTask.addEventListener("change", (event) => {
    if (event.target.classList.contains("check")) {
      const checkTarea = event.target.closest(".tasks");

      if (event.target.checked) {
        checkTarea.classList.add("tasks--completado");
      } else {
        checkTarea.classList.remove("tasks--completado");
      }
    }
  });

  /* tareasCheckbox.forEach((tareaCheck, indice) => {
    if (tareaCheck.cheecked) {
      tareas[indice].classList.add("tasks--completado");
    }
  }); */
}
