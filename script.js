const dobElement = document.getElementById("dob");
const btnElement = document.getElementById("btn");
const resultElement = document.getElementById("result");

function calculateAge() {
  const dobValue = dobElement.value;
  if (dobValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(dobValue);
    resultElement.innerText = `You are ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(dobValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(dobValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnElement.addEventListener("click", calculateAge);
