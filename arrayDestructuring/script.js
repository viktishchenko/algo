/**
 * faster/easier way to access/unpack variables * from array, objects
 */

const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

/* 
const [john, peter, bob, anna, kelly] = friends; // john,peter,bob,anna,kelly
 */
const [, peter, , anna] = friends;
console.log("peter,anna :>> ", peter, anna); // :>>  peter anna

// swop variables

let first = "bob";
let second = "john";

/* 
let temp = second; // john
second = first; // bob
first = temp; // john
 */

//with array destructuring

[second, first] = [first, second]; // :>>  john bob
console.log("first,second :>> ", first, second); // :>>  john bob
