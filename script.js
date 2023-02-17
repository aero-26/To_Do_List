let tick = document.getElementsByClassName("form-check-input");
let text = document.getElementsByClassName("editable");

/* For appling strike-through to the completed tasks by check option. */

for (let i = 0; i < tick.length; i++) {
  tick[i].addEventListener("click", function () {
    if (tick[i].checked) {
      text[i].classList.add("done");
    } else {
      text[i].classList.remove("done");
    }
  });
}

/* For applying strike-through to the complete task by clicking on task.*/

for (let a = 0; a < text.length; a++) {
  text[a].addEventListener("click", function () {
    if (tick[a].checked) {
      tick[a].checked = false;
      text[a].classList.remove("done");
    } else {
      tick[a].checked = true;
      text[a].classList.add("done");
    }
  });
}
