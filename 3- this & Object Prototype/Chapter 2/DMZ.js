function foo(a, b) {
  console.log("a:" + a + "b:" + b);
}
//our DMZ empty object
var a = Object.create(null);
//spreading our array as parameters
foo.apply(null, [2, 3]); //a:2b:3
//carrying with bind()
var bar = foo.bind(null, 2);
bar(3); //a:2b:3
