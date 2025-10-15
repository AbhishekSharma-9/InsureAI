package Striver.Array;

import java.util.ArrayList;
import java.util.Arrays;

public class Find_Missing_Number {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 6, 7, 5, 7};
        System.out.println(Arrays.toString(findMissingRepeatingNumbers(arr)));
    }

    public static int[] findMissingRepeatingNumbers(int[] nums) {
        int j = 0;
        while (j < nums.length) {
            int correct = nums[j] - 1;
            if (nums[j] != nums[correct]) {
                int temp = nums[j];
                nums[j] = nums[correct];
                nums[correct] = temp;
            } else {
                j++;
            }
        }
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            if(nums[i]!=i+1){
                list.add(nums[i]);
                list.add(i+1);
            }
        }
        int[] help = new int[list.size()];
        for (int i = 0; i < help.length; i++) {
            help[i] = list.get(i);
        }
        return help;
    }
}
