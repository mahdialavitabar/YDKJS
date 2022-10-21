for (var i = 0; i <= 5; i++) {
setTimeout(function timer() {
    console.log(i);
}, i * 1000)    
}
//...
for (var i = 0; i <= 5; i++) {
(function () {
    setTimeout(function timer() {
        console.log(i);
    }, i * 1000)
})()    
}
//...
for (var i = 0; i <=5 ; i++) {
(function () {
    var j = i
    setTimeout(function timer() {
        console.log(j);
    }, j * 1000)
})()
} 
//some prefer this:
for (var i = 0; i <= 5; i++) {
    (function (j) {
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000)
    })(i) //execute (i) >>> as (j) is parameter
}