const people = [
  {
    name: "bob",
    location: { street: "123 main street", timezone: { offset: "+7:00" } },
  },
  { name: "peter", location: { street: "123 Pine street" } },
  {
    name: "susan",
    location: { street: "123 Apple street", timezone: { offset: "+9:00" } },
  },
];

people.forEach((el) => {
  /* console.log(el.name); // bob,peter,susan
  console.log(el.location.timezone.offset); // Uncaught TypeError: el.location.timezone is undefined
  console.log(
    el.location && el.location.timezone && el.location.timezone.offset
  ); // +7:00 undefined +9:00 */
  //   console.log(el?.location?.timezone?.offset); // +7:00 undefined +9:00
  console.log(el?.location?.timezone?.offset || "hello,world"); // +7:00 hello,world +9:00
});

/* 
console.log(true && "Hello,World!"); // Hello,World!
console.log(false && "Hello,People!"); // false
 */
