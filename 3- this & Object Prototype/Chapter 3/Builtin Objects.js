var strPrimitive = "I am a string";
typeof strPrimitive; //string
strPrimitive instanceof String; //false
var strObject = new String("I am a string");
typeof strObject; //object
strObject instanceof String; //true
//inspect the object sub type
Object.prototype.toString.call(strObject); //[object String]
//...
var strPrimitive = "I am a string";
console.log(strPrimitive.length); //13
console.log(strPrimitive.charAt(3)); //m
