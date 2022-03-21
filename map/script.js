// MAP Method

// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "anna",
    age: 25,
    position: "designer",
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
  },
  {
    name: "john",
    age: 26,
    position: "intern",
  },
];

// console.log(people); // :>> [ {…}, {…}, {…}, {…} ]

const person = people.map((el, idx) => {
  return el.name; // :>>  [ "bob", "anna", "susy", "john" ]
  //   return el.age * 2; // :>> [ 40, 50, 60, 52 ]
});
// console.log("person :>> ", person);

const newPeople = people.map((item) => {
  return {
    firstName: item.name, //  [ {…}, {…}, {…}, {…} ] → { firstName: "bob" }
  };
});
// console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const res = (document.getElementById("result").innerHTML = names.join(""));
console.log(res); // res :>>  <h2>bob</h2><h2>anna</h2><h2>susy</h2><h2>john</h2>
