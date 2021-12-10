const createRandomArr = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    const randomNumber = Math.floor(Math.random() * 1000); // >> 1 ~ 999
    arr.push(randomNumber); // arr :>>  [ 79, 524, 375, 195, 32 ]
  }
  console.log("arr :>> ", arr);
};

createRandomArr(5);
