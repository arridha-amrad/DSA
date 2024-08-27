const test1 = [1, 2, 3, 4, 5, 6, 7];
const test2 = [-1, -100, 3, 99];

const arr = test2.splice(test2.length - 4, 4);

const newArr = [...arr, ...test2];

console.log({ newArr });

function rotateArray(nums, k) {}
