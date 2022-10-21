var myObject = {
  //define a getter for a
  get a() {
    return 2;
  },
};
Object.defineProperty(
  myObject, //target
  "b", //property name
  {
    //descriptor
    //define a getter for b
    get function() {
      return this.a * 2;
    },
    // make sure b shows as an object property
    enumerable: true,
  }
);
myObject.a; //2
myObject.b; //4
//...
var myObject = {
  //define a getter for a
  get a() {
    return 2;
  },
};
myObject.a = 3;
myObject.a; //2
//both getter and setter
var myObject = {
  //define a getter for a
  get a() {
    return this._a_;
  },
  //define a setter for a
  set a(val) {
    this._a_ = val * 2;
  },
};
myObject.a = 2;
myObject.a; //4
