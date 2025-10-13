package Infosys_SpringBoard.JavaExcercises.Class_and_Object_Programs;

class Car {
    private String make;
    private String model;
    private int year;

    public void setMake(String make) {
        this.make = make;
    }

    public String getMake() {
        return make;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getModel() {
        return model;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getYear() {
        return year;
    }
}

public class EncapsulationDemo {
    public static void main(String[] args) {
        Car myCar = new Car();

        myCar.setMake("Toyota");
        myCar.setModel("Camry");
        myCar.setYear(2022);

        System.out.println("Car Make: " + myCar.getMake());
        System.out.println("Car Model: " + myCar.getModel());
        System.out.println("Car Year: " + myCar.getYear());
    }
}
