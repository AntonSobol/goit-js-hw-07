const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function updateName() {
  const trimmedValue = nameInput.value.trim();

  if (trimmedValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = trimmedValue;
  }
}

nameInput.addEventListener("input", updateName);
