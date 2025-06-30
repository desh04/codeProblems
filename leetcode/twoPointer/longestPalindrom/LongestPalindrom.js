// LongestPalindrom.js
// Brute-force and DP solutions for longest palindromic substring

class Solution {
  // Helper to check if substring s[start...end-1] is a palindrome
  isPalindrome(str, start, end) {
    while (start < end) {
      if (str[start] !== str[end - 1]) {
        return false;
      }
      ++start;
      --end;
    }
    return true;
  }

  // Brute-force O(n^3) solution
  longestPalindrome(s) {
    let longestSubString = "";
    let longestSubStringLength = 0;
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        if (this.isPalindrome(s, i, j)) {
          if (j - i > longestSubStringLength) {
            longestSubString = s.substring(i, j);
            longestSubStringLength = j - i;
          }
        }
      }
    }
    return longestSubString;
  }

  // Dynamic Programming O(n^2) solution
  longestPalindromeDP(s) {
    const n = s.length;
    if (n <= 1) return s;
    const dp = Array.from({ length: n }, () => Array(n).fill(false));
    let start = 0;
    let maxLength = 1;
    // Single characters
    for (let i = 0; i < n; i++) dp[i][i] = true;
    // Substrings of length 2
    for (let i = 0; i < n - 1; i++) {
      if (s[i] === s[i + 1]) {
        dp[i][i + 1] = true;
        start = i;
        maxLength = 2;
      }
    }
    // Substrings of length >= 3
    for (let len = 3; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        let j = i + len - 1;
        if (s[i] === s[j] && dp[i + 1][j - 1]) {
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

// Example usage:
const sol = new Solution();
console.log(sol.longestPalindrome("babadd")); // Output: "baba" or "abba" depending on implementation
console.log(sol.longestPalindromeDP("babadd")); // Output: "bab" or "aba"
