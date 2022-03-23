/**
 * Set object - stores a collection of unique
 * values of any type
 *
 * new Set()
 * add(value)
 * delete(value)
 * clear()
 * has(value)
 *
 * ITERATORS
 * entries(),keys(),values(),forEach()
 */

const unique = new Set();
const random = "third";
unique.add("first");
unique.add("second");
unique.add(random);
unique.add("third");
unique.add("second");

/* 
console.log(unique); // Set(3) [ "first", "second", "third" ]
 */

let results = unique.delete("third"); // :>> true
// console.log(results); // :>> true

results = unique.delete("five"); // :>> false

let isValue = unique.has(4); // :>> false
isValue = unique.has("first"); // :>> true

// console.log(unique); // Set [ "first", "second" ]

/**
 * new Set() - accept iterable objects
 */

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
