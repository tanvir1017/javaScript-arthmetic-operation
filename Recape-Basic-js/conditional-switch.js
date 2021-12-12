// const arr = ["tanvir", "hossain", "tawhid", "sumaiya", "abdurRahman"];
// for (i = 0; i <= arr.length; i++) {
//   let name = arr[i];
//   if (name === "tawhid") {
//     break;
//   }
//   console.log(name);}

const arr = [
  "tanvir",
  "hossain",
  "tawhid",
  "sumaiya",
  "abdurRahman",
  "fahim",
  "mamun",
  "bithi",
];
let i = 0;
while (i <= arr.length) {
  let nameList = arr[i];
  if (nameList === "fahim") {
    break;
  }
  i++;
  console.log(nameList);
}
