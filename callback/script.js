function makeUppercase(value) {
  console.log(value.toUpperCase());
}
// makeUppercase("peter"); // PETER

function reverseString(value) {
  console.log(value.split("").reverse().join(""));
}

function handleName(name, cb) {
  const fullName = `${name} smith`; // susan smith
  cb(fullName); // SUSAN SMITH
}

// handleName("susan", makeUppercase); // SUSAN SMITH
// handleName("susan", reverseString); // htims nasus

// handleName("peter", function (value) {
//   console.log(value); // peter smith
// });

handleName("peterss", (value) => console.log(value)); // peterss smith

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   console.log("btn was clicked"); // btn was clicked
// });

const btn = document.querySelector(".btn");
btn.addEventListener("click", clickBtn);

function clickBtn() {
  console.log("btn was clicked"); // btn was clicked
}

// array methods, setTimeout, event listeners, etc
