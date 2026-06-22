var maxNumberOfBalloons = function (text) {
  let max = 0;
  const obj = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };
  for (let i = 0; i < text.length; i++) {
    if (obj[text[i]] != null) {
      obj[text[i]]++;
    }
  }
  let min = Math.min(...Object.values(obj));
  let l = Math.floor(obj["l"] / 2);
  let o = Math.floor(obj["o"] / 2);
  max = Math.min(min, l, o);

  return max;
};
const text = "ballon";
console.log(maxNumberOfBalloons(text));
