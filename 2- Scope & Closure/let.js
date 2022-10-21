var foo = true
if (foo) {
    let bar = foo * 2
    bar = something(bar)
    console.log(bar);
}
console.log(bar); //ReferenceError

//explicit blocks
var foo = true
if(foo) {
    { //explicit block
let bar = foo * 2
bar = something(bar)
console.log(bar);
    }
}
console.log(bar); //ReferenceError
//let hoisting
{
    console.log(bar); //ReferenceError
    let bar = 2
}