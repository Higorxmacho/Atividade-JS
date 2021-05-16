let OriginalText = document.querySelector("#original");
let ModifiedText = document.querySelector("#modificado");
let CounterSpan = document.querySelector("#character-counter-span");
let efeito = document.querySelector("#efeito");
let OriginalTextEmpty = document.querySelector("TitleToOriginalText");

OriginalText.addEventListener("keyup", (event) => {
  const target = event.currentTarget;
  CounterSpan.innerText = target.value.length;

  return target.value;
});

efeito.addEventListener("change", (event) => {
  const target = event.currentTarget;
  OptionSelected = target.value;
  ChangeStrings(OptionSelected);
});

function ChangeStrings(OptionSelected) {
  if (OptionSelected == "uppercase") {
    ModifiedText.innerText = OriginalText.value.toUpperCase();
  } else if (OptionSelected == "lowercase") {
    ModifiedText.innerText = OriginalText.value.toLowerCase();
  } else if (OptionSelected == "nospace") {
    ModifiedText.innerText = OriginalText.value.trim();
  } else if (OptionSelected == "divise") {
    ModifiedText.innerText = OriginalText.value.split(" ");
  }
}
