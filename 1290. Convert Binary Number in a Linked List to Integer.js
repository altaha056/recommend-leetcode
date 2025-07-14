class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
var getDecimalValue = function (head) {
  let asd = 0;
  while (head != null) {
    asd = asd * 2 + head.val;
    head = head.next;
  }
  return asd;
};

let node = new ListNode(1);
let node3 = new ListNode(0, node);
let node2 = new ListNode(1, node3);
let node1 = new ListNode(1, node2);
console.log(getDecimalValue(node1));
