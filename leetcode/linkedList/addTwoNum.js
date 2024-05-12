function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0);
  let r = result;

  let carry;
  let currNode1 = l1;
  let currNode2 = l2;
  while (currNode1 || currNode2 || carry) {
    let wNum = (currNode1?.val || 0) + (currNode2?.val || 0) + (carry || 0);

    carry = Math.floor(wNum / 10);

    let newNode = new ListNode(wNum % 10);

    r.next = newNode;

    r = r.next;
    currNode1 = currNode1?.next || null;
    currNode2 = currNode2?.next || null;
  }

  return result.next;
};

const list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);

const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);

console.log(addTwoNumbers(list1, list2));
