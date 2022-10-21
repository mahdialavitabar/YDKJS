(function IIFE(params) {
    console.log("hello");
}) ()
//Hello

var a=42;
(function IIFE(params) {
    var a = 10;
    console.log(a);
})()
console.log(a)

var x = (function IIFE(params) {
    return 42;
})()
x;