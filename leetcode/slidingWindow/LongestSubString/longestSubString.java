package leetcode.slidingWindow.LongestSubString;
import java.util.HashSet;

class Solution {
    public int longestSubString(String s) {
        int p1 = 0;
        int p2 = 0;
        int maxLen = 0;
        int currLen = 0;
        HashSet<Character> subString = new HashSet<>();

        while (p2 < s.length()) {
            if (subString.contains(s.charAt(p2))) {
                subString.remove(s.charAt(p1));
                ++p1;
            } else {
                subString.add(s.charAt(p2));
                ++p2;
                currLen = p2 - p1;
                if (currLen > maxLen) {
                    maxLen = currLen;
                }
            }
        }

        return maxLen;
    }
}

public class longestSubString {

    public static void main(String[] args) {
        Solution sol = new Solution();

        System.out.println(sol.longestSubString("abcabcbb"));
        System.out.println(sol.longestSubString("bbbbb"));
        System.out.println(sol.longestSubString("pwwkew"));
    }
}