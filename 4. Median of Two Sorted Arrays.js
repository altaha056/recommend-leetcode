var findMedianSortedArrays = function (nums1, nums2) {
  let merged = [...nums1, ...nums2].sort((a, b) => a - b);
  console.log(merged);
  return merged.length % 2 === 1
    ? merged[Math.floor(merged.length / 2)]
    : (merged[merged.length / 2] + merged[merged.length / 2 - 1]) / 2;
};

let nums1 = [1, 3, 5, 8];
let nums2 = [2, 4, 6, 7];
console.log(findMedianSortedArrays(nums1, nums2));
