/**
 * Timestamps
 */

console.log(new Date()); // Date Wed Mar 23 2022 13:14:59 GMT+0600 (Омск, стандартное время)

// Unix Time
// January 1, 1970
// 1s = 1000ms

//  Date.now();
console.log(Date.now()); // 1648020265640
//  new Date().getTime();
console.log(new Date().getTime()); // 1648020265640
// new Date().valueOf();
console.log(new Date().valueOf()); // 1648020265640
setTimeout(() => {
  console.log(Date.now()); // 1648020266654
}, 1000);

// create/get dates
console.log(new Date(1648020265640)); // Wed Mar 23 2022 13:24:25 GMT+0600
const now = Date.now(); // 1648020736196
const futureDate = new Date(now + 1000 * 60); // one minutes plus
console.log("n→", new Date(now)); // 13:34:52
console.log("fd→", futureDate); // 13:35:52
