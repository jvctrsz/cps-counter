const observarClick = document.querySelector(".btn-container");
let timerDisplay = document.querySelector("#timerChange");
const iniciar = document.querySelector("#start-counter");
const areaClick = document.querySelector("#area-click");
const clicksDisplay = document.querySelector("#clicksChange");
const cpsDisplay = document.querySelector("#cpsChange");
let clicks = 0;

const gameArea = document.querySelector('#game')
const resultArea = document.querySelector('#resultados')

let resultTimer = document.querySelector('#resultTimeDisplay')
let resultClicks = document.querySelector('#resultClickDisplay')
let resultCps = document.querySelector('#resultCpsDisplay')

observarClick.addEventListener("click", (event) => {
  numberTimerValue(event.target.attributes.number.value);
  chooseTime(event.target);
});

function numberTimerValue(number) {
  const lockNumber = number
  timerDisplay.innerHTML = number;
  
  iniciar.addEventListener("click", () => {
    clicks = 0;
    iniciar.style.display = "none";

    setInterval(() => {
      if (number > 0) {
        timerDisplay.innerHTML = number - 1;
        number--;
      } else {
        areaClick.style.display = "none";
        setInterval(()=>{
          gameArea.style.display = 'none'
          resultArea.style.display = 'block'
        },500)
       
      }
    }, 1000);

    if (number > 0) {
      areaClick.style.display = "block";
      areaClick.addEventListener("click", () => {
        clicks += 1;
        clicksDisplay.innerHTML = clicks;
        let soma = clicks / lockNumber
        cpsDisplay.innerHTML = soma.toFixed(1)
        
        resultTimer.innerHTML = `Esses foram seus resultados em ${lockNumber}s`
        resultClicks.innerHTML = `${clicks} clicks`
        resultCps.innerHTML = `${soma} cps`
      });
    } 

    
  });
          
}
function chooseTime(event) {
  let btnTarget = event;
  let activeElement = document.querySelector(`button[class="btn-time active"]`);
  if (event) {
    btnTarget.classList.add("active");
    activeElement.classList.remove("active");
  }
}

function recarregarAPagina(){
  window.location.reload();
} 