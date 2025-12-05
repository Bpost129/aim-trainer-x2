let timerIntervalId
let winTime, min, sec, seconds = 0

const startBtn = document.getElementById('start-btn')
const resetBtn = document.getElementById('reset-btn')
const timerEl = document.getElementById('timer')

startBtn.addEventListener('click', startGame)
resetBtn.addEventListener('click', resetGame)

function startGame() {
  resetGame()
  timerIntervalId = setInterval(tick, 1000)
}

function tick() {
  seconds++
  renderTime()
}

function renderTime() {
  min = Math.floor(seconds / 60)
  sec = seconds % 60
  if (sec < 10) {
    timerEl.textContent = `${min}:0${sec}`
  } else {
    timerEl.textContent = `${min}:${sec}`
  }
}

function resetGame() {
  if (timerIntervalId) {
    seconds = 0
    clearInterval(timerIntervalId)
  }
  renderTime()
}
