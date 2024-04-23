const moneyGivenImput = document.getElementById("monaiGiven") as HTMLInputElement;
const priceImput = document.getElementById("price") as HTMLInputElement;
const submitBtnex4 = document.getElementById("btnSubmit") as HTMLButtonElement;

const moneyGiveBackCalculator = (moneyGiven: number, price: number, change: number) => {
  alert("vous avez donné : " + moneyGiven + " EUR pour un prix de : " + price + " EUR");
  let giveBack: number = change;

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

const moneyChange = (moneyGiven: number, price: number): number => {
  let change = moneyGiven - price;
  return change;
};

const inputVerification = (moneyGiven: number, price: number, change: number): boolean => {
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

submitBtnex4.addEventListener("click", (e: MouseEvent) => {
  e.preventDefault();
  let moneyGiven: number = parseInt(moneyGivenImput?.value);
  let price: number = parseInt(priceImput?.value);
  let change: number = moneyChange(moneyGiven, price);

  if (!inputVerification(moneyGiven, price, change)) return;

  let moneychange = moneyGiveBackCalculator(moneyGiven, price, change);

  alert(
    "la  machine vous rend " +
      moneychange.billet10 +
      " billets de 10 EUR, " +
      moneychange.billet5 +
      " billet de 5 EUR et " +
      moneychange.pieces1 +
      " pieces de 1 EUR"
  );
});
