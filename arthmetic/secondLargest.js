largest = (nums) => {
  let larger = nums[0];
  let secondLargest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > larger) {
      secondLargest = larger;
      console.log(secondLargest);
      larger = nums[i];
    }
    if (nums[i] > secondLargest && nums[i] < larger) {
      secondLargest = nums[i];
    }
  }
  return secondLargest;
};
const arr = [2, 2, 5, 4, 5, 7, 89, 12, 45];
console.log(largest(arr));
