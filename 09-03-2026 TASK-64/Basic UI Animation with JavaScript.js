const box = document.getElementById('animatedBox');
const output = document.getElementById('output');

const STEP = 80;       // pixels moved per click
const MAX_LEFT = 400;  // right boundary
const MAX_TOP = 220;   // bottom boundary

let currentLeft = 0;
let currentTop = 0;
let isMoving = false;

function log(msg) {
    const p = document.createElement('p');
    p.textContent = msg;
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
}

// Smooth movement using requestAnimationFrame
function animateMove(targetLeft, targetTop, duration = 300) {
    if (isMoving) return; // ignore clicks while the box is moving
    isMoving = true;

    const startLeft = currentLeft;
    const startTop = currentTop;
    const startTime = performance.now();

    function step(now) {
        const progress = Math.min(1, (now - startTime) / duration);

        currentLeft = startLeft + (targetLeft - startLeft) * progress;
        currentTop = startTop + (targetTop - startTop) * progress;
        box.style.left = currentLeft + 'px';
        box.style.top = currentTop + 'px';

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            isMoving = false;
            log(`✅ Moved to Left: ${Math.round(currentLeft)}px, Top: ${Math.round(currentTop)}px`);
        }
    }

    requestAnimationFrame(step);
}

document.getElementById('moveRightBtn').onclick = () => {
    if (currentLeft + STEP <= MAX_LEFT) {
        animateMove(currentLeft + STEP, currentTop);
    } else {
        log('⚠️ Cannot move further right (boundary)');
    }
};

document.getElementById('moveLeftBtn').onclick = () => {
    if (currentLeft - STEP >= 0) {
        animateMove(currentLeft - STEP, currentTop);
    } else {
        log('⚠️ Cannot move further left (boundary)');
    }
};

document.getElementById('moveDownBtn').onclick = () => {
    if (currentTop + STEP <= MAX_TOP) {
        animateMove(currentLeft, currentTop + STEP);
    } else {
        log('⚠️ Cannot move further down (boundary)');
    }
};

document.getElementById('moveUpBtn').onclick = () => {
    if (currentTop - STEP >= 0) {
        animateMove(currentLeft, currentTop - STEP);
    } else {
        log('⚠️ Cannot move further up (boundary)');
    }
};

// Fade animation: changes opacity a little on every frame
function fadeTo(target) {
    let opacity = parseFloat(box.style.opacity);
    if (isNaN(opacity)) opacity = 1;

    function fade() {
        opacity += target > opacity ? 0.05 : -0.05;

        const done = target > opacity ? opacity >= target : opacity <= target;
        box.style.opacity = done ? target : opacity;

        if (!done) {
            requestAnimationFrame(fade);
        } else {
            log(target === 0 ? 'Box faded out' : 'Box faded in');
        }
    }

    requestAnimationFrame(fade);
}

document.getElementById('fadeOutBtn').onclick = () => {
    log('Fading out...');
    fadeTo(0);
};

document.getElementById('fadeInBtn').onclick = () => {
    log('Fading in...');
    fadeTo(1);
};

document.getElementById('resetAnimBtn').onclick = () => {
    box.style.opacity = 1;
    if (currentLeft === 0 && currentTop === 0) {
        log('Already at the origin');
    } else {
        animateMove(0, 0);
    }
};

// Initial styles
box.style.left = '0px';
box.style.top = '0px';
box.style.opacity = '1';

log('Animation ready! Click the buttons to move or fade the box');
