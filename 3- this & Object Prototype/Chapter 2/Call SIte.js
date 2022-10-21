function baz() {
  //call stack is : "baz" so our call site is global
  console.log("baz");
  bar(); //<= call site for bar
}
function bar() {
  //call site is : "baz" => "bar" so our call site is in "baz"
  console.log("bar");
  foo(); //<= call site for foo
}
function foo() {
  //call stack is : "baz" => "bar" => "foo"
  console.log("foo");
}
baz(); //<= call site for baz
