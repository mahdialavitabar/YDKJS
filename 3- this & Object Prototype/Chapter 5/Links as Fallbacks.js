var anotherObject = {
  cool: function () {
    console.log("cool");
  },
};
var myObject = Object.create(anotherObject);
myObject.cool(); //cool
