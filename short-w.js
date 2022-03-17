// Base
function findShort(string) {
  var wordsArr = string.split(" ");
  var sortedWordsArr = wordsArr.sort(function (a, b) {
    return a.length - b.length;
  });
  return sortedWordsArr[0];
}

// Advanced
function findShort(string) {
  return string.split(" ").sort(function (a, b) {
    return a.length - b.length;
  })[0];
}

// ES6
const findShort = (string) =>
  string.split(" ").sort((a, b) => a.length - b.length)[0];

// Resut:
findShort("The Smallest word in sentence"); // 'in'
findShort("Just test string"); // 'Just'
