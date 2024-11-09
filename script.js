let startTime, elapsedTime = 0, timerInterval;

const timeDisplay = document.getElementById("time-display");

function formatTime(time) {
  const milliseconds = Math.floor((time % 1000));
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timeDisplay.textContent = formatTime(elapsedTime);
  }, 10);
  showButton("PAUSE");
}

function pause() {
  clearInterval(timerInterval);
  showButton("START");
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timeDisplay.textContent = "00:00:00.000";
  showButton("START");
}

function showButton(buttonKey) {
  const startButton = document.getElementById("start-btn");
  const pauseButton = document.getElementById("pause-btn");

  if (buttonKey === "START") {
    startButton.style.display = "inline-block";
    pauseButton.style.display = "none";
  } else {
    startButton.style.display = "none";
    pauseButton.style.display = "inline-block";
  }
}

document.getElementById("start-btn").addEventListener("click", start);
document.getElementById("pause-btn").addEventListener("click", pause);
document.getElementById("reset-btn").addEventListener("click", reset);

showButton("START");
