function flatternR(...arr) {
  return arr.reduce(
    (acc, item) =>
      Array.isArray(item) ? acc.concat(flattern(...item)) : acc.concat(item),
    []
  );
}

function flatternStack(...arr) {
  const resArr = [];
  while (arr.length) {
    const el = arr.shift();
    if (Array.isArray(el)) {
      arr.unshift(...el);
      continue;
    }
    resArr.push(el);
  }
  return resArr;
}

function flattern(...arr) {
  const resArr = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (Array.isArray(current)) {
      resArr.push(...flattern(...current));
    } else {
      resArr.push(current);
    }
  }
  return resArr;
}

console.log(flatternR(1, [2, [3, [4]]], 5, [6, [7]])); // [1, 2, 3, 4, 5, 6, 7]
console.log(flattern("a", [2, ["b", [4]]], 5, ["d", [7]])); // ['a', 2, 'b', 4, 5, 'd', 7]
console.log(flatternStack("a", ["s", ["b", ["v"]]], 5, ["d", [75]])); // ['a', 2, 'b', 4, 5, 'd', 7]
