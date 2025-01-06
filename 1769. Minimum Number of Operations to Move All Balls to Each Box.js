var minOperations = function (boxes) {
  const n = boxes.length;
  const arr = new Array(n).fill(0);
  let lc = 0;
  let ls = 0;
  for (let i = 0; i < n; i++) {
    arr[i] = lc * i - ls;
    if (boxes[i] === "1") {
      lc++;
      ls += i;
    }
  }
  let rc = 0;
  let rs = 0;
  for (let i = n - 1; i >= 0; i--) {
    arr[i] += rs - i * rc;
    if (boxes[i] === "1") {
      rc++;
      rs += i;
    }
  }
  return arr;
};
const boxes = "001011";

console.log(minOperations(boxes));
