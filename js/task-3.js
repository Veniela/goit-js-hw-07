const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const cleanedValue = input.value.trim();
  output.textContent = cleanedValue !== "" ? cleanedValue : "Anonymous";
});
