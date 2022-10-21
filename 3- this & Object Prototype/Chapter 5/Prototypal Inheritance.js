function Foo(name) {
  this.name = name;
}
Foo.prototype.myName = function () {
  return this.name;
};
function Bar(name, label) {
  Foo.call(this.name);
  this.label = label;
}
//here we make a new Bar.prototype linked to Foo.prototype
Bar.prototype = Object.create(Foo.prototype);
//beware! new Bar.prototype .constructor is gone, and might need to be manually fixed if you're in the habit of relying on such properties
Bar.prototype.myLabel = function () {
  return this.label;
};
var a = new Bar("m", "obj a");
a.myName(); //"a"
a.myLabel(); //"obj a"
//pre ES6
Bar.prototype = Object.create(Foo.prototype);
//ES6+
Object.setPrototypeOf(Bar.prototype, Foo.prototype);
