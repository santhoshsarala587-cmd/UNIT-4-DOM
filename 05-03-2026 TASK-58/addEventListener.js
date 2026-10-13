const output = document.getElementById('output');
const clickBox = document.getElementById('clickBox');
let clickCount = 0;

function log(msg) {
    const p = document.createElement('p');
    p.textContent = msg;
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
}

// First event listener (always attached)
function handler1() {
    clickCount++;
    log(`Handler 1: Box clicked ${clickCount} time(s)`);
}

// Second event listener (attached with a button)
function handler2() {
    log('Handler 2: Second listener also ran!');
}

clickBox.addEventListener('click', handler1);

let secondAttached = false;

document.getElementById('attachMoreBtn').onclick = () => {
    if (!secondAttached) {
        clickBox.addEventListener('click', handler2);
        secondAttached = true;
        log('Second click listener attached!');
    } else {
        log('Second listener is already attached');
    }
};

document.getElementById('removeListenerBtn').onclick = () => {
    if (secondAttached) {
        clickBox.removeEventListener('click', handler2);
        secondAttached = false;
        log('Second listener removed');
    } else {
        log('No extra listener to remove');
    }
};

log('Ready! Click the red box to see events');
