const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const arrayItems = [];

for (const ingredient of ingredients) {
  const itemCreate = document.createElement("li");
  itemCreate.textContent = ingredient;
  itemCreate.classList.add("item");

  arrayItems.push(itemCreate);
}

console.log(arrayItems);

listEl.append(...arrayItems);
