package Infosys_SpringBoard.JavaExcercises.Looping_Programs;

public class ForLoopTable {
    public static void main(String[] args) {
        int number = 5;
        System.out.println("Multiplication Table for " + number);
        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }
    }
}
