package Infosys_SpringBoard.JavaExcercises.Datatype_Programs;

public class TypeCasting {
    public static void main(String[] args) {
        int Int = 9;
        double Double = Int;

        System.out.println("--- Widening Casting ---");
        System.out.println("Original int: " + Int);
        System.out.println("Casted double: " + Double);

        double twoDouble = 9.78;
        int twoInt = (int)twoDouble;

        System.out.println("\n--- Narrowing Casting ---");
        System.out.println("Original double: " + twoDouble);
        System.out.println("Casted int (data loss): " + twoInt);
    }
}
