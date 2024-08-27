// This is un-optimized solution called BruteForce Approach

const testArr1 = [12, 35, 1, 10, 34, 1];
const testArr2 = [10, 5, 10];
const testArr3 = [10, 10];
const testArr4 = [10];

const findSecondLargestElement = (arr) => {
  const uniqueArr = Array.from(new Set(arr)); // O(n)

  uniqueArr.sort((a, b) => b - a); // O(n log n)

  const secondLargest = uniqueArr.length >= 2 ? uniqueArr[1] : uniqueArr[0];
  return secondLargest;
};

// This solution has O(n log n) time complexity

console.log(findSecondLargestElement(testArr1));
console.log(findSecondLargestElement(testArr2));
console.log(findSecondLargestElement(testArr3));
console.log(findSecondLargestElement(testArr4));
