for (let i = 0; i < 10; i++) {
console.log(i);    
}
console.log(i); //ReferenceError

{
    let j 
    for (let j = 0; j < 10; j++) {
let i = j //rebound for each iteration
console.log(i);        
    }
}
var foo = true,baz = 10
if (foo) {
    var bar = 3
    if(baz > bar) {
        console.log(baz);
    }
    //...
}
//refactored
var foo = true, baz = 10
if(foo) {
    var bar = 3
    //...
}
if(baz > bar) {
    console.log(baz);
}
//careful with block scoping variables
var foo = true, baz = 10
if (foo) {
    let bar = 3
    if (bar > baz) { //dont forget bar when moving
        console.log(baz);
    }
}