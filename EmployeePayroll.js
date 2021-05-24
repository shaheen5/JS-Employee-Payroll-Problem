class EmployeePayrollData {
    //property
    id;
    name;
    salary;
    gender;
    startDate;

    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter method
    get name(){ return this.name;}
    set name(name) {
        this.name = name;
    }

    toString(){
        const options = { year:'numeric',month:'long',day:'long'}
        const empDate = this.startDate === undefined ? "undefined" :
                        this.startDate.toLocaleDateString("en-US",options);
        return "id="+this.id+", name="+this.name+", salary="+
        this.salary+", gender="+this.gender+", startDate="+this.startDate;
    }
}
let employeePayrollData = new EmployeePayrollData(1,"Mark",300000);
console.log(employeePayrollData);
employeePayrollData.name="Shaheen";
console.log(employeePayrollData);
let newEmployeePayrollData = new EmployeePayrollData(2,"John",400000,'M',new Date());
console.log(newEmployeePayrollData);