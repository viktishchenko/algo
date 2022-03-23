/**
 * Three methods to convert objects into array
 * Object.keys() - convert property names into array
 * Object.values() - convert property values into array
 * Object.entries() - convert both
 */

const person = {
  name: "john",
  age: 25,
  status: "student",
};

// get keys

const keys = Object.keys(person); // [ "name", "age", "status" ]
const values = Object.values(person); // [ "john", 25, "student" ]
const entries = Object.entries(person);
// console.log("entries :>> ", entries); // Array(3) [ [ "name", "john" ], [ "age", 25 ], [ "status", "student" ] ]

// MAP method

const newEntries = entries.map((item) => {
  //   console.log("item :>> ", item); // :>>[ "name", "john" ] :>>[ "age", 25 ] :>>[ "status", "student" ]
  const [keys, values] = item;
  //   console.log("keys :>> ", keys); // name // age //status
  //   console.log("values :>> ", values); // john // 25 // student
  //   return keys; // [ "name", "age", "status" ]
  return values;
});

// console.log(newEntries); // [ "john", 25, "student" ]

// FOR OF method

/* 
for (const item of entries) {
  const [keys, values] = item;
  console.log(keys, values); //:>> name john //:>> age 25 //:>> status student
}
 */

// OR

for (const [keys, values] of entries) {
  console.log(keys, values); //:>> name john //:>> age 25 //:>> status student
}
