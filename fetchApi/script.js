/**
 * Fetch API -Brouser API for HTTP (AJAX) Requests
 * Default - GET Requests, supports other methods as well
 * Returns Promise
 */

const url = "https://www.course-api.com/react-tours-project";

// console.log(fetch(url)); // Promise { <state>: "pending" }

/* 
fetch(url)
  //   .then((res) => console.log(res)) // { type: "cors", url: "https://www.course-api.com/react-tours-project", redirected: false, status: 200, ok: true, statusText: "OK", headers: Headers, body: ReadableStream, bodyUsed: false }

  .then((res) => res.json()) // Promise { <state>: "pending" }
  .then((data) => console.log("data", data)) // [ {…}, {…}, {…}, {…}, {…} ]
  .catch((err) => console.log(err));
 */

const getData = async () => {
  try {
    /*       
    const response = await fetch(url);
    console.log(response); // :>> { type: "cors", url: "https://www.course-api.com/react-tours-project", redirected: false, status: 200, ok: true, statusText: "OK", headers: Headers, body: ReadableStream, bodyUsed: false }
 */
    const res = await fetch(url);
    const data = await res.json();
    console.log(data); // :>> [ {…}, {…}, {…}, {…}, {…} ]
  } catch (error) {}
};

getData();
