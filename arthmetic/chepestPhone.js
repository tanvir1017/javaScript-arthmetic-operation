const phones = [
  { name: "Samsung m12", color: "nevi-blue", price: "15,000" },
  { name: "Iphone 13", color: "silver", price: "185,000" },
  { name: "Huawei", color: "blue", price: "19,000" },
  { name: "Vivo y11", color: "red", price: "13,000" },
  { name: "Motorola g3", color: "black", price: "23,500" },
  { name: "Samsung m13", color: "white", price: "17,000" },
  { name: "OnePlus", color: "redblue", price: "35,000" },
];

let chepest = phones[0].price;
/* for (let phone of phones) {
  if (phone.price < chepest.price) {
    chepest = phone;
    // console.log(chepest);
  }
} */
const bakiAce = phones
  .filter((phone) => phone.price < chepest)
  .map((cellPhone) => cellPhone.name);
console.log(...bakiAce);

// const obj = [...bakiAce][0].name;
// console.log(obj);

/* const remiaing = phones.filter((phone) => phone.price < chepest);
console.log(remiaing); */
