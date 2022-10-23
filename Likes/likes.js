console.log("Page loading...");

var likeCount= [9,12,10]
var spanlikes= [
    document.querySelector("#num1"),
    document.querySelector("#num2"),
    document.querySelector("#num3"),
];
function like(id) {
    likeCount[id]++;
    spanlikes[id].innerHTML=likeCount[id];
}