/* Creating variables for further purpose */
let form = document.getElementById("toDoList");
let toDoSubmitBtn = document.getElementById("toDo-Submit-btn");
let addtodo = document.querySelector("#addtodo");
let tick = document.getElementsByClassName("form-check-input");
let text = document.getElementsByClassName("editable");
let starId = 1;
let checkId = 1;
let toDoId = 0;
let dynamicToDo = 1;
let clearToDo = 1;
let lsKey = 1;
let lsKeyonStart = 1;

/* For adding todo tasks to the list */
let toDoInput = document.getElementById("toDoInput");

toDoInput.addEventListener("submit", (event) => {
  // This is very important line in order to stop the browser from auto-submitting form and crashing the website.
  event.preventDefault();

  // Adding If statement to avoid creating blank tasks
  if (toDoList.value != "" && dynamicToDo < 100) {
    localStorage.setItem(`${lsKey}`, toDoList.value);

    /* Creating  New Dynamic Div template */
    let template = document.createElement("div");
    template.classList.add("row", "row-custom");
    template.id = `todo-${dynamicToDo}`;

    template.innerHTML = `<div class="col-1">
                  <input class="form-check-input" id="${checkId}-checkId" type="checkbox" title="Mark this task as done" />
                    </div>

                <div class="col-9">
                  <ul>
                    <li>
                      <i class="editable" id="${toDoId}-toDoId">${toDoList.value}</i>
                    </li> 
                  </ul>
                </div>

                <div class="col-2 btn-row">
                  <button class="edit-btn" title="Star this task">
                    <i id="${starId}-editToDo" class="fa-solid fa-star"></i>
                  </button>
                  <button class="dustbin-btn" title="Delete this task" id="${clearToDo}">
                    <i class="text-danger fa-solid fa-trash-can"></i>
                  </button> 
                </div>
                    `;

    addtodo.appendChild(template);

    // Grabbing Dynamically created ID.
    let starButton = document.getElementById(`${starId}-editToDo`);

    /* To insert click to star function */
    starButton.addEventListener("click", () => {
      starButton.classList.toggle("text-primary");
    });

    /* For applying strike-through by taping on task name */

    // Selecting the Checkbox
    let autocheck = document.getElementById(`${checkId}-checkId`);

    // Adding Strike-through class plus also enabling the check options.
    let strikeThrough = document.getElementById(`${toDoId}-toDoId`);
    strikeThrough.addEventListener("click", () => {
      strikeThrough.classList.toggle("done");
      if (autocheck.checked) {
        autocheck.checked = false;
      } else {
        autocheck.checked = true;
      }
    });

    /* For appling strike-through to the completed tasks by check option. */
    for (let i = 0; i < tick.length; i++) {
      tick[i].addEventListener("click", () => {
        if (tick[i].checked) {
          text[i].classList.add("done");
        } else {
          text[i].classList.remove("done");
        }
      });
    }

    /* To add delete Task function */
    let toDoDustbin = document.getElementById(`${clearToDo}`);
    toDoDustbin.addEventListener("click", (event) => {
      let removeToDoRow = toDoDustbin.id;
      let deleteRow = document.getElementById(`todo-${removeToDoRow}`);
      deleteRow.remove();

      // Assigning remove button to delete localstorage
      localStorage.removeItem(removeToDoRow);
    });

    // This is to clear the form after submission.
    toDoList.value = "";

    toDoId++;
    starId++;
    checkId++;
    dynamicToDo++;
    clearToDo++;
    lsKey++;
  }
});

/* For adding data from Local Storage on refresh */

for (q = 0; q < 100; q++) {
  if (localStorage.getItem(q) != null) {
    let lsData = localStorage.getItem(q);
    form.value = lsData;
    toDoSubmitBtn.click();
    localStorage.removeItem(q);
    localStorage.setItem(lsKeyonStart, lsData);
    lsKeyonStart++;
  }
}
