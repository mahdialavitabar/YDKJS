const Spending_Threshold = 1000
const Tax = 0.05
const Phone_Price = 200
const Accessory_Price = 100
var bankBalance = 1500
var amount = 0
function CalculateTax(amount) {
    return amount * Tax
}
function FormatAmount(amount) {
    return '$' + amount.toFixed(2)
}
while (amount < bankBalance) {
    // Buy New Phone
    amount = amount + Phone_Price
    // Can we afford to buy?
    if (amount < Spending_Threshold){
        amount = amount + Accessory_Price
    }
}
// Pay the government
amount = amount + CalculateTax(amount)
console.log('Your Purchase:' + FormatAmount(amount));
// Can you afford this Purchase?
if (amount > bankBalance){
    console.log('You cant afford this, :(')
}