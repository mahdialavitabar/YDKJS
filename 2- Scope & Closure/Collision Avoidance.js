function foo() {
    function bar(a) {
        i = 3 //changing the "i" in the enclosing scope for loop
        console.log(a + i);
    }
    for (var i=0; i<10; i++) {
        bar(i * 2) //oops, infinit loop ahead
    }
}
foo()