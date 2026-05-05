class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var rotateRight = function (head, k) {
  if (!head) return null;

  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }
  k = k % length;

  if (k === 0) return head;
  tail.next = head;

  let stepsToNewHead = length - k;
  let newTail = head;
  for (let i = 1; i < stepsToNewHead; i++) {
    newTail = newTail.next;
  }
  const newHead = newTail.next;
  newTail.next = null;
  return newHead;
};

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))),
);
const k = 2;

console.log(rotateRight(head, k));
