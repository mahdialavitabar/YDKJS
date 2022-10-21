function foo(a) {
    console.log(a)
}
foo(2)

function foo1(d) {
    var b = d;
    return d + b
}
var c = foo1(20)
console.log(c);
//nested scope
function foo2(e) {
    console.log(e + b);
}
var b = 2
foo2(2) //4

function foo3(a) {
    console.log(a + b);
    b = a
}
foo3(2)

