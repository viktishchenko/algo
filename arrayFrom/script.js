const str = "string";
// console.log("Array.from(str) :>> ", Array.from(str)); //Array(6) [ "s", "t", "r", "i", "n", "g" ]

const text = document.querySelectorAll(".text"); // NodeList(3) [ h2.text, h2.text, h2.text ]

const newText = Array.from(text); // Array(3) [ h2.text, h2.text, h2.text ]

const newTexts = Array.from(text).find((item) => item.textContent === "person"); // <h2 class="text">

// pagination example

/* 
const items = Array.from({ length: 120 }); // Array(120) [ undefined, … ]
 */

/* 
const items = Array.from({ length: 120 }, (_, idx) => {
  return idx; // Array(120) [ 0, 1, 2, 3, 4, …, 119 ]
});
 */

const items = Array.from({ length: 120 }, (_, idx) => {
  return idx; // Array(120) [ 0, 1, …, 8, 9, …, 119 ]
});

const itemsPerPage = 18;
const pages = Math.ceil(items.length / itemsPerPage); // itpp→14→9

const newItems = Array.from({ length: pages }, (_, idx) => {
  const start = idx * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage);
  return tempItems; // Array(7) [ (18) […], (18) […], …, (12) […] ]
});

console.log("newItems :>> ", newItems);
