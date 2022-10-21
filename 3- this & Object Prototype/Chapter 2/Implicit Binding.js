function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo,
};
obj.foo; //2

//....
function foo() {
  console.log(this.a);
}
var obj2 = {
  a: a2,
  foo: foo,
};
var obj1 = {
  a: 2,
  obj: obj,
};
obj1.obj2.foo(); //42
