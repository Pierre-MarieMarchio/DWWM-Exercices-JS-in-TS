
const timeInpute = document.getElementById("heureImpression") as HTMLInputElement;
const submitBtnex3 = document.getElementById("btnSubmit") as HTMLButtonElement;

const convertTimeInDate = (timeValue: string): number => {
    let [hour, minute, second] = timeValue.split(':').map(Number); 
    let now: Date = new Date();

    const todayTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hour,
        minute,
        second
    );

    let timeConverted = todayTime.getTime();
    return timeConverted;
};

const futurDate = (currentTime: number): Date => {
    let futureTime: number = currentTime + 1000;
    let futureDate: Date = new Date(futureTime);
    console.log(futureDate);
    return futureDate;
};

const formatedFuturDate = (futurDate: Date): string => {

    const hours = futurDate.getHours();
    const minutes = futurDate.getMinutes();
    const seconds = futurDate.getSeconds() ;

    const formatedFuturDate: string = hours.toString()+" heurs et " + minutes.toString()+ " minutes et " + seconds.toString() + " seconds "
    return formatedFuturDate;

};

submitBtnex3.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    let timeValue = timeInpute?.value;
    let currentTime = convertTimeInDate(timeValue);
    let futureDate = futurDate(currentTime);
    let result = formatedFuturDate(futureDate);

    alert(" l'heure dans une seconde seras: " + result)
});