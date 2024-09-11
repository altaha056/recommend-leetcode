class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var insertGreatestCommonDivisors = function (head) {
  var gcd = function (a, b) {
    while (b != 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  let dummy = new ListNode(0);
  dummy.next = head;
  let cur = head;

  while (cur != null && cur.next != null) {
    let nextNode = cur.next;
    let newNode = new ListNode(gcd(cur.val, nextNode.val));
    cur.next = newNode;
    newNode.next = nextNode;
    cur = nextNode;
  }

  return dummy.next;
};

const node = new ListNode(
  18,
  new ListNode(6, new ListNode(10, new ListNode(3, new ListNode(6))))
);
console.log(insertGreatestCommonDivisors(node));
