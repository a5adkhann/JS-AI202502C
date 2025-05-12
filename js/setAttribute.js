// console.log("Set Attribute Method in DOM");

const myLink = document.querySelector("a");
const productImage = document.getElementById("productImage");
// console.log(myLink);
myLink.setAttribute("href", "https://www.google.co.uk/");
myLink.setAttribute("target", "_blank");

productImage.setAttribute("src", "product1.jpg");
