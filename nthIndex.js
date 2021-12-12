// this math will give the given index numbers

/* fiboIndex = (numbers) => {
  if (numbers === 0) {
    return 0;
  } else if (numbers === 1) {
    return 1;
  }
  return fiboIndex(numbers - 1) + fiboIndex(numbers - 2);
};

console.log(fiboIndex(15)); */

fiboIndexNumber = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fiboIndexNumber(n - 1) + fiboIndexNumber(n - 2);
};
console.log(fiboIndexNumber(10));
