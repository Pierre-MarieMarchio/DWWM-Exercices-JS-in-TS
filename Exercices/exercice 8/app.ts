const prdtImg = document.getElementById("productImg") as HTMLImageElement;
const prdtName = document.getElementById("productName") as HTMLParagraphElement;
const playerGuessInput = document.getElementById("guessInput") as HTMLInputElement;
const submitBtnex6 = document.getElementById("btnSubmit") as HTMLButtonElement;

interface Produit {
  nom: string;
  prix: number;
  image: string;
}

const catalogueProduits: Produit[] = [
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

let isDone: boolean = false;
let playCount: number = 0;
let playerGuess: number;
let prdtPrice: number;

const randomPrdt = (catalogueProduits: Produit[]): Produit | null => {
  let randomNb = Math.floor(Math.random() * catalogueProduits.length);
  return catalogueProduits[randomNb] ?? null;
};

function updateProductDisplay(product: Produit): void {
  prdtImg.src = `./assets/${product.image}`;
  prdtName.textContent = product.nom;
}

const gameProductInit = () => {
  let currentPrdt = randomPrdt(catalogueProduits);
  if (currentPrdt != null) {
    updateProductDisplay(currentPrdt);
  }
  if (currentPrdt?.prix) return (prdtPrice = currentPrdt?.prix);
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
          } else {
            gameEnd();
          }
        } else if (playerGuess > prdtPrice) {
          alert("vous etes au dessus du prix");
        } else if (playerGuess < prdtPrice) {
          alert("vous etes en dessous du prix");
        }
      }
    }

    if (playCount >= 10) {
      isDone = true;
      gameEnd();
      let end: boolean = confirm("vous avez perdut voulez vous rejouer ?");
      if (end) {
        gameStart();
      } else {
        gameEnd();
      }
    }
  }
};

const gameLoop = (e: MouseEvent) => {
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
