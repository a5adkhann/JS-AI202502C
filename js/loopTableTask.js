// console.log("Loop Table Task");

let userInput = prompt("Enter a Number");
let result = 0;

document.write("Multiplication Table For: ", userInput + "<br>");

for(let i = 1; i<=10; i++){
    result = userInput * i;
    document.write(userInput + " X "+ i+ " = "+ result + "<br>");
}


