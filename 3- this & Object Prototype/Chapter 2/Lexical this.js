function foo() {
  //return an array function
  return (a) => {
    //this here is lexically inherited from foo()
    console.log(this.a);
  };
}
var obj1 = {
  a: 2,
};
var obj1 = {
  a: 3,
};
var bar = foo.call(obj1);
bar.call(obj2); //2 => not 3
//...
function foo() {
  setTimeout(() => {
    //this here is lexically inherited from foo()
    console.log(this.a);
  }, 100);
}
var obj = {
  a: 2,
};
foo.call(obj); //2
//ES6
function foo() {
  var self = this; // lexical capture of this
  setTimeout(function () {
    console.log(self.a);
  }, 100);
}
var obj = {
  a: 2,
};
foo.call(obj); //2
