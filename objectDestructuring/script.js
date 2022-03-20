/**
 * faster/easier way to access/unpack variables * from array, objects
 */

const bob = {
  first: "bobi",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

// const { first, last, city, zip } = bob;
// give alias
/* 
console.log(first, last, city, zip); // :>>  bob sanders chicago undefined
 */

/* 
const {
  first: shakeAndBake,
  last,
  city,
  siblings: { sister: favoriteSiblings },
} = bob;
 */

/* 
console.log(
  "shakeAndBake,last,city,favoriteSiblings :>> ",
  shakeAndBake,
  last,
  city,
  favoriteSiblings
); // :>>  bob sanders chicago jane
 */

/* 
const firstName = bob.first;
const lastName = bob.last;
const sister = bob.siblings.sister;
 */

/* 
console.log("firstName,lastName,sister :>> ", firstName, lastName, sister); // :>>  bob sanders jane
 */

/* 
function printPerson(person) {
  // console.log(person.first); // bobi
  const { first, last } = person;
  console.log(first, last); // :>>  bobi sanders
}
 */

function printPerson({ first, last, city, siblings: { sister: sis } }) {
  console.log(first, last, sis); // :>>  bobi sanders jane
}

printPerson(bob);
