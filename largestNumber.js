largestNumber = (nums) => {
  let Numbers = nums[0];
  for (let i = 0; i < nums.length; i++) {
    const indexOfArr = nums[i];
    if (indexOfArr > Numbers) {
      Numbers = indexOfArr;
    }
  }
  return Numbers;
};

const arr = [2, 5, 4, 8, 96, 2, 3, 97];
console.log(largestNumber(arr));
