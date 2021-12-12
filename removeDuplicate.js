duplicateNumber = (number) => {
  let unique = [];
  for (let num of number) {
    if (unique.indexOf(num) === -1) {
      unique.push(num);
    }
  }
  return unique;
};

console.log(duplicateNumber([2, 5, 8, 8, 9, 7, 4, 2, 5, 4]));

const num = [2, 5, 8, 8, 9, 7, 4, 2, 5, 4];
for (let number of num) {
  console.log(number);
}
