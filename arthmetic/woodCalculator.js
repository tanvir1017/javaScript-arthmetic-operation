woodCalculator = (table, bed, chair) => {
  const tableWood = 7;
  const bedWood = 10;
  const chairWood = 3;

  const totalWood = tableWood * table + bedWood * bed + chairWood * chair;
  return totalWood;
};
console.log(woodCalculator(1, 1, 1));
