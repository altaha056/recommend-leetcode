var maxDistance = function (nums1, nums2) {
  let ans = 0;
  let i = 0;
  let j = 1;
  while (j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      ans = Math.max(ans, j - i);
    } else {
      i++;
    }
    j++;
  }
  return ans;
};
const nums1 = [55, 30, 5, 4, 2];
const nums2 = [100, 20, 10, 10, 5];
console.log(maxDistance(nums1, nums2));
