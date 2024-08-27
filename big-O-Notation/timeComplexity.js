// 3 operations
// Time Complexity = 0(1)
function someOperation(k) {
  return (k * (k + 4)) / 2;
}

// every looping give n
// 2n + 3 (2 looping + 3 console)
// Time Complexity = O(n)
function someLooping(k) {
  console.log("Loop Start");
  for (let i = 0; i < k; i++) {
    console.log(i);
  }
  console.log("Middle operation");
  for (let j = k; j < 0; j--) {
    console.log(j);
  }
  console.log("Loop End");
}

// Time Complexity = O(n^2)
function LoopInsideLoop(k) {
  // n operation
  for (let i = 0; i < k; i++) {
    // n operation
    for (let j = k; j > 0; j--) {
      console.log(i, j);
    }
  }
}
