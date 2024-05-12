// package leetcode.twoPointer.longestPalindrom;

class Solution {
    public boolean isPalindrome(String str, int start, int end) {

        while (start < end) {
            if (str.charAt(start) != str.charAt(end - 1)) {
                return false;
            }
            ++start;
            --end;
        }
        return true;
    }

    public String longestPalindrome(String s) {
        String longestSubString = "";
        int longestSubStringLength = 0;

        for (int i = 0; i < s.length(); i++) {
            for (int j = i + 1; j <= s.length(); j++) {
                if (isPalindrome(s, i, j)) {
                    if ((j - i + 1) > longestSubStringLength) {
                        longestSubString = s.substring(i, j);
                        longestSubStringLength = j - i;
                    }
                }
            }
        }
        return longestSubString;
    }

    public String longestPalindromeDP(String s) {
        int n = s.length();
        if (n <= 1)
            return s; // If the string is empty or has only one character, it's a palindrome itself

        boolean[][] dp = new boolean[n][n];
        int start = 0; // Start index of the longest palindrome substring found so far
        int maxLength = 1; // Length of the longest palindrome substring found so far

        // Initialize the dp array for single characters
        for (int i = 0; i < n; i++) {
            dp[i][i] = true;
        }

        // Check for substrings of length 2
        for (int i = 0; i < n - 1; i++) {
            if (s.charAt(i) == s.charAt(i + 1)) {
                dp[i][i + 1] = true;
                start = i;
                maxLength = 2;
            }
        }

        // Check for substrings of length 3 or more
        for (int len = 3; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                int j = i + len - 1;
                if (s.charAt(i) == s.charAt(j) && dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    if (len > maxLength) {
                        start = i;
                        maxLength = len;
                    }
                }
            }
        }

        return s.substring(start, start + maxLength);
    }
}

public class LongestPalindrom {

    public static void main(String a[]) {
        Solution sol = new Solution();
        // System.out.println(sol.isPalindrome("e", 0, 1));
        System.out.println(sol.longestPalindrome("babadd"));
    }
}