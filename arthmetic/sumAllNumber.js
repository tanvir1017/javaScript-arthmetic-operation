const phones = [
  { name: "Samsung m12", color: "nevi-blue", price: "15000" },
  { name: "Iphone 13", color: "silver", price: "185000" },
  { name: "Huawei", color: "blue", price: "19000" },
  { name: "Vivo y11", color: "red", price: "13000" },
  { name: "Motorola g3", color: "black", price: "23500" },
  { name: "Samsung m13", color: "white", price: "17000" },
  { name: "OnePlus", color: "redblue", price: "35000" },
];

let total = 0;
for (let phone of phones) {
  total = total + parseInt(phone.price);
}
console.log(total);
