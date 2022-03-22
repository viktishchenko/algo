// Reduce - Objects
// cart example
const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "google pixel ",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 4,
  },
  {
    title: "Xiaomi Redmi Note 5",
    price: 399.99,
    amount: 3,
  },
];

/**
 * ALWAYS RETURN FIRST ELEMENT(total in this case)
 *                         ↓
 */
/* 
// FIRST STEP

let total = cart.reduce(
  (total, cartItem) => {
    console.log("cartItem :>> ", cartItem); // { title: "Samsung Galaxy S7", price: 599.99, amount: 1 }, ...,{ title: "Xiaomi Redmi Note 5", price: 399.99, amount: 3 }
    return total; // :>> { totalItems: 0, cartTotal: 0 }
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);
console.log("total :>> ", total);

 */

/* 

//  SECOND STEP
// Object destructuring, amount, price iteration

let total = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    // count items
    total.totalItems += amount;
    // count sum
    total.cartTotal += amount * price;
    return total;
  },
  {
    totalItems: 0, 
    cartTotal: 0,
  }
);
console.log(total);// :>> { totalItems: 10, cartTotal: 5599.900000000001 }

 */

//  THIRD STEP
// Variable destructuring

let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    // count items
    total.totalItems += amount;
    // count sum
    total.cartTotal += amount * price;
    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);
cartTotal = parseFloat(cartTotal.toFixed(2)); // 5599.9
console.log(totalItems, cartTotal); // :>> { totalItems: 10, cartTotal: 5599.9 }

// github repos example

const url = "https://api.github.com/users/john-smilga/repos?per_page=100";

const fetchRepos = async () => {
  const res = await fetch(url);
  const data = await res.json(); // Array(100) [ {…}, {…}, {…}, … ]
  console.log("data :>> ", data);
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    //     if (language) {
    //   if (total[language]) {
    //     // total[language] = total[language] + 1;
    //     total[language]++;
    //   } else {
    //     total[language] = 1;
    //   }
    // }
    if (language) {
      total[language] = total[language] + 1 || 1;
    }
    return total;
  }, {});
  console.log(newData); // :>> { JavaScript: 37, CSS: 44, HTML: 14, SCSS: 2 }
};
fetchRepos();
