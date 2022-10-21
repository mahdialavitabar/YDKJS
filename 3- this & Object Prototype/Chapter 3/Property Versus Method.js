function foo() {
  console.log("foo");
}
var someFoo = foo; //variable reference to foo
var myObject = {
  someFoo: foo,
};
foo; //function foo() {}
someFoo; //function foo() {}
myObject.someFoo; //function foo() {}
//ES6
var myObject = {
  foo: function () {
    console.log("foo");
  },
};
var someFoo = myObject.foo;
someFoo; //function foo() {}
myObject.foo; //function foo() {}
