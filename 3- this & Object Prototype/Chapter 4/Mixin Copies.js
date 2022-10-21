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
//less preferred
//alternate mixin less safe to overwrites
function mixin(sourceObj, targetObj) {
  for (var key in sourceObj) {
    targetObj[key] = sourceObj[key];
  }
  return targetObj;
}
var vehicle = {
  //,,,
};
//first create an empty object with vehicle's stuff
var car = mixin(vehicle, {});
//now copy the intended contents into car
mixin(
  {
    wheels: 4,
    drive: function () {
      //...
    },
  },
  car
);
