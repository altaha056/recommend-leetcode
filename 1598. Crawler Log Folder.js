var minOperations = function (logs) {
  let cur = [];
  for (let i = 0; i < logs.length; i++) {
    if (logs[i] == "./") continue;
    if (logs[i] == "../") {
      cur.pop();
      continue;
    }
    cur.push(logs[i]);
  }
  return cur.length;
};
let logs = ["d1/", "d2/", "../", "d21/", "./"];
console.log(minOperations(logs));
