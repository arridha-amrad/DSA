const test1 = [1, 2, 3, 4, 5, 6, 7];
const test2 = [-1, -100, 3, 99];

// Time Complexity = O(n)
// Space Complexity = O(1) since not creating new array
function rotateArray(nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }

  reverse(nums, 0, nums.length - 1); // O(n)
  reverse(nums, 0, k - 1); //O(k)
  reverse(nums, k, nums.length - 1); // O(n-k)

  return nums;
}

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

console.log(rotateArray(test1, 3));
console.log(rotateArray(test2, 2));
