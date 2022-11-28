class Employee {
    public firstName: string;
    public lastName: string;
    public designation: string;

    public Print(): void {
        console.log("Employee details");
    }
}

class Manger extends Employee {

    // constructor 
    constructor(firstName: string, lastName: string, designation: string) {
        // calling parent class constructor.
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    // overriding parent class print method .
    public Print(): void {
        super.Print()        //when u  r calling method from parent class to child that time we have to use super.print()
        
        console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
    }
}

class Lead extends Employee {

    // constructor 
    constructor(firstName: string, lastName: string, designation: string) {
        // calling parent class constructor.
        super();           //   when u  r calling constuctor  from parent class to child that time we have to use super.print()

        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    // overriding parent class print method .
    public Print(): void {
        super.Print()
        console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
    }
}

class Developer extends Employee {

    // constructor 
    constructor(firstName: string, lastName: string, designation: string) {
        // calling parent class constructor.
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    // overriding parent class print method .
    public Print(): void {
        super.Print()
        console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);
    }
}


let employees: Employee[] = new Array(new Manger("Jack", "Sparrow", "Manger"), new Lead("Sumit", "Pande", "Lead"), new Developer("Dnyanesh", "Surya", "Developer"));

for(var emp of employees) {
    emp.Print();
}