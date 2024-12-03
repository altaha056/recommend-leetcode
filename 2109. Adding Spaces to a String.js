var addSpaces = function (s, spaces) {
  spaces = [0, ...spaces];
  spaces.push(s.length);
  const res = [];
  for (let i = 1; i < spaces.length; i++) {
    res.push(s.slice(spaces[i - 1], spaces[i]));
  }
  return res.join(" ");
};
const s = "LeetcodeHelpsMeLearn";
const spaces = [8, 13, 15];
console.log(addSpaces(s, spaces));
