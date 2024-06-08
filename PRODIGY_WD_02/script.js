let timer;
let running = false;
let time = 0;
let laps = [];

function startStop() {
  if (running) {
    clearInterval(timer);
    document.getElementById('startStop').textContent = 'Start';
  } else {
    timer = setInterval(updateDisplay, 10);
    document.getElementById('startStop').textContent = 'Stop';
  }
  running = !running;
}

function lap() {
  laps.push(time);
  displayLaps();
}

function reset() {
  clearInterval(timer);
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('startStop').textContent = 'Start';
  running = false;
  time = 0;
  laps = [];
  displayLaps();
}

function updateDisplay() {
  time++;
  let hours = Math.floor(time / 360000);
  let minutes = Math.floor((time / 6000) % 60);
  let seconds = Math.floor((time / 100) % 60);
  let milliseconds = time % 100;
  
  document.getElementById('display').textContent = 
    `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatMilliseconds(milliseconds)}`;
}

function formatTime(value) {
  return value < 10 ? '0' + value : value;
}

function formatMilliseconds(value) {
  return value < 10 ? '0' + value : value < 100 ? '0' + value : value;
}

function displayLaps() {
  let lapsList = document.getElementById('laps');
  lapsList.innerHTML = '';
  laps.forEach((lapTime, index) => {
    let listItem = document.createElement('li');
    listItem.textContent = `Lap ${index + 1}: ${formatLapTime(lapTime)}`;
    lapsList.appendChild(listItem);
  });
}

function formatLapTime(time) {
  let minutes = Math.floor((time / 6000) % 60);
  let seconds = Math.floor((time / 100) % 60);
  let milliseconds = time % 100;
  return `${formatTime(minutes)}:${formatTime(seconds)}.${formatMilliseconds(milliseconds)}`;
}
