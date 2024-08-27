const test1 = [1, 1, 2];
const test2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// Time Complexity = O(n)
// Space Complexity = O(1)
const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1); // --->>> O(1)
      i--;
    }
  }
  return nums.length;
};

console.log(removeDuplicates(test1) === 2);
console.log(removeDuplicates(test2) === 5);
