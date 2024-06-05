// package leetcode.string.fizz;

import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> fizzBuzz(int n) {

        List<String> result = new ArrayList<>(n);
        int i;
        for (i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                result.add("FizzBuzz"); // "FizzBuzz"
            } else if (i % 3 == 0) {
                result.add("Fizz"); // "Fizz"
            } else if (i % 5 == 0) {
                result.add("Buzz"); // "Buzz"
            } else {
                result.add(String.valueOf(i));
            }
        }

        return result;
    }
}

public class fizz {
    public static void main(String a[]) {
        Solution sol = new Solution();

        System.out.println(sol.fizzBuzz(3));
    }
}
