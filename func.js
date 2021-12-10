function one(fn) {
  return fn ? fn(1) : 1;
}
function two(fn) {
  return fn ? fn(2) : 2;
}
function three(fn) {
  return fn ? fn(3) : 3;
}
function four(fn) {
  return fn ? fn(4) : 4;
}
function five(fn) {
  return fn ? fn(5) : 5;
}
function six(fn) {
  return fn ? fn(6) : 6;
}
function seven(fn) {
  return fn ? fn(7) : 7;
}
function eight(fn) {
  return fn ? fn(8) : 8;
}
function nine(fn) {
  return fn ? fn(9) : 9;
}

function plus(a) {
  return (b) => a + b;
}
function minus(a) {
  return (b) => b - a;
}
function divide(a) {
  return (b) => b / a;
}
function mult(a) {
  return (b) => a * b;
}

console.log("one(plus(three())) :>> ", one(plus(three()))); // one(plus(three())) :>>  4

console.log("four(minus(two())) :>> ", four(minus(two()))); // four(minus(two())) :>>  2

console.log("three(mult(three())) :>> ", three(mult(three()))); // three(mult(three())) :>>  9

console.log("eight(divide(four())) :>> ", eight(divide(four()))); // eight(divide(four())) :>>  2
