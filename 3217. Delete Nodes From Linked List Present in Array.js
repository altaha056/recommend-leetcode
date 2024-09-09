function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var modifiedList = function (nums, head) {
  let dummy = new ListNode(0);
  const numset = new Set(nums);
  dummy.next = head;
  let prev = dummy;
  let cur = head;
  while (cur != null) {
    if (numset.has(cur.val)) {
      prev.next = cur.next;
    } else {
      prev = cur;
    }
    cur = cur.next;
  }

  return dummy.next;
};

const nums = [1, 2, 3];
const node = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.log(modifiedList(nums, node));
