var readBinaryWatch = function (turnedOn) {
  const toBinary = (n) => n.toString(2).split(0).join("").length;
  let ans = [];
  for (let hour = 0; hour < 12; hour++) {
    for (let minute = 0; minute < 60; minute++) {
      if (toBinary(hour) + toBinary(minute) === turnedOn)
        ans.push(hour + ":" + (minute < 10 ? "0" + minute : minute));
    }
  }
  return ans;
};
console.log(readBinaryWatch(1));
