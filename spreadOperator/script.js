// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = "udemy";

const letters = [...udemy]; //  [ "u", "d", "e", "m", "y" ]

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];

const bestFriends = "arnold";

const friends = [boys, girls, bestFriends];
const friends1 = [...boys, ...girls, bestFriends];
// console.log(friends); // [ ["john", "peter", "bob"], ["susan", "anna"], "arnold" ]
// console.log(friends1); // [ "john", "peter", "bob", "susan", "anna", "arnold" ]

//reference
/*
const newFriends = friends1;
newFriends[0] = "nancy";
console.log(friends1); // [ "nancy", "peter", "bob", "susan", "anna", "arnold" ]
console.log(newFriends); // [ "nancy", "peter", "bob", "susan", "anna", "arnold" ]
 */

const newFriends = [...friends1];
newFriends[0] = "nancy";
// console.log("f1:>>", friends1); // [ "john", "peter", "bob", "susan", "anna", "arnold" ]
// console.log("nf:>>", newFriends); // [ "nancy", "peter", "bob", "susan", "anna", "arnold" ]

//ES2018 - ES8 Objects

const person = { name: "john", job: "developer" };
const newPerson = { ...person, city: "chicago", name: "peter" };
console.log(person); //{ name: "john", job: "developer" }
console.log(newPerson); //{ name: "peter", job: "developer", city: "chicago" }
