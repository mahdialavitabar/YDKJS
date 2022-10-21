//eval
function foo(str , a) {
    eval(str) //cheating
    console.log(a , b);
}
var b = 2
foo("var b=3" , 1) //1 3

//strict mode

function foo1(str) {
    "use strict"
    eval(str)
    console.log(a);
}
foo("var a = 2")
//with
var obj = {
    a : 1,
    b : 2,
    c : 3
}
obj.a = 2
obj.b = 3
obj.c = 4
//easier shorthand
with(obj) {
    a = 3
    b = 4
    c = 5
}

//more of with work
function foo3(obj) {
    with(obj) {
        a = 2
    }
}
var o1 = {
    a : 3
}
var o2 = {
    b : 3
}
foo3(o1)
console.log(o1.a) //2
foo3(o2)
console.log(o2.a); //undefined
console.log(a); //2 --oops, leaked global