var asteroidCollision = function (asteroids) {
  let ans = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0) {
      ans.push(asteroids[i]);
    } else {
      if (ans[ans.length - 1] > 0) {
        while (true) {
          if (ans[ans.length - 1] > 0) {
            if (ans[ans.length - 1] + asteroids[i] > 0) {
              break;
            } else if (ans[ans.length - 1] + asteroids[i] < 0) {
              ans.pop();
            } else if (ans[ans.length - 1] + asteroids[i] === 0) {
              ans.pop();
              break;
            }
          } else {
            ans.push(asteroids[i]);
            break;
          }
        }
      } else {
        ans.push(asteroids[i]);
      }
    }
  }
  return ans;
};
let asteroids = [1, -2, -2, -2];
console.log(asteroidCollision(asteroids));
