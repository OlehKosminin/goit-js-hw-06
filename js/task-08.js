const formEl = document.querySelector(".login-form");

const formSubmit = (event) => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const message = "Всі поля повинні бути заповненні";

  if (formElements.email.value === "" || formElements.password.value === "") {
    return alert(message);
  }

  const email = formElements.email.value;
  const password = formElements.password.value;
  const dataClient = {
    email,
    password,
  };

  console.log(dataClient);
  formEl.reset();
};

formEl.addEventListener("submit", formSubmit);
