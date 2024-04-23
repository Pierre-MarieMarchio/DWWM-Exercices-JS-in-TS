"use strict";
const passwordInput = document.getElementById("passwordInput");
const passwordMessage = document.getElementById("validEmailPassword");
const passwordVerification = (password) => {
    const longueur = password.length;
    let score = 0;
    if (longueur >= 12) {
        score += 3;
    }
    else if (longueur >= 8 && longueur < 12) {
        score += 2;
    }
    else if (longueur >= 6 && longueur < 8) {
        score += 1;
    }
    if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password)) {
        score += 1;
    }
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        score += 1;
    }
    if (/\d/.test(password)) {
        score += 1;
    }
    if (score >= 7) {
        return "Très sécurisé";
    }
    else if (score >= 4 && score < 7) {
        return "Sécurisé";
    }
    else if (score >= 2 && score < 4) {
        return "Moyen";
    }
    else {
        return "Dangereux";
    }
};
const passwordVerificationHandler = () => {
    passwordInput.addEventListener("keyup", () => {
        let password = passwordInput.value;
        if (password) {
            passwordMessage.innerText = passwordVerification(password);
        }
        else {
            console.error("Error: password input not found");
            return;
        }
    });
};
passwordVerificationHandler();
