if (!Function.prototype.softbind) {
  Function.prototype.softbind = function (obj) {
    var fn = this;
    //capture any carried parameters
    var curried = [].slice.call(arguments, 1);
    var bound = function () {
      return fn.apply(
        !this || this === (window || global) ? obj : this,
        curried.concat.apply(curried, arguments)
      );
    };
    bound.prototype = Object.create(foo.prototype);
    return bound;
  };
}
//...
function foo() {
  console.log("name:" + this.name);
}
var obj = { name: "obj" },
  obj2 = { name: "obj2" },
  obj3 = { name: "obj3" };
var fooOBJ = foo.safeBind(obj);
fooOBJ(); //name: obj
obj2.foo = foo.safeBind(obj);
obj2.foo(); //name:obj2 look
fooOBJ.call(obj3); //name: obj3 look
setTimeout(obj2.foo, 100); //name:obj falls back to safe binding
