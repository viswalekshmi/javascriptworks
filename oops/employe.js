class Employee{

    constructor(name,department,salary){

        this.name=name;
        this.department=department;
        this.salary=salary
    }

    printEmployee(){
        console.log(this.name,this.department,this.salary);
    }
}
