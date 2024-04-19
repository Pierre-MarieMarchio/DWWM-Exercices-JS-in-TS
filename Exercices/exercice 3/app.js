"use strict";
const timeInpute = document.getElementById("heureImpression");
const submitBtnex3 = document.getElementById("btnSubmit");
const convertTimeInDate = (timeValue) => {
    let [hour, minute, second] = timeValue.split(':').map(Number);
    let now = new Date();
    const todayTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, second);
    let timeConverted = todayTime.getTime();
    return timeConverted;
};
const futurDate = (currentTime) => {
    let futureTime = currentTime + 1000;
    let futureDate = new Date(futureTime);
    console.log(futureDate);
    return futureDate;
};
const formatedFuturDate = (futurDate) => {
    const hours = futurDate.getHours();
    const minutes = futurDate.getMinutes();
    const seconds = futurDate.getSeconds();
    const formatedFuturDate = hours.toString() + " heurs et " + minutes.toString() + " minutes et " + seconds.toString() + " seconds ";
    return formatedFuturDate;
};
submitBtnex3.addEventListener("click", (e) => {
    e.preventDefault();
    let timeValue = timeInpute === null || timeInpute === void 0 ? void 0 : timeInpute.value;
    let currentTime = convertTimeInDate(timeValue);
    let futureDate = futurDate(currentTime);
    let result = formatedFuturDate(futureDate);
    alert(" l'heure dans une seconde seras: " + result);
});
