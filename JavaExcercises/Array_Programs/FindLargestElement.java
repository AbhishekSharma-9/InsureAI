package Infosys_SpringBoard.JavaExcercises.Array_Programs;

public class FindLargestElement {
    public static void main(String[] args) {
        int[] numbers = {25, 11, 7, 75, 56, 98, 42};

        int max = numbers[0];

        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }

        System.out.println("The largest number in the array is: " + max);
    }
}
