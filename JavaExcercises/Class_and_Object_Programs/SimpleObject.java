class Dog {
    String breed;
    int age;

    void bark() {
        System.out.println("Woof! Woof!");
    }
}

public class SimpleObject {
    public static void main(String[] args) {
        Dog myDog = new Dog();

        myDog.breed = "Golden Retriever";
        myDog.age = 5;

        System.out.println("My dog is a " + myDog.breed);
        System.out.println("It is " + myDog.age + " years old.");

        myDog.bark();
    }
}
