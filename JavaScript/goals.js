/* Creating variables for futher use */
let goalform = document.getElementById("goalList")
let goalSubmitBtn = document.getElementById("goalSubmitBtn")
let addGoals = document.getElementById("addGoals");
let goaltext = document.getElementsByClassName("editable");
let starGoalId = 1;
let goalCheckId = 1;
let goalId = 0;
let dynamicGoal = 100;
let clearGoal = 100;
let lsGoalKey = 100;
let lsGoalKeyonStart = 100;

// For adding goals to Goals List.
let goalInput = document.getElementById("goalInput");

goalInput.addEventListener("submit", (event) => {
  // In order to stop browser from auto-submitting from and crashing
  event.preventDefault();

  // Adding If Statement to avoid creating blank tasks
  if (goalList.value != "" && dynamicGoal < 200) {
   
    localStorage.setItem(`${lsGoalKey}` , goalList.value);
    
    // Creating new dynamic Goals List.
    let goalTemplate = document.createElement("div");
    goalTemplate.classList.add("row", "row-custom");
    goalTemplate.id = `${dynamicGoal}-goal`;

    addGoals.appendChild(goalTemplate);

    goalTemplate.innerHTML = `<div class="col-1">
                  <input class="form-check-input" id="${goalCheckId}-goalCheckId" type="checkbox" title="Mark this goal as done" />
                    </div>

                <div class="col-9">
                  <ul>
                    <li>
                      <i class="editable" id="${goalId}-goalId">${goalList.value}</i>
                    </li> 
                  </ul>
                </div>

                <div class="col-2 btn-row">
                  <button class="edit-btn" title="Star this goal">
                    <i id="${starGoalId}-editGoal" class="fa-solid fa-star"></i>
                  </button>
                  <button class="dustbin-btn" title="Delete this goal" id="${clearGoal}">
                    <i class="text-danger fa-solid fa-trash-can"></i>
                  </button> 
                </div>
                    `;

    // Grabbing dynamically created Id.
    let goalStarButton = document.getElementById(`${starGoalId}-editGoal`);

    // To insert star function

    goalStarButton.addEventListener("click", () => {
      goalStarButton.classList.toggle("text-primary");
    });

  // For applying strike-through by taping goals name.

  // Selecting the checkbox.
  let autogoalcheckbox = document.getElementById(`${goalCheckId}-goalCheckId`);

  // Adding Strike-through class plus also enabling the check options.
  let strikeThroughgoal = document.getElementById(`${goalId}-goalId`);
  strikeThroughgoal.addEventListener("click", () => {
    strikeThroughgoal.classList.toggle("done");
    if (autogoalcheckbox.checked) {
      autogoalcheckbox.checked = false;
    } else {
      autogoalcheckbox.checked = true;
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
  let goalDustbin = document.getElementById(`${clearGoal}`);
  goalDustbin.addEventListener("click", (event) => {
    let removeGoal = goalDustbin.id;
    let deleteGoalRow = document.getElementById(`${removeGoal}-goal`);
    deleteGoalRow.remove();

// Assigning remove button to remove Local Storage.
  localStorage.removeItem(removeGoal)

  });



  // To clear the input after entering the Goal.
  goalList.value = "";

  starGoalId++;
  goalCheckId++;
  dynamicGoal++;
  goalId++;
  clearGoal++;
  lsGoalKey++;
}})

/* For adding data from Local Storage on refresh */

for (y = 100; y < 200; y++){
    if(localStorage.getItem(y) != null){
      let lsGoalData = localStorage.getItem(y)
      goalform.value = lsGoalData;
      goalSubmitBtn.click();
localStorage.removeItem(y);
      localStorage.setItem(lsGoalKeyonStart,lsGoalData)
      lsGoalKeyonStart++
    }
 }