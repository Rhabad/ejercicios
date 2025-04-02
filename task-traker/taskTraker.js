document.addEventListener("DOMContentLoaded", () => {
  crearTarea();
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
                        <input type="checkbox" />
                        <p>${tareaNueva}</p>
                        <button>Borrar</button>
                    </div>`;

  containTask.innerHTML += formatoTarea;
}
