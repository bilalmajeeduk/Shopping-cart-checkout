const prompt = require("prompt-sync")({ sigint: true });

function productDetails() {
    const availableProducts = [
        {
            productCode: FR1, Name: "Fruit Tea", Price: 3.11
        },
        {
            productCode: SR1, Name: "Strawberries", Price: 5.00
        },
        {
            productCode: CF1, Name: "Coffee", Price: 11.23
        }
    ]
}
let product = {}
const checkOutProducts = [];
let quantity;

function placeAnOrder() {
    let productCode;
    let start = prompt("Are you ready to scan items: ");

    if (start == "Yes" || "yes") {
        let scan_more = "yes";
        while (scan_more == "yes") {
            productCode = prompt("Please scan your products: ");
            quantity = prompt("Please enter the quantity: ");
            product = new Object();
            product.productCode = productCode;
            product.quantity = quantity;
            checkOutProducts.push(product);

            scan_more = prompt("want to scan more?: ");
        }
        if (scan_more == "no") {
            console.log(calculateFinalPrice(checkOutProducts));
        }
    }
}

function calculateFinalPrice(checkOutProducts) {

    let totalPrice = 0;


    checkOutProducts.forEach(element => {
        if (element.productCode == "FR1") {
            let price = calculateOfferBuyOneGetOne(element.quantity);
            totalPrice = price + totalPrice;
        }
        else if (element.productCode == "SR1") {
            let price = calculateOfferBulkPurchase(element.quantity);
            totalPrice = price + totalPrice;
        }
        else if (element.productCode == "CF1") {
            let price = element.quantity * 11.23;
            totalPrice = price + totalPrice;
        }
    });

    return totalPrice;

}
function calculateOfferBuyOneGetOne(quantity) {

    let remainder = 0;
    let quotient = 0;
    if (quantity % 2 != 0) {
        remainder = quantity % 2
    }
    quotient = Math.floor(quantity / 2)

    let discountedPrice = quotient * 3.11;
    let regularPrice = remainder * 3.11;
    return discountedPrice + regularPrice;
}
function calculateOfferBulkPurchase(quantity) {
    let discountedPrice = 0;
    if (quantity == 3 || quantity > 3) {
        discountedPrice = 5.00 * 10 / 100;
    }
    let totalPrice = quantity * (5 - discountedPrice);
    return totalPrice;
}

placeAnOrder();

exports.calculateOfferBuyOneGetOne = calculateOfferBuyOneGetOne;
exports.calculateOfferBulkPurchase = calculateOfferBulkPurchase;