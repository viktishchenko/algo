// Unique Values

const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "pasta",
    category: "dinner",
  },
];

// const categories = ['all', ...new Set(menu.map((item) => item.category))];
// map - get all instances
// new Set - narrow down
// ['all',...] - turn it back to array

const categories = ["all", ...new Set(menu.map((item) => item.category))]; // :>> [ "all","breakfast", "lunch", "dinner" ]
console.log("categories :>> ", categories);
const result = document.querySelector(".result");

result.innerHTML = categories
  .map((item) => {
    return `<button>${item}</button>`;
  })
  .join("");
