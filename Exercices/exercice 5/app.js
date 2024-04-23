"use strict";
const emailImput = document.getElementById("emailImput");
const emailMessage = document.getElementById("validEmailMessage");
emailImput.addEventListener("keyup", (e) => {
    e.preventDefault();
    let emailvalue = emailImput.value;
    let regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regexMail.test(emailvalue)) {
        console.log("ici");
        emailMessage.textContent = "Le mail et valide";
    }
    else {
        emailMessage.textContent = "le mail n'est pas valide";
    }
});
