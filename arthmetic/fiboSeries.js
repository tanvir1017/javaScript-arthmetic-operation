// this math will give you the exact given fibo series

fiboSeries = (nums) => {
  if (nums === 0) {
    return 0;
  } else if (nums === 1) {
    return [0, 1];
  }
  const fibo = fiboSeries(nums - 1);
  fibo[nums] = fibo[nums - 1] + fibo[nums - 2];
  return fibo;
};
console.log(fiboSeries(5));

fiboSeriesList = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return [0, 1];
  }
  const fibo = fiboSeriesList(n - 1);
  fibo[n] = fibo[n - 1] + fibo[n - 2];
  return fibo;
};

console.log(fiboSeriesList(15));

fiboNacciSeries = (nums) => {
  if (nums === 0) {
    return 0;
  } else if (nums === 1) {
    return [0, 1];
  }
  const fibo = fiboNacciSeries(nums - 1);
  fibo[nums] = fibo[nums - 1] + fibo[nums - 2];
  return fibo;
};

console.log(fiboNacciSeries(10));
