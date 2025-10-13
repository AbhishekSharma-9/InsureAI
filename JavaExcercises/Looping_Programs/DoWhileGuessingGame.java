package Infosys_SpringBoard.JavaExcercises.Looping_Programs;

import java.util.Scanner;

public class DoWhileGuessingGame {
    public static void main(String[] args) {
        int secretNumber = 7;
        int userGuess;
        Scanner scanner = new Scanner(System.in);

        do {
            System.out.print("Guess the secret number (1-10): ");
            userGuess = scanner.nextInt();
        } while (userGuess != secretNumber);

        System.out.println("Congratulations! You guessed the number correctly.");
        scanner.close();
    }
}
