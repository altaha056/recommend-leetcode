var decrypt = function (code, k) {
  if (k == 0) return new Array(code.length).fill(0);

  const cLen = code.length;
  let cur = 0;
  const ans = [];

  if (k > 0) {
    code.push(...code.slice(0, k));
    for (let i = 1; i <= k; i++) {
      cur += code[i];
    }
    ans.push(cur);
    for (let i = 1; i < cLen; i++) {
      cur -= code[i];
      cur += code[i + k];
      ans.push(cur);
    }
  }

  if (k < 0) {
    const a = code.slice(cLen + k);
    a.push(...code);
    code = a;
    k = -k;
    for (let i = 0; i < k; i++) {
      cur += code[i];
    }
    for (let i = k; i < code.length; i++) {
      ans.push(cur);
      cur -= code[i - k];
      cur += code[i];
    }
  }
  return ans;
};
const code = [10, 8, 7, 7, 5, 3, 9, 6];
const k = 4;
console.log(decrypt(code, k));
