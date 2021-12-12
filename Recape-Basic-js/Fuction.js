function bringSingara() {
  const singaraQuantity = 13;
  const totalSingaraPrice = singaraQuantity * 5;
  return totalSingaraPrice;
}

function myMoney(taka) {
  const currentMoney = taka - bringSingara();
  console.log(currentMoney);
}
// myMoney(500);

function bringBread(quantity, price) {
  const totalPrice = quantity * price;
  console.log(totalPrice);
}

bringBread(2, 27);
