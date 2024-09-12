class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var spiralMatrix = function (m, n, head) {
  const ans = Array.from({ length: m }, () => Array(n).fill(-1));
  let topRow = 0;
  let bottomRow = m - 1;
  let leftCol = 0;
  let rightCol = n - 1;
  while (head) {
    for (let col = leftCol; col <= rightCol && head; col++) {
      ans[topRow][col] = head.val;
      head = head.next;
    }
    topRow++;
    for (let row = topRow; row <= bottomRow && head; row++) {
      ans[row][rightCol] = head.val;
      head = head.next;
    }
    rightCol++;
    for (let col = rightCol; col >= leftCol && head; col--) {
      ans[bottomRow][col] = head.val;
      head = head.next;
    }
    bottomRow--;
    for (let row = bottomRow; row >= topRow && head; row--) {
      ans[row][leftCol] = head.val;
      head = head.next;
    }
    leftCol++;
  }
  return ans;
};
const head = new ListNode(
  3,
  new ListNode(
    0,
    new ListNode(
      2,
      new ListNode(
        6,
        new ListNode(
          8,
          new ListNode(
            1,
            new ListNode(
              7,
              new ListNode(
                9,
                new ListNode(
                  4,
                  new ListNode(
                    2,
                    new ListNode(5, new ListNode(5, new ListNode(0)))
                  )
                )
              )
            )
          )
        )
      )
    )
  )
);
const m = 3;
const n = 5;
console.log(spiralMatrix(m, n, head));
