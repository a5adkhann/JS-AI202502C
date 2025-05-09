// console.log("For In Loop in JS");
// This is for objects
const employee = {
    employee_id : 1,
    employee_name : "Ali",
    employee_email : "ali@gmail.com"
}

// console.log(employee.employee_id)
// console.log(employee.employee_name)
// console.log(employee.employee_email)

for(const key in employee){
    // console.log(key);
    console.log(employee[key])
}