"use strict";
const moneyGivenImput = document.getElementById("monaiGiven");
const priceImput = document.getElementById("price");
const submitBtnex4 = document.getElementById("btnSubmit");
const moneyGiveBackCalculator = (moneyGiven, price, change) => {
    alert("vous avez donné : " + moneyGiven + " EUR pour un prix de : " + price + " EUR");
    let giveBack = change;
    let moneyCounter = {
        billet10: 0,
        billet5: 0,
        pieces1: 0,
    };
    while (giveBack > 0) {
        switch (true) {
            case giveBack >= 10:
                moneyCounter.billet10++;
                giveBack -= 10;
                break;
            case giveBack >= 5:
                moneyCounter.billet5++;
                giveBack -= 5;
                break;
            case giveBack >= 1:
                moneyCounter.pieces1++;
                giveBack -= 1;
                break;
            default:
                break;
        }
    }
    return moneyCounter;
};
const moneyChange = (moneyGiven, price) => {
    let change = moneyGiven - price;
    return change;
};
const inputVerification = (moneyGiven, price, change) => {
    let isCorrect = true;
    if (isNaN(moneyGiven) || isNaN(price)) {
        alert("Please enter money or valid price.");
        isCorrect = false;
    }
    if (change <= 0) {
        alert("Please give more money");
        isCorrect = false;
    }
    return isCorrect;
};
submitBtnex4.addEventListener("click", (e) => {
    e.preventDefault();
    let moneyGiven = parseInt(moneyGivenImput === null || moneyGivenImput === void 0 ? void 0 : moneyGivenImput.value);
    let price = parseInt(priceImput === null || priceImput === void 0 ? void 0 : priceImput.value);
    let change = moneyChange(moneyGiven, price);
    if (!inputVerification(moneyGiven, price, change))
        return;
    let moneychange = moneyGiveBackCalculator(moneyGiven, price, change);
    alert("la  machine vous rend " +
        moneychange.billet10 +
        " billets de 10 EUR, " +
        moneychange.billet5 +
        " billet de 5 EUR et " +
        moneychange.pieces1 +
        " pieces de 1 EUR");
});
