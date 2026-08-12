"use strict";
function makePayment(payments) {
    if (payments === "UPI") {
        console.log(`Payment method used is: ${payments}`);
    }
    if (payments === "Credit Card") {
        console.log(`Payment method used is: ${payments}`);
    }
    if (payments === "Paypal") {
        console.log(`Payment method used is: ${payments}`);
    }
}
makePayment("UPI");
makePayment("Credit Card");
makePayment("Paypal");
