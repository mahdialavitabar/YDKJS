var a = 2
function foo() { //insert this
    var a = 3
    console.log(a); //3
} //and this
foo() //and this
console.log(a); //2

//solution
var a = 2
(function foo1() { //insert this
    var a = 3
    console.log(a); //3
})() //and this
console.log(a); //2