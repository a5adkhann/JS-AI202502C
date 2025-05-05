// console.log("Designation Task in JS using switch case statements");

let designation = prompt("Enter your designation to check you salary");

switch(designation){
    case "Manager":
        alert("The salary of manager is 80K");
        break;
    case "Developer":
        alert("The salary of developer is 55K");
        break;
    case "HR Head":
        alert("The salary of HR Head is 45K");
        break;
    case "SQA Engineer":
        alert("The salary of manager is 30K");
        break;
    default: 
        alert("No designation matched");
}