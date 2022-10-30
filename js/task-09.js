function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyBgColor = document.querySelector("body");
const resetBtnColor = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

const resetBodyColor = () => {
  bodyBgColor.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
};

resetBtnColor.addEventListener("click", resetBodyColor);
