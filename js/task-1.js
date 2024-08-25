const categories = document.querySelector("#categories");

const categoryItems = categories.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((category) => {
  const headerText = category.querySelector("h2").textContent;

  const itemCount = category.querySelectorAll("ul > li").length;

  console.log(`Category: ${headerText}`);
  console.log(`Number of items: ${itemCount}`);
});
