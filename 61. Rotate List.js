class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var rotateRight = function (head, k) {
  if (!head || k == 0) return head;
  let arr = [];
  let check = head
  while (check != null) {
    arr.push(check.val);
    check = check.next;
  }
  let len = arr.length;
  if (len == 0 || len == 1 || k == 0) return head;
  k = k % len;
  arr = [...arr.slice(len - k, len), ...arr.slice(0, len - k)];

  let ans = new ListNode(arr[0]);
  let cur = ans;
  for (let i = 1; i < len; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return ans;
};

let head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
);
let k = 2;
console.log(rotateRight(head, k));
