function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo,
};
var bar = obj.foo; //function reference/alias
var a = "oops , global"; //a also property on global object
bar(); //"oops, global"
//...
function foo() {
  console.log(this.a);
}
function deFoo(fn) {
  //fn is just another reference to foo
  fn(); //<= call site
}
var obj = {
  a: 2,
  foo: foo,
};
var a = "oops, global"; //a also property on global object
deFoo(obj.foo); //"oops, global"'
//...
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo,
};
var a = "oops, global"; //a also property on global object
setTimeout(obj.foo, 100); //oops, global
//...
function setTimeout(fn, delay) {
  //wait somehow for delay ms
  fn(); //<= call site
}
