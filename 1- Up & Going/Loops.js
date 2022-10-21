var tedadmoshtari = 2


while (tedadmoshtari > 0) {
    console.log("چجوری کمکتون کنم؟");
    tedadmoshtari = tedadmoshtari - 1;
    // break;
}

// do while
do {
    console.log('چطور کمکتون کنم؟');
    tedadmoshtari = tedadmoshtari - 1;
} while (tedadmoshtari > 0)

// using break
var i=0
while (true) {
    if (i <= 9) {
        console.log(i)
        i=i+1;
    } else {
        break;
    }
}
for (var i=0 ; i<=9; i=i+1) {
    console.log(i)
}