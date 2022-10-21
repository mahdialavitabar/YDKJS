function process(data) {
    //do something interesting
}
var someReallyBigData = {}
process(someReallyBigData)
var btn = document.getElementById("my button")
btn.addEventListener("click",function click(evt) {
    console.log("button clicked");
}, /*capturingPhase=*/false)
// fix garbage with block scoping
function process(data) {
    //do something interesting
}
//anything declared inside this block can go away after
{
    let someReallyBigData = {}
    process(someReallyBigData)

}
var btn = document.getElementById("my button")
btn.addEventListener("click",function click(evt) {
    console.log("button clicked");
}, /*capturingPhase=*/false)