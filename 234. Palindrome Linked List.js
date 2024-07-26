class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var isPalindrome = function (head) {
  let arr = [];
  while (head != null) {
    arr.push(head.val);
    head = head.next;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    console.log(arr[left], arr[right]);
    if (arr[left] != arr[right]) return false;
    left++;
    right--;
  }
  return true;
};

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(2);
let node5 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function printList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

console.log(isPalindrome(node1));
// printList(node1);
