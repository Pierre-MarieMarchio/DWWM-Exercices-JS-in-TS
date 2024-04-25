"use strict";
const prdtImg = document.getElementById("productImg");
const prdtName = document.getElementById("productName");
const playerGuessInput = document.getElementById("guessInput");
const submitBtnex6 = document.getElementById("btnSubmit");
const catalogueProduits = [
    {
        nom: "Fauteuil Gaming",
        prix: 199,
        image: "chaise.png",
    },
    {
        nom: "Costume d'Halloween",
        prix: 39,
        image: "costume-haloween.png",
    },
    {
        nom: "Grill",
        prix: 149,
        image: "grill.png",
    },
    {
        nom: "Guitare",
        prix: 299,
        image: "guitare.png",
    },
    {
        nom: "Sac à Main",
        prix: 49,
        image: "sac-a-main.png",
    },
];
let isDone = false;
let playCount = 0;
let playerGuess;
let prdtPrice;
const randomPrdt = (catalogueProduits) => {
    var _a;
    let randomNb = Math.floor(Math.random() * catalogueProduits.length);
    return (_a = catalogueProduits[randomNb]) !== null && _a !== void 0 ? _a : null;
};
function updateProductDisplay(product) {
    prdtImg.src = `./assets/${product.image}`;
    prdtName.textContent = product.nom;
}
const gameProductInit = () => {
    let currentPrdt = randomPrdt(catalogueProduits);
    if (currentPrdt != null) {
        updateProductDisplay(currentPrdt);
    }
    if (currentPrdt === null || currentPrdt === void 0 ? void 0 : currentPrdt.prix)
        return (prdtPrice = currentPrdt === null || currentPrdt === void 0 ? void 0 : currentPrdt.prix);
    return null;
};
const gameMatch = () => {
    if (!isDone) {
        playCount++;
        if (playerGuess !== undefined) {
            if (prdtPrice) {
                if (playerGuess === prdtPrice) {
                    isDone = true;
                    gameEnd();
                    let win = confirm("bravo vous avez gagnez le juste prix en " + playCount + " Manches. Voulez vous rejouer ?");
                    if (win) {
                        gameStart();
                    }
                    else {
                        gameEnd();
                    }
                }
                else if (playerGuess > prdtPrice) {
                    alert("vous etes au dessus du prix");
                }
                else if (playerGuess < prdtPrice) {
                    alert("vous etes en dessous du prix");
                }
            }
        }
        if (playCount >= 10) {
            isDone = true;
            gameEnd();
            let end = confirm("vous avez perdut voulez vous rejouer ?");
            if (end) {
                gameStart();
            }
            else {
                gameEnd();
            }
        }
    }
};
const gameLoop = (e) => {
    e.preventDefault();
    playerGuess = parseFloat(playerGuessInput.value);
    console.log("guess : " + playerGuess);
    gameMatch();
};
const gameStart = () => {
    gameProductInit();
    submitBtnex6.addEventListener("click", gameLoop);
};
const gameEnd = () => {
    isDone = false;
    playCount = 0;
    submitBtnex6.removeEventListener("click", gameLoop);
};
gameStart();
