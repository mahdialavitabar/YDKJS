var anotherObject = {
  a: 2,
};
//create an object linked to anotherObject
var myObject = Object.create(anotherObject);
myObject.a; //2
//...
var anotherObject = {
  a: 2,
};
//create an object linked to anotherObject
var myObject = Object.create(anotherObject);
for (var k in myObject) {
  console.log("found:" + k);
}
//found:a
("a in myObject"); //true
