var sortJumbled = function (mapping, nums) {
  let numsMap = [];
  for (let i = 0; i < nums.length; i++) {
    let str = nums[i].toString();
    let cur = "";
    for (let j = 0; j < str.length; j++) {
      cur += mapping[str[j]];
    }
    numsMap.push([parseInt(str), parseInt(cur)]);
  }
  numsMap.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < numsMap.length; i++) {
    numsMap[i] = numsMap[i][0];
  }
  return numsMap;
};
let mapping = [8, 9, 4, 0, 2, 1, 3, 5, 7, 6];
let nums = [991, 338, 38];

console.log(sortJumbled(mapping, nums));
