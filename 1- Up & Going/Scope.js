function One() {
    var a = 1;
    console.log(a)
}
function Two() {
    var b = 2;
    console.log(b);
}
One();
Two();
//Nested Scope
function Outer() {
    var a = 1;
    function Inner() {
        b = 2;
        console.log(a + b);
    }
    Inner();
    console.log(a);
}
Outer();
// Lexical Scope
const tax = 0.05;
amount = 100;
function CalculateFinalAmount(amt) {
    amt = amt + (amt * tax)
    return amt;
}
amount = CalculateFinalAmount(amount);
console.log(amount);
