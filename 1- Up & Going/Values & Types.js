
var a;
typeof a;
// undefined
a = "hello world";
typeof a;
// string
a = 42;
typeof a;
//number
a=true;
typeof a;
// boolean
a = null;
typeof a;
// object
a = undefined;
typeof a;
// undefined
a = { b : "c"}
typeof a;
// object
//arrays
var arr = [
    "hello world",
    42,
    true
]
typeof arr;
//objects
var obj = {
    a : "hello world",
    b : 42,
    c : true
}
obj.a;
obj.b;
obj.c;
obj["a"]
obj['b']
obj['c']

// bracket notation 
var obj1 = {
    d : 'hello world',
    f : 42
}
var f = "d"
obj1[f] //hello world
obj1["f"] //42
//Functions
function foo() {
    return 42;
}
foo.bar = "hello world";
typeof foo; //"function"
typeof foo(); //"number"
typeof foo.bar; //"string"
// Builtin Types Methods
var a = "hello world";
var b = 3.14152;
a.length; // 11
a.toUpperCase() //HELLO WORLD
b.toFixed(4); //"3.1415"