function Foo() {
  var a1 = new Foo();
}
a1; //Foo{}
//...
function Foo() {}
var a1 = new Foo();
a1.constructor; //Foo()
a1.constructor.name; //"Foo"
//...
function Foo() {}
var a1 = new Foo();
Foo.prototype.constructor = function Gotcha() {};
a1.constructor; //Gotcha() {}
a1.constructor.name; //Gotcha
a1; //Foo{}
// OLOO:
var Foo = {};
var a1 = Object.create(Foo);
a1; //Object{}
Object.defineProperty(Foo, "constructor", {
  enumerable: false,
  value: function Gotcha() {},
});
a1; //Gotcha{}
