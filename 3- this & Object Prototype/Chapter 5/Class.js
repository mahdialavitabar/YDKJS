function Foo() {
  //...
}
var a = new Foo();
Object.getPrototypeOf(a) === Foo.prototype; //true
