// 1
const listElement = document.querySelector("#categories");

const listElementLength = listElement.querySelectorAll("ul");
console.log(`Number of categories: ${listElementLength.length}`);

// 2
const itemEl = document.querySelectorAll(".item");

itemEl.forEach((title) => {
  //   const headingName = title.querySelector("h2");
  console.log("Category:", title.firstElementChild.textContent);

  const itemLength = title.querySelectorAll("li");
  console.log(`Elements: ${itemLength.length}`);
});
