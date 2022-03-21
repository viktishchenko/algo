// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "intern" },
];

// console.log("people :>> ", people); // [ {…}, {…}, {…}, {…} ]

// filter
const youngPeople = people.filter((person) => {
  /* 
  if (person.age < 30) {
    return person; // :>> [ {…}, {…} ]
  }
   */
  return person.age < 30; // :>> [ {…}, {…} ]
});
// console.log(":>>", youngPeople);

const developers = people.filter((person) => person.position === "developer");
// console.log(developers); // :>> [ {…} ]
// no match
const seniorDevs = people.filter((person) => {
  return person.position === "senior dev";
});
// console.log("seniorDevs :>> ", seniorDevs); // :>> []
// find
const peter = people.find((person) => {
  return person.name === "peter";
});
// console.log(peter); // :>> { name: "peter", age: 25, position: "designer" }
// no match
const oldPeople = people.find((person) => person.age > 35);
console.log(oldPeople); // :>>  undefined
// multiple matches - first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson); // :>> { name: "bob", age: 20, position: "developer" }
