a = 2
var a 
console.log(a);


console.log(a); //undefined
var a = 2 

foo()
function foo() {
    console.log(a); //undefined
    var a = 2
}
function foo() {
    var a 
    console.log(); //undefined
    a = 2
}
foo()

//typeerror
foo() //not ReferenceError but TypeError
var foo = function bar() {
    //...
}

//...
foo() //TypeError
bar() //ReferenceError
foo = function () {
    var bar = self
    //...
}
//Functions First:
foo() //1
var foo
function foo() {
    console.log(1);
}
foo = function () {
    console.log(2);
}
function foo() {
    console.log(1);
}
foo() //1
foo = function () {
    console.log(2);
}
foo() //3
function foo() {
    console.log(1);
}
var foo = function () {
    console.log(2);
}
function foo() {
    console.log(3);
}
//...
foo() //"b"
var a = true
if(a) {
    function foo() {
        console.log("a");
    }
} 
else {
    function foo() {
        console.log("b");
    }
}