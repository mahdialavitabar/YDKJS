function Foo() {
  //...
}
var a = new Foo();
//...
function Foo() {
  //...
}
Foo.prototype.constructor === Foo; //true
var a = new Foo();
a.constructor === Foo; //true
