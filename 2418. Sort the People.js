var sortPeople = function (names, heights) {
  names.forEach((e, i) => (names[i] = [e, heights[i]]));
  names.sort((b, a) => a[1] - b[1]);
  names.forEach((e, i) => (names[i] = names[i][0]));
  return names;
};
let names = ["Mary", "John", "Emma"];
let heights = [180, 165, 170];
console.log(sortPeople(names, heights));
