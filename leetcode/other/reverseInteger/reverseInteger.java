// package leetcode.other.reverseInteger;

class Solution {
    public int reverse(int x) {
        long result = 0;
        while (x != 0) {
            result = result * 10 + x % 10;
            if (result > Integer.MAX_VALUE || result < Integer.MIN_VALUE) {
                return 0;
            }
            x = x / 10;

        }
        return (int) result;
    }
}

public class reverseInteger {
    public static void main(String[] args) {
        Solution sol = new Solution();

        System.out.println(sol.reverse(123));
    }
}
