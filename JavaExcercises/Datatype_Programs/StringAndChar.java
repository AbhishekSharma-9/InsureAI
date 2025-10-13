package Infosys_SpringBoard.JavaExcercises.Datatype_Programs;

public class StringAndChar {
    public static void main(String[] args) {
        char grade = 'A';
        char currency = '$';

        String greeting = "Hello, World!";
        String name = "Karlo";

        String message = "My name is " + name + ".";

        System.out.println("Grade: " + grade);
        System.out.println("Greeting: " + greeting);
        System.out.println(message);

        char firstLetter = name.charAt(0);
        System.out.println("The first letter of " + name + " is " + firstLetter);
    }
}
