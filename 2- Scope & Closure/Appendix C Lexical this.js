var foo = a => {
    console.log(a);
}
foo(2) //2

//...
var obj = {
    id: "awesome",
    cool: function coolFn(){
        console.log(this.id);
    }
}
var id = "not awesome"
obj.cool() //awesome
setTimeout(obj.cool,100) //not awesome

//solution
var obj = {
    count: 0,
    cool: function coolF0n() {
        var self = this
        if(self.count < 1) {
            setTimeout(function timer() {
                self.count++
                console.log("awesome?");
            }, 100)
        }
    }
}
obj.cool() //awesome?
//ES6 Solution lexical this:
var obj = {
    count: 0,
    cool: function coolFn() {
        if(this.count < 1) {
            setTimeout(() => { //arrow function
this.count++
console.log("awesome");
            }, 100)
        }
    }
}
obj.cool() //awesome?