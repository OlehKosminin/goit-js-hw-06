const btnDecrementEl = document.querySelector("[data-action='decrement']");
const btnIncrementEl = document.querySelector("[data-action='increment']");
const valueEl = document.querySelector("#value");

let counterValue = 0;

const valueDecrement = function () {
  counterValue -= 1;
  console.log(counterValue);
  return (valueEl.textContent = counterValue);
};

const valueIncrement = function () {
  counterValue += 1;
  console.log(counterValue);
  return (valueEl.textContent = counterValue);
};

btnDecrementEl.addEventListener("click", valueDecrement);
btnIncrementEl.addEventListener("click", valueIncrement);

// console.log(value);
