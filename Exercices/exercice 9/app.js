import { wordArray } from "./array.js";
const letterBtns = document.querySelectorAll(".btn-letter");
const motDiv = document.getElementById("mot");
const penduDiv = document.getElementById("pendu");
const MAX_ATTEMPTS = 6;
let randomIndex = Math.floor(Math.random() * wordArray.length);
let wordToGuess = wordArray[randomIndex];
let wordSplit = wordToGuess === null || wordToGuess === void 0 ? void 0 : wordToGuess.toLowerCase().split("");
let guessedLetters = new Array(wordSplit === null || wordSplit === void 0 ? void 0 : wordSplit.length).fill("_");
let wrongAttempts = 0;
const updateView = () => {
    motDiv.innerText = guessedLetters.join(" ");
    penduDiv.innerText = `Nombre de tentatives erronées : ${wrongAttempts}`;
};
const verifyLetter = (target) => {
    const letter = target.innerText.trim().toLowerCase();
    if (!(wordSplit === null || wordSplit === void 0 ? void 0 : wordSplit.includes(letter))) {
        console.log("false");
        wrongAttempts++;
    }
    else {
        for (let i = 0; i < wordSplit.length; i++) {
            if (wordSplit[i] === letter)
                guessedLetters[i] = letter;
        }
    }
};
const uncheckRadioButtons = () => {
    const radioBtns = document.querySelectorAll("input[type='radio']");
    radioBtns.forEach((radioBtn) => {
        radioBtn.checked = false;
    });
};
const gameWin = () => {
    alert("Félicitations ! Vous avez deviné le mot.");
    resetGame();
};
const gamLoose = () => {
    alert(`Désolé, vous avez perdu. Le mot était "${wordToGuess}".`);
    resetGame();
};
const handleUserInput = (input) => (e) => {
    const target = e.target;
    if (target.checked) {
        verifyLetter(target.parentElement);
        updateView();
        if (!guessedLetters.includes("_")) {
            gameWin();
        }
        else if (wrongAttempts >= MAX_ATTEMPTS) {
            gamLoose();
        }
        target.removeEventListener("change", handleUserInput(input));
    }
};
const resetGame = () => {
    randomIndex = Math.floor(Math.random() * wordArray.length);
    wordToGuess = wordArray[randomIndex];
    wordSplit = wordToGuess === null || wordToGuess === void 0 ? void 0 : wordToGuess.split("");
    guessedLetters = new Array(wordSplit === null || wordSplit === void 0 ? void 0 : wordSplit.length).fill("_");
    wrongAttempts = 0;
    updateView();
    gameStart();
    uncheckRadioButtons();
};
const gameStart = () => {
    console.log(wordSplit);
    updateView();
    letterBtns.forEach((letterBtn) => {
        const input = letterBtn.querySelector("input[type='radio']");
        input.addEventListener("change", handleUserInput(input));
    });
};
gameStart();
