class EmployeePayrollData {
    //property
    id;
    name;
    salary;

    //constructor
    constructor(id,name,salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    //getter and setter method
    get name(){ return this.name;}
    set name(name) {
        this.name = name;
    }

    toString(){
        return "id="+this.id+", name="+this.name+", salary="+
        this.salary;
    }
}
let employeePayrollData = new EmployeePayrollData(1,"Mark",300000);
console.log(employeePayrollData);
employeePayrollData.name="Shaheen";
console.log(employeePayrollData);