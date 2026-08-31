class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var nodesBetweenCriticalPoints = function (head) {
  let prev = head,
    curr = head.next;
  let nxt = head.next.next;
  let min = 100000,
    i = 1;
  const c = [0, 0];
  const isCric = (a, b, c) => (b.val - a.val) * (b.val - c.val) > 0;
  while (nxt) {
    if (isCric(prev, curr, nxt)) {
      if (c[0]) {
        min = Math.min(min, i - c[1]);
      } else c[0] = i;
      c[1] = i;
    }
    [prev, curr, nxt] = [curr, nxt, nxt.next];
    i++;
  }
  if (c[0] === c[1]) return [-1, -1];
  return [min, c[1] - c[0]];
};

const head = new ListNode(
  5,
  new ListNode(
    3,
    new ListNode(
      1,
      new ListNode(2, new ListNode(5, new ListNode(1, new ListNode(2, null)))),
    ),
  ),
);

console.log(nodesBetweenCriticalPoints(head));
