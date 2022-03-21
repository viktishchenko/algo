// async await
// consume/use promises

// Pending, Rejected, FulFilled

const value = 2;

/* const promise = new Promise((resolve, reject) => {});
console.log(promise); // Promise { <state>: "pending" } */
const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  console.log("random :>> ", random);
  if (random === value) {
    resolve("you guessed correctly");
  } else {
    reject("wrong answer");
  }
  //   resolve("hello,world"); // { <state>: "fulfilled", <value>: "hello,world" }
  //   reject(); // { <state>: "rejected", <reason>: undefined }
  reject("there was an error"); // { <state>: "rejected", <reason>: "there was an error" }
});
// console.log(promise); // Promise { <state>: "pending" }
// console.log(promise.value); // undefined
console.log(promise); // { <state>: "rejected", <reason>: "there was an error" }

// promise.then((datas) => console.log(datas)); // hello,world
promise.then((datas) => console.log(datas)).catch((err) => console.log(err)); // there was an error
