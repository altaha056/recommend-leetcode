var prefixesDivBy5 = function (nums) {
  const ans = [];
  let rem = 0;
  for (const num of nums) {
    rem = (rem * 2 + num) % 5;
    ans.push(rem == 0);
  }
  return ans;
};
