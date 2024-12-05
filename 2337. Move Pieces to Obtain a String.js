var canChange = function (start, target) {
  if (
    start.replace(new RegExp("_", "g"), "") !=
    target.replace(new RegExp("_", "g"), "")
  ) {
    return false;
  }
  let i = 0;
  let j = 0;

  while (i < start.length && j < target.length) {
    while (i < start.length && start[i] === "_") i++;
    while (j < start.length && target[j] === "_") j++;
    if (i < start.length && j < target.length) {
      if (start[i] != target[j]) return false;
      if (start[i] == "L" && i < j) return false;
      if (start[i] == "R" && i > j) return false;
    }
    i++;
    j++;
  }
  return true;
};
const start = "_L__R__R_";
const target = "L______RR";
console.log(canChange(start, target));
