/* 
0! = 1;
n! = n * (n-1)!;
2! = 1 * 2 = 2;
3! = 1 * 2 * 3 = 6;
4! = 1 * 2 * 3 * 4 = 24;
*/

const factorial = (n) => {
  if (n < 0) {
    return 0;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log("factorial(5) :>> ", factorial(5)); // factorial(5) :>>  120
console.log("factorial(-3) :>> ", factorial(-3)); // factorial(-3) :>>  0
console.log("factorial(0) :>> ", factorial(0)); // factorial(0) :>>  1
