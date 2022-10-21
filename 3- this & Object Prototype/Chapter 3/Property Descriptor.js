var myObject = {
  a: 2,
};
myObject.getOwnPropertyDescriptor(myObject, "a");
// {value:2,writable:true,enumerable:true,configurable:true}
var myObject = {};
Object.defineProperty(myObject, "a", {
  value: 2,
  writable: true,
  enumerable: true,
  configurable: true,
});
//writable:
var myObject = {};
Object.defineProperty(myObject, "a", {
  value: 2,
  writable: false,
  enumerable: true,
  configurable: true,
});
myObject.a = 3;
myObject.a; //2
//strict mode
("use strict");
var myObject = {};
Object.defineProperty(myObject, "a", {
  value: 2,
  writable: false,
  enumerable: true,
  configurable: true,
});
myObject.a = 3;
myObject.a; //TypeError
//configurable:
var myObject = {
  a: 2,
};
myObject.a = 3;
myObject.a; //3
Object.defineProperty(myObject, "a", {
  value: 4,
  writable: true,
  configurable: false, //not configurable
  enumerable: true,
});
myObject.a; //4
myObject.a = 5;
myObject.a; //5
Object.defineProperty(myObject, "a", {
  value: 6,
  writable: true,
  configurable: true,
  enumerable: true,
}); //TypeError
//...delete
var myObject = {
  a: 2,
};
myObject.a; //2
delete myObject.a;
myObject.a; //undefined
Object.defineProperty(myObject, "a", {
  value: 4,
  writable: true,
  configurable: false, //not configurable
  enumerable: true,
});
myObject.a; //2
delete myObject.a;
myObject.a; //2
//enumerable:
myImmutableObject.foo; //[1,2,3]
myImmutableObject.foo.push(4);
myImmutableObject.foo; //[1,2,3,4]
