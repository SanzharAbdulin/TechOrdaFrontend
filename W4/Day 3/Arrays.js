function getSecondLargest(nums) {
  // Complete the function
  let max = nums[0];
  for (let i of nums) {
    if (i > max) max = i;
  }
  let secondmax = nums[0];
  for (let i of nums) {
    if (i > secondmax && i != max) secondmax = i;
  }
  return secondmax;
}
