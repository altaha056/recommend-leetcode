var maxProbability = function (n, edges, succProb, start_node, end_node) {
  let maxProb = new Array(n).fill(0.0);
  maxProb[start_node] = 1.0;

  for (let i = 0; i < n - 1; i++) {
    let updated = false;
    for (let j = 0; j < edges.length; j++) {
      let u = edges[j][0];
      let v = edges[j][1];
      let prob = succProb[j];

      if (maxProb[u] * prob > maxProb[v]) {
        maxProb[v] = maxProb[u] * prob;
        updated = true;
      }
      if (maxProb[v] * prob > maxProb[u]) {
        maxProb[u] = maxProb[v] * prob;
        updated = true;
      }
    }
    if (!updated) break;
  }

  return maxProb[end_node];
};
let n = 3;
let edges = [
  [0, 1],
  [1, 2],
  [0, 2],
];
let succProb = [0.5, 0.5, 0.2];
let start = 0;
let end = 2;

console.log(maxProbability((n, edges, succProb, start, end)));
