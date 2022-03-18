/**
 * Top Level Await - Basic Example
 */

import fetchData from "./fetchData.js";

const fetchDataFromModule = await fetchData();
console.log("fetchDataFromModule :>> ", fetchDataFromModule); // Array(3) [ {…}, {…}, {…} ]

/* 
const fetchOtherData = async () => {
  const results = await fetch("https://www.course-api.com/react-tabs-project");
  const data = await results.json();
  console.log("data:>>", data); // Array(3) [ {…}, {…}, {…} ]
};

fetchOtherData();
 */

// because top level await!!!

const results = await fetch("https://www.course-api.com/react-tabs-project");
const data = await results.json();
console.log("data:>>", data); // Array(3) [ {…}, {…}, {…} ]

fetch("https://www.course-api.com/react-tabs-project")
  .then((resp) => resp.json())
  .then((data) => console.log(data)); // Array(3) [ {…}, {…}, {…} ]

/**
 * at() - takes integer and returns the item at that index -
 * string, array
 */

const score = [23, 45, 101];
const oldLast = score[score.length - 1];
console.log("oldLast :>> ", oldLast); // 101

const newLast = score.at(-1);
console.log("newLast :>> ", newLast); // 101

const str = "Some string";
console.log("str.at(0) :>> ", str.at(0)); // S
