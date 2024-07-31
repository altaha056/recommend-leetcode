var minimumCost = function (source, target, original, changed, cost) {
  let result = 0;
  const dist = new Array(26).fill(null).map(() => new Array(26).fill(Infinity));
  for (let i = 0; i < 26; i++) {
    dist[i][i] = 0;
  }
  for (let i = 0; i < original.length; i++) {
    const src = getCode(original[i]);
    const dst = getCode(changed[i]);
    const weight = cost[i];
    dist[src][dst] = Math.min(dist[src][dst], weight);
  }
  for (let k = 0; k < 26; k++) {
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < 26; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  for (let i = 0; i < source.length; i++) {
    if (source[i] != target[i]) {
      if (dist[getCode(source[i])][getCode(target[i])] == Infinity) {
        return -1;
      }
      result += dist[getCode(source[i])][getCode(target[i])];
    }
  }
  function getCode(ch) {
    return ch.charCodeAt(0) - "a".charCodeAt(0);
  }
  return result;
};
let source = "abcd";
let target = "fcbe";
let original = ["a", "a", "b", "c", "d", "e", "f"];
let changed = ["f", "b", "c", "d", "e", "f", "b"];
let cost = [100, 1, 1, 1, 1, 1, 1];

console.log(minimumCost(source, target, original, changed, cost));
