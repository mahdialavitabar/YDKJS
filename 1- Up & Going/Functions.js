function Chapemeghdar() {
    console.log(meghdar.toFixed(2))
}
var meghdar = 100
 Chapemeghdar();
meghdar = meghdar*2;
 Chapemeghdar();

 // params and return
 function Amount(amt) {
    console.log(amt.toFixed(2))
 }
 function FormatAmount() {
    return "$" + amount.toFixed(2);
}
var amount = 100
Amount(amount*2)
amount = FormatAmount()
console.log(amount);
//call function multiple time
const taxRate = 0.05
function calculateFinalAmount(amt) {
    amt = amt + (amount * taxRate)
    return amt;
}
var amount = 100;
amount = calculateFinalAmount(amount)
console.log(amount.toFixed(2));
