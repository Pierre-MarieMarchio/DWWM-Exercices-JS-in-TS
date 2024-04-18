const age = document.getElementById("age") as HTMLInputElement;
const sexe = document.getElementById("sexe") as HTMLInputElement;
const btnSubmit = document.getElementById("btnSubmit") as HTMLButtonElement;

let formResults = {
  age: 0,
  sexe: "",
};

const handleform = () => {
  let ageValue: number = 0;
  let sexeValue: string = "";

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

const impotsVerificator = (age: number, sexe: string) => {
  if (sexe == "homme" && age >= 20) {
  } else if (sexe == "femme" && age >= 18 && sexe == "femme" && age <= 35) {
    alert("imposable");
  } else {
    alert("non imposable");
  }
};

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let formvalue = handleform();

  impotsVerificator(formvalue.age, formvalue.sexe);
  console.log(formvalue);
});
