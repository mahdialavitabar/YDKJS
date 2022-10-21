function isRelateTo(o1, o2) {
  function F() {
    F.prototype = o2;
    return o1 instanceof F;
  }
}
var a = {};
var b = Object.create(a);
isRelateTo(b, a); //true
//...
Object.defineProperty(Object.prototype, "_proto_", {
  get: function () {
    return Object.getPrototypeOf(this);
  },
  set: function (o) {
    //setPrototypeOf() as of ES6
    Object.setPrototypeOf(this.o);
    return o;
  },
});
