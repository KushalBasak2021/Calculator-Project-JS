const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalButton = document.querySelector(".btn-equal");
const clearButton = document.querySelector(".btn-clear");
const backButton = document.querySelector(".btn-back");
const operatorButtons = document.querySelectorAll(".btn-operation");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const target = e.target;
    screen.value += target.dataset.num;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const target = e.target.dataset.num;
    screen.value += `${target}`;
  });
});

equalButton.addEventListener("click", (e) => {
  if (screen.value === "") {
    screen.value = "Please enter some number";
  } else {
    const result = eval(screen.value);
    screen.value = result;
  }
});

clearButton.addEventListener("click", (e) => {
  screen.value = "";
});

backButton.addEventListener("click", (e) => {
  if (screen.value !== "") {
    let newScreenValue = screen.value.substring(0, screen.value.length - 1);
    screen.value = newScreenValue;
  }
});
