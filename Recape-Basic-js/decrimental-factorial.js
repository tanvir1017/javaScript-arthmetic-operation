/* function getReverseFactorial(number) {
  let factorial = 1;
  for (let index = number; index >= 1; index--) {
    factorial = factorial * index;
  }
  console.log(factorial);
}

const reverseFactorial = getReverseFactorial(7);
console.log(reverseFactorial);
 */

function getReverseFactorial(number) {
  let factorial = 1;
  for (let i = number; i >= 1; i--) {
    factorial = factorial * i;
  }
  console.log(factorial);
}

console.log(getReverseFactorial(7));
