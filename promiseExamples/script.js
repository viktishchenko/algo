// Promise Example
// .first - after 1s first red;
// .second - after 3s second blue; 4s
// .third - after 2s third green; 6s
// IN SEQUENCE !!!!

const btn = document.querySelector(".btn");
btn.addEventListener(
  "click",
  () =>
    addColor(1000, ".first", "red")
      .then(() => addColor(3000, ".second", "blue"))
      .then(() => addColor(2000, ".third", "green"))
      .catch((err) => console.log(err)) // There is no such element : "first"
);

function addColor(time, selector, color) {
  const el = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (el) {
      setTimeout(() => {
        el.style.color = color;
        resolve();
      }, time);
    } else {
      reject(`There is no such element : "${selector}"`);
    }
  });
}
