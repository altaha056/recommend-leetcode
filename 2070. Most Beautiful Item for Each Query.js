/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */ var maximumBeauty = function (items, queries) {
  // Sort items by their first element in ascending order and maximize the beauty values
  items.sort((a, b) => a[0] - b[0]);
  let maxBeauty = 0;
  for (let i = 0; i < items.length; i++) {
    maxBeauty = Math.max(maxBeauty, items[i][1]);
    items[i][1] = maxBeauty;
  }

  // Function for binary search
  function binarySearch(target) {
    let left = 0;
    let right = items.length - 1;
    let bestIndex = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (items[mid][0] <= target) {
        bestIndex = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return bestIndex;
  }

  // Compute the result for each query using binary search
  const ans = [];
  for (let i = 0; i < queries.length; i++) {
    const index = binarySearch(queries[i]);
    if (index === -1) {
      ans.push(0);
    } else {
      ans.push(items[index][1]);
    }
  }
  return ans;
};

const items = [[10, 1000]];
const queries = [5];
console.log(maximumBeauty(items, queries));
