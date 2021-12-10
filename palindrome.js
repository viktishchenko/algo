/* 
civic, radar, rotor, kayak, redivider - ture
потоп, заказ, дед, тут, шалаш, комок, мадам, а роза упала на лапу азора  - true
*/

function palindrome(word) {
  return word.toLowerCase() === word.toLowerCase().split(" ").reverse().join();
}

function iteratePalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] === word[word.length - 1 - i]) {
      return true;
    }
  }
  return false;
}

console.log('palindrome("civic") :>> ', palindrome("civic")); // palindrome("civic") :>>  true

console.log("iteratePalindrome('civic') :>> ", iteratePalindrome("civic")); // iteratePalindrome('civic') :>>  true
