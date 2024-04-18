"use strict";
const age = document.getElementById("age");
const sex = document.getElementById("sex");
const btnSubmit = document.getElementById("btnSubmit");
let formResults = {
    age: "",
    sex: "",
};
const handleform = () => {
    btnSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        let ageValue = "";
        let sexValue = "";
        if (age) {
            ageValue = age.value;
        }
        if (sex) {
            sexValue = sex.value;
        }
        formResults = {
            age: ageValue,
            sex: sexValue
        };
        return formResults;
    });
};
