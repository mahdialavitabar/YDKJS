Task = {
  setID: function (ID) {
    this.id = ID;
  },
  outputID: function () {
    console.log(this.id);
  },
};
//make XYZ delegate to Task
XYZ = Object.create(Task);
XYZ.prepareTask = function (ID, label) {
  this.setID(ID);
  this.label = label;
};
XYZ.outputTaskDetail = function () {
  this.outputID();
  console.log(this.label);
};
//ABC=Object.create(Task)
//ABC ...=...
