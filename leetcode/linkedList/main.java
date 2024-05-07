
// Definition for singly-linked list.
class ListNode {
    int val;
    ListNode next;

    ListNode() { // Default Constructor
    }

    ListNode(int val) { // Parameterized Constructor
        this.val = val;
    }

    ListNode(int val, ListNode next) { // Parameterized Constructor (2 parameter)
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode result = new ListNode(0);
        
        int carry = 0;
        ListNode c1 = l1;
        ListNode c2 = l2;
        ListNode currNode = result;

        while (c1 != null || c2 != null || carry != 0) {
            int x = c1 != null ? c1.val : 0;
            int y = c2 != null ? c2.val : 0;

            // summing the values
            int sum = x + y + carry;

            System.out.println(sum + ":" + x + ":" + y);

            currNode.next = new ListNode(sum % 10);

            // setting the Carry
            carry = sum / 10;

            // preparing for next loop
            currNode = currNode.next;
            c1 = c1 != null ? c1.next : null;
            c2 = c2 != null ? c2.next : null;

        }

        return result.next;
    }
}

public class main {
    public static void main(String args[]) {
        ListNode list1 = new ListNode(2);
        list1.next = new ListNode(4);
        list1.next.next = new ListNode(3);

        ListNode list2 = new ListNode(5);
        list2.next = new ListNode(6);
        list2.next.next = new ListNode(4);

        Solution sol = new Solution();

        ListNode result = sol.addTwoNumbers(list1, list2);

        System.out.println(list1);
        System.out.println(list2);
        System.out.println(result);
    }
}