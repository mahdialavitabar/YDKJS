var a = 2;
foo(); 
function foo() {
    a = 3;
    console.log(a); //3
    var a;
}
console.log(a); //2

// Nested Scopes
function foo1() {
    var a = 1;
    function bar() {
        var b = 2;
        function baz() {
            var c = 3;
            console.log(a , b , c); //1 2 3
        }
        baz();
        console.log(a , b); // 1 2
    }
    bar();
    console.log(a); //1
}
foo1()

// Using let
function foo() {
    var a = 1;
    if (a >= 1) {
        let b = 2;
        while (b < 5) {
            let c = b * 2;
            b++;
            console.log(a + c);
        }
    }
}
foo(); // 5 7 