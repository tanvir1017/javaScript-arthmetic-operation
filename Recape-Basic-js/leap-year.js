function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("this is leap year");
  } else {
    console.log("this is not leap year");
  }
}

leapYear(2100);
