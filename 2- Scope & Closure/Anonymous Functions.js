setTimeout(function timoutHandler() { //look i have a name!
    console.log("I waited 1 second!");
}, 1000)

//invoking function expression immidiately
var a = 2
(function foo() {
    var a = 3
    console.log(a); //3
})()
console.log(a); //2