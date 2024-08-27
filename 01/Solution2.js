// This is un-optimized solution called BruteForce Approach

const testArr1 = [12, 35, 1, 10, 34, 1];
const testArr2 = [10, 5, 10];
const testArr3 = [10, 10, 3, 1];
const testArr4 = [10, 10];

const findSecondLargestElement = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = largest;

  // O(n)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }
    if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  if (secondLargest === Number.NEGATIVE_INFINITY) {
    secondLargest = largest;
  }

  return secondLargest;
};

// This solution has O(n) time complexity

console.log(findSecondLargestElement(testArr1));
console.log(findSecondLargestElement(testArr2));
console.log(findSecondLargestElement(testArr3));
console.log(findSecondLargestElement(testArr4));
