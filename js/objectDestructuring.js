// console.log("Object Destructuring");

const employee = {
    employee_id : 1,
    employee_name : "Ali",
    employee_email : "ali@gmail.com"
}

// console.log(employee.employee_email);

const {employee_name} = employee;

console.log(employee_name);