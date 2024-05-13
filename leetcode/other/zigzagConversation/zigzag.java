// package leetcode.other.zigzagConversation;

import java.util.ArrayList;
import java.util.Collection;

class Solution {
    public String zigzagConversation(String str, int row) {
        int strLength = str.length();
        // char[][] result = new char[row][strLength];
        Collection<Collection<String>> result = new ArrayList<>();
        for (int k = 0 ; k < row ; k ++) {
            result.add(new ArrayList<String>());
        }
        // String result = "";
        // for (int i = 0; i <= row; i++) {
        // for (int j = i; j < strLength; j = j + row + 1) {
        // result = result + str.charAt(j);
        // }
        // }

        int currRow = 0;

        for (int i = 0 ; i < strLength ; i++) {
            
        }

        

        return "hello";
    }
}

public class zigzag {
    public static void main(String[] args) {
        Solution sol = new Solution();

        System.out.println(sol.zigzagConversation("PAYPALISHIRING", 3));
    }
}
