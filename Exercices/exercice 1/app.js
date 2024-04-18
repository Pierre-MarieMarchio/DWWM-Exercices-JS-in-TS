"use strict";
const age = document.getElementById("age");
const sexe = document.getElementById("sexe");
const btnSubmit = document.getElementById("btnSubmit");
let formResults = {
    age: 0,
    sexe: "",
};
const handleform = () => {
    let ageValue = 0;
    let sexeValue = "";
    if (age) {
        ageValue = parseInt(age.value);
    }
    if (sexe) {
        sexeValue = sexe.value;
    }
    formResults = {
        age: ageValue,
        sexe: sexeValue,
    };
    return formResults;
};
const impotsVerificator = (age, sexe) => {
    if (sexe == "homme" && age >= 20) {
    }
    else if (sexe == "femme" && age >= 18 && sexe == "femme" && age <= 35) {
        alert("imposable");
    }
    else {
        alert("non imposable");
    }
};
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let formvalue = handleform();
    impotsVerificator(formvalue.age, formvalue.sexe);
    console.log(formvalue);
});
