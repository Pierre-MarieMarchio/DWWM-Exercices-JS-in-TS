const ageInput = document.getElementById("age") as HTMLInputElement;
const anneePermisInput = document.getElementById("anneePermis") as HTMLInputElement;
const anneeFideliteInput = document.getElementById("anneeFidelite") as HTMLInputElement;
const nbAccidentInput = document.getElementById("nbAccident") as HTMLInputElement;

const calculPrime = (): void => {
  const anneeFideliteValue: number = parseInt(anneeFideliteInput.value);
  const anneePermisValue: number = parseInt(anneePermisInput.value);
  const nbAccidentValue: number = parseInt(nbAccidentInput.value);
  const ageInputValue: number = parseInt(ageInput.value);

  let malus: number = 0;

  if (anneeFideliteValue >= 0 && anneePermisValue >= 0 && nbAccidentValue >= 0 && ageInputValue >= 0) {
    if (ageInputValue < 18) {
      malus = -1;
    } else {
      if (ageInputValue < 25) {
        malus += 1;
      }
      if (anneePermisValue < 2) {
        malus += 1;
      }
      malus += nbAccidentValue;
      if (anneeFideliteValue < 5) {
        malus += 1;
      }
    }

    switch (malus) {
      case -1:
        alert("Demandez à vos parents");
        break;
      case 0:
        alert("Tarif Bleu");
        break;
      case 1:
        alert("Tarif Vert");
        break;
      case 2:
        alert("Tarif Orange");
        break;
      case 3:
        alert("Tarif Rouge");
        break;
      default:
        alert("Impossible de vous assurer");
        break;
    }
  } else {
    alert("veuilez rentrer de nombre valide");
  }
};

const simulationAssurance = (): void => {
  const submitBtnex6 = document.getElementById("btnSubmit") as HTMLButtonElement;

  submitBtnex6.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    calculPrime();
  });
};

simulationAssurance();
