//OO style code:
function Foo(who) {
  this.me = who;
}
Foo.prototype.identify = function () {
  return "I am " + this.me;
};
function Bar(who) {
  Foo.call(this, who);
}
Bar.prototype.speak = function () {
  alert("Hello," + this.identify() + ".");
};
var b1 = new Bar("b1");
var b2 = new Bar("b2");
b1.speak();
b2.speak();
//OLOO style code:
Foo = {
  init: function (who) {
    this.me = who;
  },
  identify: function () {
    return "I am" + this.me;
  },
};
Bar = Object.create(Foo);
Bar.speak = function () {
  alert("Hello," + this.identify() + ".");
};
var b1 = Object.create(Bar);
b1.init("b1");
var b2 = Object.create(Bar);
b2.init("b2");
b1.speak();
b2.speak();
