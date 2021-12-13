const arr = [2, 2, 5, 4, 5, 7, 89, 45];
let even = [];
for (let i of arr) {
  console.log();
}

duplicateNamber = (num) => {
  let unique = [];
  for (let i of num) {
    if (unique.indexOf(i) === -1) {
      unique.push(i);
    }
  }
  return unique;
};
console.log(duplicateNamber(arr));

const fahim = 15;
const tanvir = 16;
const sohel = 18;

console.log(Math.max(fahim, tanvir, sohel));
/* [...Array(6).keys()].map((number) => console.log(number));

const arr2 = new Array(3);
arr2[0] = "tanvir";
arr2[1] = "fahim";
arr2[2] = "mansur";
arr2[3] = "sabnam";
console.log(arr2);
 */

// [...Array(6).keys()].map((Number) => console.log(Number));
