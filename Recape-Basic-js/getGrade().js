function getGrade(score) {
  let grade;
  if (score > 25 && score <= 30) {
    grade = "A";
    console.log(grade);
  } else if (score > 20 && score <= 25) {
    grade = "B";
    console.log(grade);
  } else if (score > 15 && score <= 20) {
    grade = "C";
    console.log(grade);
  } else if (score > 10 && score <= 15) {
    grade = "D";
    console.log(grade);
  } else if (score > 5 && score <= 10) {
    grade = "E";
    console.log(grade);
  } else {
    grade = "F";
    console.log(grade);
  }
}

getGrade(11);
