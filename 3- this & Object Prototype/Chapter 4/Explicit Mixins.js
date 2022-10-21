//vastly simplified mixin() example:
function mixin(sourceObj, targetObj) {
  for (var key in sourceObj) {
    //only copy if not already present
    if (!key in targetObj) {
      targetObj[key] = sourceObj[key];
    }
  }
  return targetObj;
}
var vehicle = {
  engines: 1,
  ignition: function () {
    console.log("Turning on my engine");
  },
  drive: function () {
    this.ignition();
    console.log("Steering and moving forward");
  },
};
var car = mixin(vehicle, {
  wheels: 4,
  drive: function () {
    vehicle.drive.call(this);
    console.log("Rolling on all" + this.wheels + "wheels!");
  },
});
