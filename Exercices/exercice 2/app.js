"use strict";
const nbPhotocopiesInput = document.getElementById("nbPhotocopies");
const submitBtn = document.getElementById("btnSubmit");
const calcPhotocopiesPrice = (nbPhotocopies) => {
    let price = 0;
    if (nbPhotocopies <= 10) {
        price = nbPhotocopies * 0.1;
        return price;
    }
    else if (nbPhotocopies <= 30) {
        price = nbPhotocopies * 0.09 + 1;
        return price;
    }
    else if (nbPhotocopies >= 31) {
        price = nbPhotocopies * 0.08 + 2.8;
        return price;
    }
    return price;
};
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let totalPrice = 0;
    let nbPhotocopies = parseInt(nbPhotocopiesInput.value);
    if (nbPhotocopies) {
        totalPrice = calcPhotocopiesPrice(nbPhotocopies);
        alert("le prix est de: " + totalPrice);
    }
    else {
        alert("veuillez entrer le nombre de Photocopies");
        return;
    }
});
