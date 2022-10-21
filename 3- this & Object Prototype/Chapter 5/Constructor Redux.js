function Foo() {
  /*  */
}
Foo.prototype = {
  /*  */
}; //create a new prototype object
var a1 = new Foo();
a1.constructor === Foo; //false
a1.constructor === Object; //true
//...
function Foo() {
  /*  */
}
Foo.prototype = {
  /*  */
}; //create a new prototype object
//need to properly fix the missing .constructor property on the new object serving as Foo.prototype =>defineProperty()
Object.defineProperty(Foo.prototype, "constructor", {
  enumerable: false,
  writable: true,
  configurable: true,
  value: Foo, //point .constructor at Foo
});
