var isTrionic = function (nums) {
  let p = Infinity;
  let q = -Infinity;
  for (let i = 1; i < nums.length; i++) {
    if (p == Infinity && nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) p = i;
    if (q == -Infinity && nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) q = i;
  }
  console.log("p", p, "=", nums[p]);
  console.log("q", q, "=", nums[q]);
  console.log("length n = ", nums.length);

  if (p > q || q > nums.length - 1) return false;
  for (let i = 0; i < p; i++) {
    if (nums[i] >= nums[i + 1]) return false;
  }
  for (let i = p; i < q; i++) {
    if (nums[i] <= nums[i + 1]) return false;
  }
  for (let i = q; i < nums.length; i++) {
    if (nums[i] >= nums[i + 1]) return false;
  }
  return true;
};
const nums = [3, 3, 8, 1, 4, 6];
console.log(isTrionic(nums));
