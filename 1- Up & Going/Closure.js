function makeAdder(x) {
    //parameter x is an inner variable 
    //inner function add() uses x , so
    // it has a "closure" over it
    function add(y) {
        return x + y;
    }
    return add;
}

// PlusOne a reference to the inner add()
// function with closure over the x parameter of the outer makeAdder(...)
var pluseOne = makeAdder(1)
// PlusTen gets a reference to the inner add()
// function with closure over x oaraneter if he outer makeAdder(...)
var plusTen = makeAdder(10)
pluseOne(3) //4
pluseOne(41) //42
plusTen(13) //23

