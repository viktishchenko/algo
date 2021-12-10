// 1, 1, 2, 3, 5, 8, 13, 21, 34
// f(n) = f(n-1) + f(n-2)

function fibonachiLin(n) {
  let prev = 1;
  let res = 0;

  for (let i = 0; i < n; i++) {
    let r = prev + res;

    prev = res;
    res = r;
  }
  return res;
}

console.log("fibonachiLin(9) :>> ", fibonachiLin(9)); // :>> 34

function fibonachi(n) {
  if (n <= 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  return fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(fibonachi(4)); // fibonachi(4) :>>  3
console.log(fibonachi(9)); // fibonachi(4) :>>  34
console.log(fibonachi(7)); // fibonachi(4) :>>  13

function iterationFibonachi(n) {
  if (n <= 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  let prev = 1;
  let result = 1;
  for (let i = 0; i < n - 2; i++) {
    let tmp = result;
    result += prev;
    prev = tmp;
  }
  return result;
}

console.log(iterationFibonachi(4)); // :>>  3
console.log(iterationFibonachi(9)); // :>>  34
console.log(iterationFibonachi(7)); // :>>  13
