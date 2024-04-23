const emailImput = document.getElementById("emailImput") as HTMLInputElement;
const emailMessage = document.getElementById("validEmailMessage") as HTMLParagraphElement;

emailImput.addEventListener("keyup", (e) => {
  e.preventDefault();
  let emailvalue: string = emailImput.value;
  let regexMail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (regexMail.test(emailvalue)) {
    console.log("ici");

    emailMessage.textContent = "Le mail et valide";
  } else {
    emailMessage.textContent = "le mail n'est pas valide";
  }
});
