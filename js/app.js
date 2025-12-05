let timerIntervalId
let winTime, min, sec, seconds = 0

const startBtn = document.getElementById('start-btn')
const resetBtn = document.getElementById('reset-btn')
const timerEl = document.getElementById('timer')

startBtn.addEventListener('click', startGame)
resetBtn.addEventListener('click', resetGame)

function startGame() {
  if (timerIntervalId) {
    seconds = 0
    clearInterval(timerIntervalId)
  }
  renderTime()
  timerIntervalId = setInterval(tick, 1000)
}

function tick() {

}

function renderTime() {

}

function resetGame() {

}