const firstName = document.querySelector("#firstName");
const submit = document.querySelector("#submit");
const displayName = document.querySelector("#displayName");

submit.addEventListener("click", greet);

function greet(e) {
  e.preventDefault();

  displayName.innerHTML = `hi ${firstName.value}`;
  alert(`hello ${firstName.value}`)
}
