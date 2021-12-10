function counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },

    print: function () {
      console.log("count :>> ", count);
    },
  };
}

const res = counter();
res.increment();
res.increment();
res.print(); // count :>>  2
