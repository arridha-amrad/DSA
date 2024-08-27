// Primitve Types of javascript:
// number, boolean, undefined, null --->>> Constant
// string, array, object --->>> Dynamic

// Any function that return "Constant" has Space Complexity O(1)
function returnNumber(k) {
  return (k * 4) / 5 + k * 4;
}

// Space Complexity = O(n)
function returnArr(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(i * 32);
  }
  return newArr;
}

// Space Complexity = O(n^2)
function matrix(k) {
  let matrix1 = [];
  for (let i = 0; i < k; i++) {
    matrix1[i] = [];
    for (let j = 0; j < k; j++) {
      matrix1[i][j] = i + j;
    }
  }
  return matrix1;
}
console.log(matrix(3));
