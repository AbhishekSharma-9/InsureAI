package Conditionals_Loops_03.Intermediate_Java_Programs;
import java.util.Scanner;
public class Print_Negative_Positive_Even_and_odd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Numbers (To stop enter 0) : ");
        int n,sumPosev=0,sumNegative=0,sumPosodd=0;
        do{
            n = sc.nextInt();
            if(n>0 && n%2==0){
                sumPosev += n;
            } else if (n>0) {
                sumPosodd += n;
            }
            else{
                sumNegative += n;
            }
        }while(n!=0);
        System.out.println("The Sum of Negative Numbers : "+sumNegative);
        System.out.println("The Sum of Positive Even Numbers : "+sumPosev);
        System.out.println("The Sum of Positive Odd Numbers : "+sumPosodd);
    }
}
