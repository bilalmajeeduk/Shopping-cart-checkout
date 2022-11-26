const prompt = require("prompt-sync")({ sigint: true });

const FR1 = "FruitTea";
const SR1 = "Strawberries";
const CF1 = "Coffee"
let input;
let quantity;
let FruitTeaPrice = 3.11;
const CF1_Price = 11.23;
function iamloop() {

    let start = prompt("Are you ready to scan items: ");
    let quantityofFruitTea;
    let quantityofCF1
    let totalPriceOfCF1;

    if (start == "Yes" || "yes") {
        input = prompt("Please scan your product: ");
        quantity = prompt("Please enter the quantity: ");
        if (input == "FR1") {

            if (quantity == 1) {
                quantityofFruitTea = quantity;
                quantityofFruitTea = 2;
                quantity = ''
                // buyOnegetOne(quantityofFruitTea, FruitTeaPrice)
            }

        }

        let scan_more = prompt("want to scan more?: ");
        while (scan_more == "yes") {
            console.log("i am from while-loop")
            input = prompt("Please scan your next product: ");
            quantity = prompt("Please enter the quantity: ");
            if (input == "CF1") {
                quantityofCF1 = quantity;
                totalPriceOfCF1 = quantityofCF1 * CF1_Price
                console.log(totalPriceOfCF1)
            }
            scan_more = prompt("want to scan more?: ");

        }
        if (scan_more == "no") {
            // const totalPriceofSingleItem = FruitTeaPrice * quantity
            console.log(FR1, FruitTeaPrice, "X", quantityofFruitTea)
            console.log(CF1, totalPriceOfCF1, "X", quantityofCF1)
            let total = FruitTeaPrice * totalPriceOfCF1
            console.log("total: ", total)
            console.log("this is checkout here is full price to pay")
        }
    }
}
function buyOnegetOne(item, price) {
    if (item == 1) {
        item = 2;
        price = 3.11
        // return item
    }
    // console.log('asd', item, price)
    // return item, price;
}
// weant more // checkout
iamloop();