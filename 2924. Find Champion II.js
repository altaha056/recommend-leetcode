var findChampion = function (n, edges) {
  const undefeated = new Array(n).fill(true);
  for ([a, b] of edges) {
    undefeated[b] = false;
  }
  let champions = 0;
  let championsCount = 0;
  for (let i = 0; i < n; i++) {
    if (undefeated[i]) {
      champions = i;
      championsCount++;
    }
  }
  if (championsCount == 1) return champions;
  return -1;
};
const n = 3;
const edges = [
  [0, 1],
  [1, 2],
];
console.log(findChampion(n, edges));
