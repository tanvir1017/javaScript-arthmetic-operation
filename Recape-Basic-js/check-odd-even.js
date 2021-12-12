function even(number) {
  if (number % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function oddNumber(number) {
  if (number % 2 !== 0) {
    console.log("yooo! this is a oddNumber", true);
  } else {
    console.log("ooops! this isn't a oddNumber", false);
  }
}

oddNumber(136);
// even(14);
