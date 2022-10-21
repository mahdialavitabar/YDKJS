var myObject = {};
Object.defineProperty(myObject, "a", {
  //make a enumerable as normal
  enumerable: true,
  value: 2,
});
Object.defineProperty(myObject, "b", {
  //make b non-enumerable
  enumerable: false,
  value: 3,
});
myObject.b; //3
"b" in myObject; //true
myObject.hasOwnProperty("b"); //true
//...
for (var k in myObject) {
  console.log(k, myObject[k]);
}
//"a"2
//...

var myObject = {};
Object.defineProperty(myObject, "a", {
  //make a enumerable as normal
  enumerable: true,
  value: 2,
});
Object.defineProperty(myObject, "b", {
  //make b non-enumerable
  enumerable: false,
  value: 3,
});
myObject.propertyIsEnumerable("a"); //true
myObject.propertyIsEnumerable("b"); //false
Object.keys(myObject); //["a"]
Object.getOwnPropertyNames(myObject); //["a","b"]
