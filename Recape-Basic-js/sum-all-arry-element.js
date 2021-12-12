summAllNumber = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const nums = numbers[i];
    sum = sum + nums;
  }
  return sum;
};

const arr = [2, 5, 4, 8, 9, 6, 4, 6, 4, 6, 5];
console.log(summAllNumber(arr));
