const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const btnFormat = document.querySelector(".controls__button--format");
const btnMinify = document.querySelector(".controls__button--minify");

btnFormat.addEventListener("click", () => {
  const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);

  outputArea.value = formatted;
});

btnMinify.addEventListener("click", () => {
  const clear = JSON.stringify("Your JSON will appear here...");

  outputArea.value = clear;
});