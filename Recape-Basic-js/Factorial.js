// Factorial Math
/* 
    3! = 3 * 2 * 1
    4! = 4 * 3 * 2 * 1
    5! = 5 * 4* 3 * 2 * 1
     */

let factorial = 1;
for (let i = 1; i < 7; i++) {
  factorial = factorial * i;
}
// console.log(factorial);

let factorial = 1;
let i = 1;
while (i < 5) {
  factorial = factorial * i;
  i++;
}
// console.log(factorial);

// with function factorial
function getFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

console.log("Factorial of 7", getFactorial(7));
console.log("Factorial of 5", getFactorial(5));
