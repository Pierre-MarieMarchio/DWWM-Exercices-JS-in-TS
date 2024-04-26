import { wordArray } from "./array.js";

const letterBtns = document.querySelectorAll<HTMLLabelElement>(".btn-letter");
const motDiv = document.getElementById("mot") as HTMLElement;
const penduDiv = document.getElementById("pendu") as HTMLElement;
const MAX_ATTEMPTS = 6;

let randomIndex = Math.floor(Math.random() * wordArray.length);
let wordToGuess = wordArray[randomIndex];
let wordSplit = wordToGuess?.toLowerCase().split("");
let guessedLetters = new Array(wordSplit?.length).fill("_");
let wrongAttempts = 0;

const updateView = (): void => {
  motDiv.innerText = guessedLetters.join(" ");
  penduDiv.innerText = `Nombre de tentatives erronées : ${wrongAttempts}`;
};

const verifyLetter = (target: HTMLElement): void => {
  const letter = target.innerText.trim().toLowerCase();
  if (!wordSplit?.includes(letter)) {
    console.log("false");
    wrongAttempts++;
  } else {
    for (let i = 0; i < wordSplit.length; i++) {
      if (wordSplit[i] === letter) guessedLetters[i] = letter;
    }
  }
};

const uncheckRadioButtons = (): void => {
  const radioBtns = document.querySelectorAll<HTMLInputElement>("input[type='radio']");
  radioBtns.forEach((radioBtn) => {
    radioBtn.checked = false;
  });
};


const gameWin = (): void => {
  alert("Félicitations ! Vous avez deviné le mot.");
  resetGame();
  
};

const gamLoose = (): void => {
  alert(`Désolé, vous avez perdu. Le mot était "${wordToGuess}".`);
  resetGame();
  
};

const handleUserInput =
  (input: HTMLInputElement) =>
  (e: Event): void => {
    const target = e.target as HTMLInputElement;

    if (target.checked) {
      verifyLetter(target.parentElement as HTMLElement);
      updateView();

      if (!guessedLetters.includes("_")) {
        gameWin();
      } else if (wrongAttempts >= MAX_ATTEMPTS) {
        gamLoose();
      }

      target.removeEventListener("change", handleUserInput(input));
    }
  };
const resetGame = (): void => {
  randomIndex = Math.floor(Math.random() * wordArray.length);
  wordToGuess = wordArray[randomIndex];
  wordSplit = wordToGuess?.split("");
  guessedLetters = new Array(wordSplit?.length).fill("_");
  wrongAttempts = 0;
  updateView();
  gameStart();
  uncheckRadioButtons();
};

const gameStart = (): void => {
  console.log(wordSplit);
  updateView();
  letterBtns.forEach((letterBtn) => {
    const input = letterBtn.querySelector("input[type='radio']") as HTMLInputElement;
    input.addEventListener("change", handleUserInput(input));
  });
};

gameStart();
