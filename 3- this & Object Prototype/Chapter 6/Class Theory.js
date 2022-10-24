class Task {
    id;
    //constructor Task()
    Task(ID) {id=ID}
    outputTask() {this.output(id)}
}
class XYZ inherits Task {
    label;
    //constructor XYZ()
    XYZ(ID,Label) {super(ID); label=Label}
    outputTask() {super();output(label)}
}
class ABC inherits Task {
    //...
}