function foo() {
    foo.count = 4 //foo refers to itself
}
setTimeout(function () {
    //anonymous function (no name) , cannot refer to itself
}, 10)

// another solution:
function foo(num) {
    console.log("foo: " + num);
    //keep track of how many times 'foo' is called
    foo.count++
}
foo.count = 0
var i 
for (let i = 0; i < 10; i++) {
if(i > 5){
foo(i)
}
}
//foo: 6
//foo: 7
//foo: 8
//foo: 9
// how many times was 'foo' called?
console.log(foo.count); //4

//forcing this to point at the foo function object
function foo(num) {
    console.log("foo: " + num);
    //keep track of how many times 'foo' is called, not: "this" is actually 'foo' now based on how 'foo' is called
    this.count++
}
foo.count = 0
var i 
for (let i = 0; i < 10; i++) {
if(i > 5) {
    //using call(..) we ensure the 'this' points at the function object('foo') itself
    foo.call(foo,i)
}
}
//foo: 6
//foo: 7
//foo: 8
//foo: 9
// how many times was 'foo' called?
console.log(foo.count); //4