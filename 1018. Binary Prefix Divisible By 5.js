var prefixesDivBy5 = function (nums) {
  const ans = [];
  let rem = 0;
  for (const num of nums) {
    rem = rem * 2 + num;
    ans.push(rem % 5 == 0);
  }
  return ans;
};
const nums = [0, 1, 1, 1];
console.log(prefixesDivBy5(nums));
