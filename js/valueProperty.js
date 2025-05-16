// console.log("Value Property");

const myForm = document.getElementById("myForm");
const nameInput = document.getElementById("nameInput");
const myPara = document.getElementById("myPara");


myForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let fieldValue = nameInput.value;
    // console.log(fieldValue);
    // document.write(fieldValue);
    myPara.innerHTML = fieldValue;
})

