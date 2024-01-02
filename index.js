function displayAnswer(response) {
  new Typewriter("#answer", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRoutine(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "31f697f233da06aa04dbt2b68de8ob94";
  let prompt = `Generate a fitness routine about ${instructionsInput.value}`;
  let context =
    "You are a professional personal trainer. Your goal is to generate a body routine really simple and easy to understand, with no mayor explanations. Write the answer in basic HTML. Sign at the end with `SheCodes AI` inside a <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating answer...");

  let answerElement = document.querySelector("#answer");
  answerElement.classList.remove("hidden");
  answerElement.innerHTML = `<div class="blink"> Generating the routine⏳...</div>`;

  axios.get(apiUrl).then(displayAnswer);
}

let generatorElement = document.querySelector("#routine-generator");

generatorElement.addEventListener("submit", generateRoutine);
