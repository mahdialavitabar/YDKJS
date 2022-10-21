function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
};
var bar = function () {
  foo.call(obj);
};
bar(); //2
setTimeout(bar, 100); //2
//hard bound "bar" can no longer have its this overridden
bar.call(window); //2
//...
function foo() {
  console.log(this.a, something);
  return this.a + something;
}
var obj = {
  a: 2,
};
var b = bar(3); //2 3
console.log(b); //3
// with helper
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
//simple bind helper
function bund(fn, obj) {
  return function () {
    return fn.apply(obj, arguments);
  };
}
var obj = {
  a: 2,
};
var bar = bind(foo, obj);
var b = bar(3); // 2 3
console.log(b); //3
//...
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
var obj = {
  a: 2,
};
var bar = foo.bind(obj);
var b = bar(3); //2 3
console.log(b); //5
