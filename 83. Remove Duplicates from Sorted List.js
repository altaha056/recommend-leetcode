class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3))));

var deleteDuplicates = function (head) {
  let current = head;
  while (current != null && current.next != null) {
    if (current.val == current.next.val) {
      current.next = current.next.next;
    }else current = current.next;
  }
  return head;
};

console.log(deleteDuplicates(head));
