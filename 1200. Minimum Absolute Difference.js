var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let curMin = arr[1] - arr[0];
  let ans = [[arr[0], arr[1]]];
  for (let i = 2; i < arr.length; i++) {
    const cur = Math.abs(arr[i] - arr[i - 1]);
    if (cur < curMin) {
      ans = [[arr[i - 1], arr[i]]];
      curMin = cur;
    } else if (cur == curMin) {
      ans.push([arr[i - 1], arr[i]]);
    }
  }
  return ans;
};
const arr = [3, 8, -10, 23, 19, -4, -14, 27];
console.log(minimumAbsDifference(arr));
