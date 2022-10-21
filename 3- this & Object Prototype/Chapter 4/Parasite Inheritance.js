//By Douglas Crockford
//traditional JS class vehicle
function Vehicle() {
  this.engines = 1;
}
Vehicle.prototype.ignition = function () {
  console.log("Turning on my engine");
};
Vehicle.prototype.drive = function () {
  this.ignition();
  console.log("Steering and moving forward");
};
//Parasitic Class Car
function Car() {
  //first car is a Vehicle
  var car = new Vehicle();
  //now lets modify our car to specialize it
  car.wheels = 4;
  //save a privileged reference to Vehicle:drive!
  var vehDrive = car.drive;
  //override Vehicle:drive()
  car.drive = function () {
    vehDrive = function () {
      vehDrive.call(this);
      console.log("Rolling on all" + wheels + "wheels!");
    };
    return car;
  };
}
var myCar = new Car();
myCar.drive();
//turning on my engine
//steering and moving forward
//rolling on all 4 wheels
