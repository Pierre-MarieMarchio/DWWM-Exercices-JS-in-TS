"use strict";
const ageInput = document.getElementById("age");
const anneePermisInput = document.getElementById("anneePermis");
const anneeFideliteInput = document.getElementById("anneeFidelite");
const nbAccidentInput = document.getElementById("nbAccident");
const calculPrime = () => {
    const anneeFideliteValue = parseInt(anneeFideliteInput.value);
    const anneePermisValue = parseInt(anneePermisInput.value);
    const nbAccidentValue = parseInt(nbAccidentInput.value);
    const ageInputValue = parseInt(ageInput.value);
    let malus = 0;
    if (anneeFideliteValue >= 0 && anneePermisValue >= 0 && nbAccidentValue >= 0 && ageInputValue >= 0) {
        if (ageInputValue < 18) {
            malus = -1;
        }
        else {
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
    }
    else {
        alert("veuilez rentrer de nombre valide");
    }
};
const simulationAssurance = () => {
    const submitBtnex6 = document.getElementById("btnSubmit");
    submitBtnex6.addEventListener("click", (e) => {
        e.preventDefault();
        calculPrime();
    });
};
simulationAssurance();
