const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim();

  output.textContent = inputValue ? inputValue : "Anonymous";
});
