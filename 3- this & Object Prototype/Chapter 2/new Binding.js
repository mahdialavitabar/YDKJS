function foo(a) {
  this.a = a;
}
var bar = new foo();
console.log(bar.a); //2
