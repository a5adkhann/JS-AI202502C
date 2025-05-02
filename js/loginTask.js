// console.log("Login Task in JS");

// prompt("Enter your name", "Ali");

let email = "abc@gmail.com";
let password = 123;

let userEmail = prompt("Enter Your Email");
let userPassword = prompt("Now, enter Your Password");

if(email == userEmail && password == userPassword){
    alert("Logged in successfully");
    location.assign("../index.html");
}
else {
    alert("Invalid Credentials");
}



