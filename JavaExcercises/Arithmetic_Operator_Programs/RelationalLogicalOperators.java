package Infosys_SpringBoard.JavaExcercises.Arithmetic_Operators_Programs;

public class RelationalLogicalOperators {
    public static void main(String[] args) {
        int age = 25;
        boolean hasLicense = true;

        System.out.println("Is age greater than 18? " + (age > 18));
        System.out.println("Is age equal to 25? " + (age == 25));

        if (age >= 18 && hasLicense) {
            System.out.println("You are eligible to drive.");
        }

        int hour = 14;
        if (hour < 9 || hour > 17) {
            System.out.println("The office is closed.");
        }
    }
}
