var lengthOfLongestSubstring = function (s) {
  let p1 = 0;
  let p2 = 1;
  let longestLen = 1;
  let currSubString;
  let currLen;

  // edge case
  if (!s) {
    return 0;
  }

  while (p2 < s.length) {
    // when both on the same spot
    if (p2 === p1) {
      p2++;
      if (p2 >= s.length) {
        break;
      }
    }

    currSubString = s.slice(p1, p2);
    if (currSubString.includes(s[p2])) {
      ++p1;
    } else {
      ++p2;
      currLen = p2 - p1;
      if (currLen > longestLen) {
        longestLen = currLen;
      }
    }
  }

  return longestLen;
};

// console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
// console.log(lengthOfLongestSubstring('pwwkew'));
