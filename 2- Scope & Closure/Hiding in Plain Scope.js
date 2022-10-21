function doSomething(a) {
    b = a + doSomethingElse(a * 2)
    console.log(b * 3);
}
function doSomethingElse(a) {
    return a - 1
}
var b 
doSomething(2) //15

function doSomething1(a) {
    function doSomethingElse1(a) {
        return a - 1
    }
    var b 
    b = a + doSomethingElse1(a * 2)
    console.log(b * 3);
}
doSomething1(2) //15