function calculate(exp) {
  let arr = exp.split(" ");
  let stack = [];
  while (arr.length) {
    const el = arr.pop();
    const elNumber = Number(el);
    if (!isNaN(elNumber)) {
      stack.push(elNumber);
      continue;
    }
    let firstNum = stack.pop();
    let secondNum = stack.pop();

    switch (el) {
      case "+":
        stack.push(firstNum + secondNum);
        break;
      case "-":
        stack.push(firstNum - secondNum);
        break;
      case "*":
        stack.push(firstNum * secondNum);
        break;
      case "/":
        stack.push(firstNum / secondNum);
        break;
    }
  }
  return stack[0];
}

console.log('calculate("+ 3 5") :>> ', calculate("+ 3 5")); // :>>  8
console.log('calculate("* + 2 2 3") :>> ', calculate("* + 2 2 3")); // :>>  12
console.log('calculate("/ + 3 5 * 2 2") :>> ', calculate("/ + 3 5 * 2 2")); // :>>  2
