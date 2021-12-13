/* 
Быстрая сортировака на массиве неупорядоченных элементов или сортировака Хуара : принцип - разделяй и властвуй т.е. делим массив попалам, выбираем опорный элемент, все что больше вправо, что меньше влево и далее тоже самое рекурсивно в полученых массивах. В конце отсортированные элементы складываюся в результирующий массив.
Выполняется за линейно-логарифмитическое время те O(n(logn * n)
*/

const array = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
]; // [-5, -1, 0, 1, 1, 1, 2.......] отсортированный массив
let count = 0;

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (i === pivotIndex) {
      continue;
    }
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log("quickSort(array) :>> ", quickSort(array));
/* 
quickSort(array) :>>  [
  -5, -1, 0, 1, 1, 1, 2,  2,
   2,  2, 3, 3, 4, 4, 5,  6,
   6,  6, 6, 7, 8, 9, 9, 23,
  32, 35
]
*/
console.log("count :>> ", count); // count :>>  112
