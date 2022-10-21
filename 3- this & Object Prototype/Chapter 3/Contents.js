var myObject = {
  a: 2,
};
myObject.a; //2
myObject["a"];
//...
var myObject = {
  a: 2,
};
var idx;
if (wantA) {
  idx: "a";
}
//later
console.log(myObject[idx]); //2
//...
var myObject = {};
myObject[true] = "foo";
myObject[3] = "bar";
myObject[myObject] = "baz";
myObject["true"]; //"foo"
myObject["3"]; //"bar"
myObject["[myObject]"]; //"baz"
