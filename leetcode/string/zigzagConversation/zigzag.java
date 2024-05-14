// package leetcode.other.zigzagConversation;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

class Solution {
    public String zigzagConversation(String str, int row) {
        if (row == 1 || row >= str.length()) {
            return str;
        }

        int idx = 0, direction = 1;

        List<Character>[] result = new ArrayList[row];
        // initializing every value as array
        for (int i = 0; i < row; i++) {
            result[i] = new ArrayList<>();
        }

        for (int k = 0; k < str.length(); k++) {
            result[idx].add(str.charAt(k));

            if (idx == 0) {
                direction = 1;
            } else if (idx == row - 1) {
                direction = -1;
            }
            idx += direction;
        }

        StringBuilder resultStr = new StringBuilder();
        for (List<Character> charRow : result) {
            for (Character character : charRow) {
                resultStr.append(character);
            }
        }

        return resultStr.toString();
    }
}

public class zigzag {
    public static void main(String[] args) {
        Solution sol = new Solution();

        System.out.println(sol.zigzagConversation("PAYPALISHIRING", 3));
    }
}
