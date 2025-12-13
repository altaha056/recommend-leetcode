var validateCoupons = function (code, businessLine, isActive) {
  let e = [];
  let g = [];
  let p = [];
  let r = [];
  const regex = /^[A-Za-z0-9_]+$/;
  for (let i = 0; i < code.length; i++) {
    if (regex.test(code[i]) && isActive[i]) {
      switch (businessLine[i]) {
        case "electronics":
          e.push(code[i]);
          break;
        case "grocery":
          g.push(code[i]);
          break;
        case "pharmacy":
          p.push(code[i]);
          break;
        case "restaurant":
          r.push(code[i]);
          break;
        default:
          break;
      }
    }
  }
  e.sort();
  g.sort();
  p.sort();
  r.sort();
  return [...e, ...g, ...p, ...r];
};
const code = [
  "pBXoMqBU0_aMgc9F8dy6TaSzza3KjSJFjxZa_NuyMjzEBR7fJNwpGHh7lzuoZvQeEUeo6YumHmIOjjchXlzSVa4ItdyDOImQgm",
  "P8rIIUl35MW8yrqRbO0N_IITptYOxz9tOCbPL6d1aIF_hM2sapaDtUzNpmAZRmJQB1WgjLh8bdYADuSRSU21OzttUkq73qiA66",
  "aFWkYookQlHYMXzhVGxbnrXIl1810ws3qHtketHSECHqJoktWXVZGc6ZyeOuzA_VL9zFL9znpIHwbkwJF2bOPQqsz3_0PYgETJ",
];
const businessLine = ["pharmacy", "invalid", "pharmacy"];
const isActive = [true, true, true];
console.log(validateCoupons(code, businessLine, isActive));
