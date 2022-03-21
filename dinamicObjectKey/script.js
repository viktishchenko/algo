// dot notaition
const person = {
  name: "john",
};

/* 
console.log(person.name); // :>>  john
// square bracket notation
console.log(person["name"]); // :>>  john
person.age = 25;
console.log(person); // :>> { name: "john", age: 25 }
// square bracket notation
person["age"] = 27;
console.log(person); // :>> { name: "john", age: 27 }
 */

// square bracket notation
/* 
const item = {
  "feature-items": ["item1", "item2"],
};
console.log(item["feature-items"]); // [ "item1", "item2" ]
 */

let appState = "loading"; // initial state
// state changing
appState = "error";
// !!! get NOT NAME but VALUE !!!
const keyName = "computer"; // THAT VALUE!!!
const app = {
  [appState]: "true",
};
// console.log(app); // :>> { loading: "true" } //  { error: "true" }

// LOOK AT THAT KEY-VALUE PARE !!!
app[keyName] = "apple";
// console.log(app); // :>> { error: "true", computer: "apple" }

// INITIAL STATE
const state = {
  loading: true,
  name: "",
  age: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "john");
console.log(state); // { loading: true, name: "john", job: "" }

updateState("age", 25);
console.log(state); // { loading: true, name: "john", age: 25 }

updateState("city", "moscow");
console.log(state); // { loading: true, name: "john", age: 25, city: "moscow" }

updateState("loading", false);
console.log(state); // { loading: false, name: "john", age: 25, city: "moscow" }
