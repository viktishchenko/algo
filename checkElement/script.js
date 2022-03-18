/**
 * check element or list of elements with func
 */

const heading = document.querySelector(".heading");
// console.log("heading :>> ", heading);
const listItem = document.querySelectorAll(".list-item");
// console.log("listItem :>> ", listItem);

/**
 * nfn
 */

/* 
const checkElement = (selector, isList) => {
  if (isList) {
    const el = [...document.querySelectorAll(selector)];
    if (el.length < 1) {
      throw new Error(`Please double check selector: ${selector}`);
    }
    return el;
  }

  const el = document.querySelector(selector);
  if (el) return el;
  throw new Error(`Please double check selector: ${selector}`);
};
 */

/**
 * refactor
 */

const checkElement = (selector, isList) => {
  const el = isList
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);

  // not a list - exist or not
  // list - empty or not
  /* 
  if (!isList && el) return el;
  if (isList && el.length > 1) return el;// Array [ li.list-item, li.list-item ]
   */

  if ((!isList && el) || (isList && el.length > 1)) return el;

  throw new Error(`Please double check selector: ${selector}`);
};

// console.log("checkElement('.heading') :>> ", checkElement(".heading")); // <h3 class="heading">
console.log("checkElement(.list-item) :>> ", checkElement(".list-item", true)); // Array [ li.list-item, li.list-item ]
