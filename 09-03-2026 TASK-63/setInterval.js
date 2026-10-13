const output = document.getElementById('output');
const display = document.getElementById('stopwatchDisplay');

let seconds = 0;
let intervalId = null;
let isRunning = false;
let lapCount = 0;

function log(msg) {
    const p = document.createElement('p');
    p.textContent = msg;
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
}

function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
}

function updateDisplay() {
    display.textContent = formatTime(seconds);
}

// runs every 1000 ms while the stopwatch is on
function tick() {
    seconds++;
    updateDisplay();
}

document.getElementById('startBtn').onclick = () => {
    if (!isRunning) {
        intervalId = setInterval(tick, 1000);
        isRunning = true;
        log('▶️ Stopwatch started');
    } else {
        log('Stopwatch is already running');
    }
};

document.getElementById('pauseBtn').onclick = () => {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
        log(`⏸️ Paused at ${formatTime(seconds)}`);
    } else {
        log('Stopwatch is not running');
    }
};

document.getElementById('lapBtn').onclick = () => {
    if (isRunning) {
        lapCount++;
        log(`🚩 Lap ${lapCount}: ${formatTime(seconds)}`);
    } else {
        log('Start the stopwatch to record a lap');
    }
};

document.getElementById('resetBtn').onclick = () => {
    clearInterval(intervalId);
    isRunning = false;
    seconds = 0;
    lapCount = 0;
    updateDisplay();
    output.innerHTML = '';
    log('🔄 Stopwatch reset to 0:00');
};

log('Ready. Use Start, Pause, Lap and Reset');
