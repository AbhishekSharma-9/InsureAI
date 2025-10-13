package Infosys_SpringBoard.JavaExcercises.Arithmetic_Operators_Programs;

public class IncrementAssignment {
    public static void main(String[] args) {
        int score = 100;
        score += 50; 
        System.out.println("New score after += 50 is: " + score);

        int x = 5;
        System.out.println("Post-increment: y = x++");
        int y = x++;
        System.out.println("y is " + y); 
        System.out.println("x is now " + x); 

        int a = 5;
        System.out.println("\nPre-increment: b = ++a");
        int b = ++a;
        System.out.println("b is " + b);
        System.out.println("a is now " + a);
    }
}
