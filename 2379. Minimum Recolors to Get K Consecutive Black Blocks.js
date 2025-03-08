var minimumRecolors = function (blocks, k) {
  let wcount = 0;

  for (let i = 0; i < k; i++) {
    if (blocks[i] === "W") wcount++;
  }
  let wind = 0;
  let wmin = wcount;
  for (let i = k; i < blocks.length; i++) {
    if (blocks[i] === "W") wcount++;
    if (blocks[wind] === "W") wcount--;
    wmin = Math.min(wmin, wcount);
    wind++;
  }
  return wmin;
};
const blocks = "BWBBWWBBBWBWWWBWWBBWBWBBWBB";
const k = 11;
console.log(minimumRecolors(blocks, k));
