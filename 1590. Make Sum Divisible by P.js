var minSubarray = function (nums, p) {
  let total = 0;
  for (const x of nums) total += x;
  const need = total % p;
  if (need === 0) return 0;

  const n = nums.length;
  const map = new Map();
  map.set(0, -1);

  let prefix = 0;
  let ans = n;

  for (let i = 0; i < n; i++) {
    prefix = (prefix + nums[i]) % p;
    let target = (prefix - need) % p;
    if (target < 0) target += p;

    if (map.has(target)) {
      ans = Math.min(ans, i - map.get(target));
    }
    map.set(prefix, i);
  }

  return ans === n ? -1 : ans;
};
const nums = [3, 1, 4, 2];
const p = 6;
console.log(minSubarray(nums, p));
