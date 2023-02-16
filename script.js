let tick = document.getElementsByClassName("form-check-input");
let text = document.getElementsByClassName("strike-through");

/* For appling strike-through to the completed tasks. */

for (let i = 0; i < tick.length; i++) {
  tick[i].addEventListener("click", function () {
    if (tick[i].checked) {
      text[i].classList.add("done");
    } else {
      text[i].classList.remove("done");
    }
  });
}
