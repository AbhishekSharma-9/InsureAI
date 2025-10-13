package Infosys_SpringBoard.JavaExcercises.Class_and_Object_Programs;

class Student {
    String name;
    int rollNumber;
    
    Student(String studentName, int studentRoll) {
        name = studentName;
        rollNumber = studentRoll;
    }

    void displayInfo() {
        System.out.println("Name: " + name + ", Roll Number: " + rollNumber);
    }
}

public class ConstructorDemo {
    public static void main(String[] args) {
        Student student1 = new Student("Alice", 101);
        Student student2 = new Student("Bob", 102);

        student1.displayInfo();
        student2.displayInfo();
    }
}
