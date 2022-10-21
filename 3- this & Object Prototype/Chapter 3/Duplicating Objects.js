function anotherFunction() {
  /*  */
}
var anotherObject = {
  c: true,
};
var anotherArray = [];
var myObject = {
  a: 2,
  b: anotherObject, //reference not a copy
  c: anotherArray, //another reference
  d: anotherFunction,
};
anotherArray.push(anotherObject, myObject);
//...
var newObj = Object.assign({}, myObject);
myObject.a; //2
newObj.b === anotherObject; //true
newObj.c === anotherArray; //true
newObj.d === anotherFunction; //true
