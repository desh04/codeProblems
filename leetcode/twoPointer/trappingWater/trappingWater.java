// package leetcode.twoPointer.trappingWater;

class Solution {
    public int trapWater(int[] waterColumn) {
        // complexcity O(N^2)
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

    public int trappingWaterTwoPointer(int[] waterColumn) {
        int p1 = 0;
        int p2 = waterColumn.length - 1;

        int left_max = 0;
        int right_max = 0;

        int trappedWater = 0;

        System.out.println(p1 + p2);

        // <= cause at last both could be at same place and we will want to calculate
        // for that point also
        while (p1 <= p2) {
            if (left_max <= right_max) {
                System.out.println("p1 enter -----> " + p1);
                // minimum of the left_max and right_max,
                // in this if condition block left max will always be less of equal to the right
                // max
                trappedWater += (left_max - waterColumn[p1]) > 0 ? (left_max - waterColumn[p1]) : 0;

                if (waterColumn[p1] > left_max) {
                    left_max = waterColumn[p1];
                }

                ++p1;
                System.out.println("p1 EXIT -----> " + p1);
                continue;
            }

            if (left_max > right_max) {
                System.out.println("went to second loop");
                trappedWater += (right_max - waterColumn[p2]) > 0 ? (right_max - waterColumn[p2]) : 0;

                if (waterColumn[p2] > right_max) {
                    right_max = waterColumn[p2];
                }

                --p2;
                continue;
            }
            System.out.println("went till last");

        }

        return trappedWater;
    }
}

public class trappingWater {
    public static void main(String[] args) {
        Solution sol = new Solution();

        int[] firstSet = { 4, 2, 0, 3, 2, 5 };

        System.out.println("ANSWER ++>" + sol.trapWater(firstSet));
        System.out.println("ANSWER ++>" + sol.trappingWaterTwoPointer(firstSet));
    }
}