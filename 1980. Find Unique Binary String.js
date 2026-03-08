// Added using AI
var findDifferentBinaryString = function (nums) {
  let str = new Set();
  for (const binary of nums) {
    str.add(parseInt(binary, 2));
  }
  for (let i = 0; i < 1 << n; i++) {
    if (!str.has(i)) {
      return i.toString(2).padStart(nums.length, "0");
    }
  }
  return "";
};
const nums = ["111", "011", "001"];
console.log(findDifferentBinaryString(nums));
