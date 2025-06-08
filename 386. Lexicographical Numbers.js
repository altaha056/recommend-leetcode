var lexicalOrder = function (n) {
  let arr = [];
  const dfs = (cur) => {
    if (cur > n) return;
    arr.push(cur);
    for (let i = 0; i < 10; i++) {
      const next = cur * 10 + i;
      if (next > n) return;
      dfs(next);
    }
  };
  for (let i = 1; i < 10; i++) {
    dfs(i);
  }
  return arr;
};
console.log(lexicalOrder(13));
