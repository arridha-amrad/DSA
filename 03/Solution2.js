const test1 = [1, 1, 2];
const test2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// Time Complexity = O(n)
// Space Complexity = O(1)
const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;
  let sumOfUniqueElment = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[sumOfUniqueElment] !== nums[i]) {
      sumOfUniqueElment++;
      nums[sumOfUniqueElment] = nums[i];
    }
    console.log(nums);
  }
  return sumOfUniqueElment + 1;
};

console.log(removeDuplicates(test1) === 2);
console.log(removeDuplicates(test2) === 5);
