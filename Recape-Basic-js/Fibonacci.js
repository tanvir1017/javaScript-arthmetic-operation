fibo = (num) => {
  if (typeof num !== "number") {
    return "please give me the valid number";
  } else if (num < 2) {
    return "please give a number upper than you pass";
  }
  const fibo = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
};

console.log(fibo(10));
