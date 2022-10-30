const inputEl = document.querySelector("#validation-input");

const auditLength = function (event) {
  event.currentTarget.value.length ===
  Number(inputEl.getAttribute("data-length"))
    ? inputEl.classList.add("valid") && inputEl.classList.remove("invalid")
    : inputEl.classList.add("invalid");
};

inputEl.addEventListener("blur", auditLength);
