const age = document.getElementById("age") as HTMLInputElement;
const sex = document.getElementById("sex") as HTMLInputElement;
const btnSubmit = document.getElementById("btnSubmit") as HTMLButtonElement;


let formResults = {
    age: "",
    sex: "",
}

const handleform = () => {
  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    let ageValue: string = "";
    let sexValue: string = "";

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

