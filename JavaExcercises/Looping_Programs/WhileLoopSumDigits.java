package Infosys_SpringBoard.JavaExcercises.Looping_Programs;

public class WhileLoopSumDigits {
    public static void main(String[] args) {
        int number = 12345;
        int sum = 0;
        int tempNumber = number;

        while (tempNumber > 0) {
            int digit = tempNumber % 10; 
            sum += digit;                
            tempNumber /= 10;           
        }

        System.out.println("The sum of the digits of " + number + " is " + sum);
    }
}
