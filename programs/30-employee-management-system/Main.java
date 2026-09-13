public class Main {
    public static void main(String[] args) {
        Employee emp = new Employee("Rahul", 30000);
        Manager mgr = new Manager("Priya", 50000, 10000);
        System.out.println(emp.name + "'s salary: " + emp.calculateSalary());
        System.out.println(mgr.name + "'s salary: " + mgr.calculateSalary());
    }
}

class Employee {
    String name;
    double baseSalary;

    Employee(String name, double baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    double calculateSalary() { return baseSalary; }
}

class Manager extends Employee {
    double bonus;

    Manager(String name, double baseSalary, double bonus) {
        super(name, baseSalary);
        this.bonus = bonus;
    }

    @Override
    double calculateSalary() { return baseSalary + bonus; }
}
