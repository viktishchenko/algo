// Rest Operator
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// REST when DECLARE function, STREAD when INVOKE the function

// arrays
const fruits = ["apple", "orange", "lemon", "banana", "pear"];
const [first, second, ...restOfTheFruits] = fruits;

// console.log(first, restOfTheFruits); // apple [ "lemon", "banana", "pear" ]

const specificFruit = restOfTheFruits.find((fruit) => fruit === "lemon");
// console.log("specificFruit :>> ", specificFruit); // lemon

// objects
const person = { name: "john", lastName: "smith", job: "developer" };
const { job, ...rest } = person; // job,rest :>>  developer
// console.log("job,rest :>> ", job, rest); // { name: "john", lastName: "smith" }

// functions

const getAverage = (name, ...scores) => {
  //   console.log(name); // name :>>  john
  //   console.log(scores); // scores:>> [ 89, 76, 81, 100 ]
  const average =
    scores.reduce((total, item) => {
      // console.log("item :>> ", item); // 89, 76, 81, 100
      total += item;
      return total;
    }, 0) / scores.length;
  console.log("average :>> ", average); // 86.5
};
// getAverage(person.name, 89, 76, 81, 100);

const testScores = [23, 45, 67, 89]; // 56
getAverage(person.name, ...testScores);
