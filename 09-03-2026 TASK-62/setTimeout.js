const output = document.getElementById('output');
const countdownDisplay = document.getElementById('countdownDisplay');

const DELAY_SECONDS = 5;

let timerId = null;     // id returned by setTimeout
let intervalId = null;  // id of the visual countdown

function log(msg) {
    const p = document.createElement('p');
    p.textContent = msg;
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
}

function showCountdown(seconds) {
    countdownDisplay.textContent = `${seconds} second(s) left...`;
}

document.getElementById('startTimerBtn').onclick = () => {
    if (timerId) {
        log('⚠️ Timer already running! Cancel it first');
        return;
    }

    log(`⏰ Timer started! It will fire after ${DELAY_SECONDS} seconds`);
    showCountdown(DELAY_SECONDS);

    // visual countdown (updates every second)
    let count = DELAY_SECONDS;
    intervalId = setInterval(() => {
        count--;
        if (count > 0) {
            showCountdown(count);
        } else {
            clearInterval(intervalId);
        }
    }, 1000);

    // the main setTimeout: runs ONE time after the delay
    timerId = setTimeout(() => {
        log(`✅ TIMER FIRED! ${DELAY_SECONDS} seconds have passed`);
        countdownDisplay.textContent = 'Timer completed!';
        timerId = null;
        clearInterval(intervalId);
    }, DELAY_SECONDS * 1000);
};

document.getElementById('cancelTimerBtn').onclick = () => {
    if (timerId) {
        clearTimeout(timerId);
        clearInterval(intervalId);
        timerId = null;
        countdownDisplay.textContent = 'Timer cancelled';
        log('❌ Timer was cancelled before it could fire');
    } else {
        log('No active timer to cancel');
    }
};

log('Ready. Start the timer and try cancelling it');
