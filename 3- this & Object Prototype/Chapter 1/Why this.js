function identify() {
    return this.name.toUpperCase() 
}
function speak() {
    var greeting = "Hello, I'm " + identify.call(this)
    console.log(greeting);
}
var me = {
    name: "Mahdi"
}
var you = {
    name: "Reader"
}
identify.call(me) //MAHDI
console.log(identify.call(me));
identify.call(you) //READER
console.log(identify.call(you));
speak.call(me) //Hello, I'm MAHDI
// console.log(speak.call(me));
speak.call(you) //Hello, I'm READER
// console.log(speak.call(you));

//...
function identify(context) {
    return context.name.toUpperCase()
}
function speak(context) {
    var greeting = "Hello. I'm " + identify(context)
    console.log(greeting);
}
identify(you) //Reader
speak(me) // Hello, I'm KYLE

//...
