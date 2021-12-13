/* 
Бинарный поиск работает за логарифмитическое время - O(log(n)) В ОТСОРТИРОВАННОМ МАССИВЕ!!!
*/

const array = [
  23, 24, 123, 354, 543, 656, 833, 932, 1245, 2376, 2521, 3243, 5353, 23442,
];
let count = 0;

function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length;
  let middle;
  let found = false;
  let position = -1;
  while (found === false && start <= end) {
    count++;
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (arr[middle] > item) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

console.log("binarySearch(array, 354) :>> ", binarySearch(array, 5353)); // :>>  12
console.log("count :>> ", count); // :>>  4

function recursiveBinarySearch(array, item, start, end) {
  let middle = Math.floor((start + end) / 2);
  count += 1;
  if (item === array[middle]) {
    return middle;
  }
  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, start, middle - 1);
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
}

console.log(
  "recursiveBinarySearch(array, 5353, 0, array.length :>> ",
  recursiveBinarySearch(array, 5353, 0, array.length)
); //  :>>  12
console.log("count :>> ", count); // :>>  4
