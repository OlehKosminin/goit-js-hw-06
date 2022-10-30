const spanEl = document.querySelector("#text");
const rangeEl = document.querySelector("#font-size-control");

const rangeValue = () => {
  spanEl.style.fontSize = `${String(rangeEl.value)}px`;
};

rangeEl.addEventListener("input", rangeValue);
