var myObject = {
  a: 2,
};
["a" in myObject]["b" in myObject]; //true //false
myObject.hasOwnProperty["a"]; //true
myObject.hasOwnProperty["b"]; //false
