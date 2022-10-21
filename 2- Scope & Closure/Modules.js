function foo() {
    var something = "cool"
    var another = [1,2,3]
    function doSomething() {
        console.log(something);
    } //both have lexical scope (closure) over inner scope foo()

    function doAnother() {
        console.log(another.join("!"));
    }
}
//...
function CoolModule() {
    var something = "cool"
    var another = [1,2,3]
    function doSomething() {
        console.log(something);
    }
    function doAnother() {
        console.log(another.join("!"));
    }
    return {
        doSomething: doSomething,
        doAnother: doAnother
    }
}
var foo = CoolModule()
foo.doSomething() //cool
foo.doAnother() //1 ! 2 ! 3
//...
var foo = (function CoolModule() {
    var something = "cool"
    var another = [1,2,3]
    function doSomething() {
        console.log(something);
    }
    function doAnother() {
        console.log(another.join("!"));
    }
    return {
        doSomething: doSomething,
        doAnother: doAnother
    }
})()
foo.doSomething() //cool
foo.doAnother() //1!2!3
//...
function CoolModule(id) {
    function identify() {
        console.log(id);
    }
    return {
        identify: identify
    }
}
var foo1 = CoolModule("foo 1")
var foo2 = CoolModule("foo 2")
foo1.identify() //"foo 1"
foo2.identify() //"foo 2"
//...
var foo = (function CoolModule(id) {
    function change() {
        //modifying the public API
        publicAPI.identify = identify2
    }
    function identify1() {
        console.log(id);
    }
    function identify2() {
        console.log(id.toUppercase());
    }
    var publicAPI = {
        change: change,
        identify: identify1
    }
    return publicAPI
})("foo module")
foo.identify() //foo module
foo.change()
foo.identify() //FOO MODULE