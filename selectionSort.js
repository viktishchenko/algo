/* 
Сортировака выбором на массиве неупорядоченных элементов: находим минимальный меняем с первым, находим минимальный меняем со втором и тд
Выполняется за квадратичное время те O(n²)
(Alt+0178) 
*/

const array = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
]; // [-5, -1, 0, 1, 1, 1, 2.......] отсортированный массив
let count = 0;

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minEl = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minEl] > arr[j]) {
        minEl = j;
      }
      count++;
    }
    let tmp = arr[i];
    arr[i] = arr[minEl];
    arr[minEl] = tmp;
  }
  return arr;
}

console.log("selectionSort(array) :>> ", selectionSort(array));
/* 
selectionSort(array) :>>  [
  -5, -1, 0, 1, 1, 1, 2,  2,
   2,  2, 3, 3, 4, 4, 5,  6,
   6,  6, 6, 7, 8, 9, 9, 23,
  32, 35
]
*/
console.log("count :>> ", count); // count :>>  325
console.log("arr.length :>> ", array.length); // arr.length :>>  26
