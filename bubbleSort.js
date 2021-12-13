/* 
Пузырьковая сортировака на массиве неупорядоченных элементов: сравниваем первые элементы больший поднимаем вверх и тд.
Выполняется за квадратичное время те O(n²)
(Alt+0178) 
*/

const array = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
]; // [-5, -1, 0, 1, 1, 1, 2.......] отсортированный массив
let count = 0;

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      count++;
    }
  }
  return arr;
}

console.log("bubbleSort(array) :>> ", bubbleSort(array));
/* 
bubbleSort(array) :>>  [
  -5, -1, 0, 1, 1, 1, 2,  2,
   2,  2, 3, 3, 4, 4, 5,  6,
   6,  6, 6, 7, 8, 9, 9, 23,
  32, 35
]
*/
console.log("count :>> ", count); // count :>>  676
console.log("array.length :>> ", array.length); // array.length :>>  26
