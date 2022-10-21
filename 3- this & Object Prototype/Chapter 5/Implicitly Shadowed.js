var anotherObject = {
  a: 2,
};
var myObject = Object.create(anotherObject);
anotherObject.a; //2
myObject.a; //2
anotherObject.hasOwnProperty("a"); //true
myObject.hasOwnProperty("a"); //false
myObject.a++; //oops implicitly shadowed
anotherObject.a; //2
myObject.a; //3
myObject.hasOwnProperty("a"); //true
