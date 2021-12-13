/* 
Линейный поиск работает за линейное время, т.е. O(n)
 */

const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 2)); // :>> 6
console.log("count = ", count); // :>> 7 колличество итераций-к.и.
console.log(linearSearch(array, 123)); // :>> null
console.log("count = ", count); // :>> 11 (last)-к.и.
