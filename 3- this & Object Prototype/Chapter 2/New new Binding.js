function foo(something) {
  this.a = something;
}
var obj1 = {
  foo: foo,
};
var obj2 = {};
obj1.foo(2);
console.log(obj1.a); //2
obj1.foo.call(obj2, 3);
console.log(obj2.a); //3
var bar = new obj1.foo(4);
console.log(obj1.a); //2
console.log(bar.a); //4
//...
function foo(something) {
  this.a = something;
}
var obj1 = {};
var bar = foo.bind(obj1); //hard binding
bar(2);
console.log(obj1.a);
var baz = new bar(3); //new binding
console.log(obj1.a); //2
console.log(baz.a); //3
//fake binding
function bind(fn, obj) {
  return function () {
    fn.apply(obj, arguments);
  };
}
