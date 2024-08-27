const test1 = [1, 2, 3, 4, 5, 6, 7];
const test2 = [-1, -100, 3, 99];

// Time Complexity = O(n)
function rotateArray(nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }

  const arr = nums.splice(nums.length - k, k);
  nums.unshift(...arr);

  return nums;
}

console.log(rotateArray(test1, 3));
console.log(rotateArray(test2, 2));
