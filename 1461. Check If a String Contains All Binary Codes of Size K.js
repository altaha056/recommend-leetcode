var hasAllCodes = function (s, k) {
  const set = new Set();
  let i = 0;
  let temp = "";
  while (i < k) {
    temp += s.charAt(i);
    i++;
  }
  set.add(temp);
  while (i < s.length) {
    temp += s.charAt(i);
    temp = temp.slice(1);
    set.add(temp);
    i++;
  }
  return set.size === Math.pow(2, k);
};
const s = "00110110";
const k = 2;
console.log(hasAllCodes(s, k));
