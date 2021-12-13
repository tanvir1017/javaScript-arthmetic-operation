barFoo = (num) => {
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fooBar", i);
    } else if (i % 3 === 0) {
      console.log("foo", i);
    } else if (i % 5 === 0) {
      console.log("Bar", i);
    }
  }
};

console.log(barFoo(50));
// for (let i = 1; i < 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("foo-bar", i);
//   } else if (i % 3 === 0) {
//     console.log("foo", i);
//   } else if (i % 5 === 0) {
//     console.log("bar", i);
//   }
// }
