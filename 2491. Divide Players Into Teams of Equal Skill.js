var dividePlayers = function (skill) {
  skill.sort((a, b) => a - b);
  const sl = skill.length;
  const ss = skill[0] + skill[sl - 1];
  let ans = 0;
  for (let i = 0; i < Math.floor(sl / 2); i++) {
    if (skill[i] + skill[sl - i - 1] != ss) return -1;
    ans += skill[i] * skill[sl - i - 1];
  }
  return ans;
};
let skill = [1, 1, 2, 3];
console.log(dividePlayers(skill));
