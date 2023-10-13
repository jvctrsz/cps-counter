const observarClick = document.querySelector(".btn-container");
let timerDisplay = document.querySelector("#timerChange");
const iniciar = document.querySelector("#start-counter");
const areaClick = document.querySelector("#area-click");
const clicksDisplay = document.querySelector("#clicksChange");
const cpsDisplay = document.querySelector("#cpsChange");
let clicks = 0;

const gameArea = document.querySelector("#game");
const resultArea = document.querySelector("#resultados");

let resultTimer = document.querySelector("#resultTimeDisplay");
let resultClicks = document.querySelector("#resultClickDisplay");
let resultCps = document.querySelector("#resultCpsDisplay");
let teste;
observarClick.addEventListener("click", (event) => {
  numberTimerValue(event.target.attributes.number.value);
  chooseTime(event.target);
});

function numberTimerValue(number) {
  let lockNumber = Number(number);
  timerDisplay.innerHTML = number;

  iniciar.addEventListener("click", () => {
    clicks = 0;
    iniciar.style.display = "none";
    areaClick.style.display = "block";

    setInterval(() => {
      if (lockNumber > 0) {
        timerDisplay.innerHTML = lockNumber - 1;
      }
      lockNumber--;
      if (lockNumber < 0) {
        areaClick.style.display = "none";
        setInterval(() => {
          gameArea.style.display = "none";
          resultArea.style.display = "block";
        }, 500);
      }
    }, 1000);
  });
  areaClick.addEventListener("click", () => {
    clicks += 1;
    clicksDisplay.innerHTML = clicks;
    let soma = clicks / number;
    cpsDisplay.innerHTML = soma.toFixed(1);
    resultTimer.innerHTML = `<h2>Esses foram seus resultados em ${number}s</h2>`;
    resultClicks.innerHTML = `<p>${clicks} clicks</p>`;
    resultCps.innerHTML = `<p>${soma.toFixed(1)} cps</p>`;
  });
}

function chooseTime(event) {
  let btnTarget = event;
  let activeElement = document.querySelector(`button[class="btn-time active"]`);
  if (event) {
    btnTarget.classList.add("active");
    if (activeElement) {
      activeElement.classList.remove("active");
    }
  }
}

function recarregarAPagina() {
  window.location.reload();
}
