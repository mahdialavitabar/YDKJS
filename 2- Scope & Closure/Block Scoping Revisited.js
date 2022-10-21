for (let i = 0; i <= 5; i++) {
let j = 1  //yay block scope for closure
setTimeout(function timer() {
    console.log(j);
}, j * 1000)
}

for (let i = 0; i <= 5; i++) {
setTimeout(function timer() {
    console.log(i);
}, i * 1000)    
}