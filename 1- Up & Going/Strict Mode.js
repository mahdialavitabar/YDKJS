function foo() {
    "use strict"
    // this code is strict mode
    function bar() {
        //this code as well is strict mode
    }
}
// this code is not strict mode

//or this

"use strict"
function fooo(params) {
    //this code is strict mode
    function barr(params) {
        //this code is strict mode
    }
}
// this code is strict mode

// disallow implicit auto global variable
function foooo(params) {
    "use strict" //turn on strict mode
    a = 1; //var missing reference error
}
foo()
