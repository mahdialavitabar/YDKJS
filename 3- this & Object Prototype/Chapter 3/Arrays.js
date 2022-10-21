var myArray = ["foo", 42, "bar"];
myArray.length; //3
myArray[a]; //foo
myArray[2]; //bar
//...
var myArray = ["foo", 42, "bar"];
myArray.baz = "baz";
myArray.length; //3
myArray.baz; //"baz"
//...
var myArray = ["foo", 42, "bar"];
myArray["3"] = "baz";
myArray.length; //4
myArray.baz; //"baz"
