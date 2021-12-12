function vowelConstent(s) {
  for (let i = 0; i < s.length; i++) {
    let vowel = s[i];
    if (
      vowel === "a" ||
      vowel === "e" ||
      vowel === "i" ||
      vowel === "o" ||
      vowel === "u"
    ) {
      console.log(vowel);
    }
  }
  for (let i = 0; i < s.length; i++) {
    let consonent = s[i];
    if (
      consonent !== "a" &&
      consonent !== "e" &&
      consonent !== "i" &&
      consonent !== "o" &&
      consonent !== "u"
    ) {
      console.log(consonent);
    }
  }
}

vowelConstent([
  "j",
  "a",
  "v",
  "a",
  "s",
  "c",
  "r",
  "i",
  "p",
  "t",
  "l",
  "o",
  "o",
  "p",
  "s",
]);

/* let factorial = 1;
function fact(n) {
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  console.log(factorial);
}
fact(4); */
// let factorial = 4;
const factorial = (n) => (n > 1 ? n * factorial(--n) : 1);

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
