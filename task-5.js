//employee
class Employee{
    constructor(name, salary, time){
        this.name = name;
        this.salary = salary;
        this.time = time;
    }
}

//create some employees
const firstEmployee = new Employee('Kamran', 3500, new Date('2020-01-20'));
const secondEmployee = new Employee('Farhad', 4000, new Date('2018-03-22'));

//list of employees
const employees = [firstEmployee, secondEmployee];

//manager
class Manager extends Employee{
    hire(name, salary, time){
        employees.push(new Employee(name, salary, time));
    }
}

//create a manager
const manager = new Manager('Turxay', 15000, new Date('2017-00-23'));

//hire an employee
manager.hire('Ali', 2700, new Date('2022-11-13'));

//print employees
employees.forEach(element => {
    console.log(`Employee name: ${element.name}\nEmployee salary: ${element.salary}\nEmployee join date: ${element.time}`);
});