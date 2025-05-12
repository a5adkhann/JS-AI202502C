// console.log("Get Elements By Tag Name Method of DOM in JS");

const para = document.getElementsByTagName("p");
// console.log(para);

let i = 0;
do {
    console.log(para[i].innerHTML);
    i++
}
while(i<=3);
