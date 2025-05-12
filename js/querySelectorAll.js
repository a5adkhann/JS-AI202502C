// console.log("Query Selector All Method of DOM in JS");

const items = document.querySelectorAll(".item");
// console.log(items);

let i = 0;
while(i<=3){
    console.log(items[i].innerHTML);
    i++
}