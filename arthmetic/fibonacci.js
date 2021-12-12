/* fibonacci = (nums) => {
  if (typeof nums !== "number") {
    console.log("please give number for doing fiboancci");
  }
  if (nums < 2) {
    console.log("please give the number upperthan 2");
  }
  const fibo = [0, 1];
  for (let i = 2; i < nums; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
};
console.log(fibonacci(15));
 */

// From here we will going to get the some specific numbers fibonacci
createFibo = (numbers) => {
  if (typeof numbers !== "number") {
    console.log("please please don't give string value");
  }
  if (numbers <= 2) {
    console.log("give the number upper than you pass");
  }
  const fibonacci = [0, 1];
  let index = 2;
  while (index < numbers) {
    fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
    index++;
  }
  return fibonacci;
};

console.log(createFibo(8));
