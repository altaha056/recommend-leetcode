var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let ans = [];

  const helper = (sum, idx, arr) => {
    if (sum == 0) {
      ans.push([...arr]);
      return;
    }
    if (sum < 0) return;
    for (let i = idx; i < candidates.length; i++) {
      if (i != idx && candidates[i] === candidates[i - 1]) continue;
      helper(sum - candidates[i], i + 1, [...arr, candidates[i]]);
    }
  };
  helper(target, 0, []);
  return ans;
};

let candidates = [10, 1, 2, 7, 6, 1, 5];
let target = 8;
console.log(combinationSum2(candidates, target));
