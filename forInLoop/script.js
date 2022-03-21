/**
 * "for in" loop  - iterate over object properties
 * not advised to use it on arrays, especialy if the order is
 * important
 * on array use "for of" loop instead
 */

const person = {
  name: "john",
  age: 25,
  status: "student",
};

for (const propertyName in person) {
  console.log(propertyName); //:>> name,age,status
  console.log(person[propertyName]); // :>> john,25,student
}
