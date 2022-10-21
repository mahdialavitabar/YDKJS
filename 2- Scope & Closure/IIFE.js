var a = 2
(function IIFE() {
    var a = 3
    console.log(a); //3
})()
console.log(a); //2

var b = 2
(function IIFE(global) {
    var a = 3
    console.log(a); //3
    console.log(global.a); //2
})(window)
console.log(a); //2

undefined = true //setting a land-mine for other code! avoid!
(function IIFE(undefined) {
    var a 
    if(a===undefined) {
    console.log("undefined is safe here!");
}
})()
//UMD 
var a = 2
(function IIFE(def) {
    def(window)
})(function def(global) {
    var a = 3
    console.log(a); //3
    console.log(global.a); //2
})