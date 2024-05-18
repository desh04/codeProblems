// package leetcode.twoPointer.trappingWater;

class Solution {
    public int trapWater(int[] waterColumn) {
        if (waterColumn.length <= 2) {
            // will require more that 2 column
            return 0;
        }

        int p1 = 0;
        int p2 = 1;

        int maxTillNow = p2;
        int sumBetween = 0;

        int water = 0;

        while (p2 < waterColumn.length) {
            if (waterColumn[p2] >= waterColumn[maxTillNow]) {
                maxTillNow = p2;
            }
            if (waterColumn[p2] >= waterColumn[p1]) {
                // This will be one container so will calculate water here

                // p1 will be smaller in this condition

                for (int i = p1 + 1; i < p2; i++) {
                    sumBetween += Math.min(waterColumn[i], waterColumn[p1]);
                }

                water += waterColumn[p1] * (p2 - p1 - 1) - sumBetween;

                // will prepare for the new run
                p1 = p2;
                ++p2;
                sumBetween = 0;

                maxTillNow = p2;

                continue;
            }

            if (p2 == waterColumn.length - 1) {
                // pointer reached till the last point and didn't find any big column
                // will check for the current start (p1) to MaxColumnTill last(maxTillNow)

                for (int i = p1 + 1; i < maxTillNow; i++) {
                    sumBetween += Math.min(waterColumn[i], waterColumn[maxTillNow]);
                }

                water += waterColumn[maxTillNow] * (maxTillNow - p1 - 1) - sumBetween;

                p1 = maxTillNow;
                p2 = maxTillNow + 1;
                sumBetween = 0;
                maxTillNow = p2;
                continue;
            }

            ++p2;
        }

        return water;
    }
}

public class trappingWater {
    public static void main(String[] args) {
        Solution sol = new Solution();

        int[] firstSet = { 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 };

        System.out.println("ANSWER ++>" + sol.trapWater(firstSet));
    }
}