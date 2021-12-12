namesConditionToStopFoorLoop = (names) => {
  for (let i = 0; i < names.length; i++) {
    let nameList = names[i].toUpperCase();
    if (nameList >= "Rakib") {
      console.log(nameList);
    }
  }
  return;
};

console.log(
  namesConditionToStopFoorLoop([
    "tanvir",
    "jabed",
    "Shakib",
    "Rakib",
    "Mofajjol",
  ])
);
