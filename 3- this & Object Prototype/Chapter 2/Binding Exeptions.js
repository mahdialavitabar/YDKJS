function foo() {
  console.log(this.a);
}
var a = 2;
foo.call(null); //2
//...
function foo(a, b) {
  console.log("a:" + a + "b:" + b);
}
//spreading out array as parameters
foo.apply(null, [2, 3]); //a:2,b:3
//carrying with bind()
var bar = foo.bind(null, 2);
bar(3); //a:2,b:3
