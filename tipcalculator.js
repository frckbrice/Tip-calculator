// to get the target html element
const buttonDisplay = document.querySelector(".calculate");
const result = document.querySelector(".display");
const restart = document.querySelector(".reset");

let amount = document.querySelector(".amount");
let percentage = document.querySelector(".percentage-tip");

//events
buttonDisplay.addEventListener("click", displayResult);
restart.addEventListener("click", resetFn);

// function that calculate the percentage
function calculatePercentage() {
  let amount = parseInt(document.querySelector(".amount").value);
  let percentage = parseInt(document.querySelector(".percentage-tip").value);
  return (amount * percentage) / 100;
}

// the calling function
function displayResult() {
  result.innerHTML = calculatePercentage();
}

function resetFn() {
  amount.value = '';
  percentage.value = '';
  result.innerHTML = '0'+0;
}
