largestElement = (arr) => {
  let number = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element > number) {
      num = element;
    }
  }
  return number;
};

const number = [4, 8, 9, 5, 4, 5, 7, 8, 2, 10, 11, 15, 19];
console.log(largestElement(number));
