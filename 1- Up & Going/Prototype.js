var foo = {
    a: 42
}
//create 'bar and link it to 'foo
var bar = Object.create(foo)
bar.b = "hello world"
 console.log(bar.b);  //"hello world"
console.log(bar.a); //42 >>> delegated to foo