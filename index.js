function generateRoutine(event) {
  event.preventDefault();

  new Typewriter("#answer", {
    strings: "This is the answer",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let generatorElement = document.querySelector("#routine-generator");

generatorElement.addEventListener("submit", generateRoutine);
