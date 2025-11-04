var findXSum = function (nums, k, x) {
  function countTotal(y) {
    return Object.entries(y)
      .sort((a, b) => {
        if (b[1] === a[1]) return b[0] - a[0];
        return b[1] - a[1];
      })
      .slice(0, x)
      .reduce((sum, [key, value]) => sum + parseInt(key) * value, 0);
  }

  let obj = {};
  for (let i = 0; i < k; i++) {
    obj[nums[i]] = obj[nums[i]] > 0 ? ++obj[nums[i]] : 1;
  }
  const total = countTotal(obj);
  let ans = [total];
  for (let i = k; i < nums.length; i++) {
    obj[nums[i - k]]--;
    obj[nums[i]] = obj[nums[i]] > 0 ? ++obj[nums[i]] : 1;
    const total = countTotal(obj);
    ans.push(total);
  }

  return ans;
};
const nums = [1, 1, 2, 2, 3, 4, 2, 3];
const k = 6;
const x = 2;
console.log(findXSum(nums, k, x));
