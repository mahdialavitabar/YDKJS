function foo(num) {
    console.log("foo: " + num);
// keep track of how many times 'foo' is called
this.count++
}
foo.count = 0
var i 
for (let i = 0; i < 10; i++) {
if(i > 5) {
    foo(i)
}
}
//foo: 6
//foo: 7
//foo: 8
//foo: 9
// hiw many times was 'foo' called?
console.log(foo.count);
// solution 1:
function foo(num) {
    console.log("foo: " + num);
    //keep track of how many times 'foo' is called
    data.count++
}
var data = {
    count: 0
}
var i 
for (let i = 0; i < 10; i++) {
if(i > 5) {
    foo(i)
}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// how many times was 'foo' called?
console.log(data.count); //4