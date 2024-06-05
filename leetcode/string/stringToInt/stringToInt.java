// package leetcode.string.stringToInt;

class Solution {
    public int myAtoi(String s) {
        // using long so can catch if value is going beyond 32 bit
        long result = 0;
        boolean positive = true;

        boolean readingInitialize = false;
        for (int i = 0; i < s.length(); i++) {

            // we want '+' or '-' sign at the first only other wise if it is second or so on
            // will stop the reading
            if (s.charAt(i) == '-' && !readingInitialize) {
                positive = false;
                readingInitialize = true;
                continue;
            }
            if (s.charAt(i) == '+' && !readingInitialize) {
                readingInitialize = true;
                continue;
            }
            // skipping only initial spaces
            if (s.charAt(i) == ' ' && !readingInitialize) {
                continue;
            }

            // breaking out if getting any other character like 'a', 'b', 'C' etc
            if (Character.getNumericValue(s.charAt(i)) < 0 || Character.getNumericValue(s.charAt(i)) > 9) {
                break;
            }

            result = result * 10 + Character.getNumericValue(s.charAt(i));

            if (positive && result > Integer.MAX_VALUE) {
                return Integer.MAX_VALUE;
            }
            if (!positive && (result * -1) < Integer.MIN_VALUE) {
                return Integer.MIN_VALUE;
            }

            readingInitialize = true;
        }

        return positive ? (int) result : (int) result * -1;
    }
}

public class stringToInt {
    public static void main(String a[]) {
        Solution sol = new Solution();

        // System.out.println(sol.myAtoi(" 42"));
        // System.out.println(sol.myAtoi(" -042"));
        // System.out.println(sol.myAtoi(" 0-1"));
        System.out.println(sol.myAtoi("-91283472332"));
    }
}
