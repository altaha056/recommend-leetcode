var chalkReplacer = function (chalk, k) {
  if (chalk.length == 1) return 0;
  let i = 0;
  while (k >= 0) {
    k -= chalk[i];
    if (k < 0) return i;
    i++;
    if (i == chalk.length) i = 0;
  }
};

let chalk = [3, 4, 1, 2];
let k = 25;

console.log(chalkReplacer(chalk, k));
