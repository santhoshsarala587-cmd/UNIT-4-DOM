const output = document.getElementById('output');
const nameInput = document.getElementById('name');
const colorSelect = document.getElementById('color');
const messageArea = document.getElementById('message');
const previewSpan = document.getElementById('preview');
const myForm = document.getElementById('myForm');

function log(msg) {
    const p = document.createElement('p');
    p.textContent = msg;
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
}

function updatePreview() {
    const name = nameInput.value || '___';
    const color = colorSelect.value || 'no color yet';
    const msg = messageArea.value.substring(0, 30);
    previewSpan.textContent = `${name} picked ${color} and wrote: "${msg}"`;
}

// input event: fires on every keystroke
nameInput.addEventListener('input', (e) => {
    log(`Input event: value is now "${e.target.value}"`);
    updatePreview();
});

// change event: fires when a new option is chosen
colorSelect.addEventListener('change', (e) => {
    log(`Change event: selected color = ${e.target.value || 'none'}`);
    updatePreview();
});

// input event for the textarea
messageArea.addEventListener('input', () => {
    updatePreview();
});

// submit event
myForm.addEventListener('submit', (e) => {
    e.preventDefault(); // stop the page from reloading
    log(`FORM SUBMITTED! Name: ${nameInput.value}, Color: ${colorSelect.value}, Message: ${messageArea.value}`);
    alert('Form submitted! Check the log below.');
});

// reset button
document.getElementById('resetBtn').addEventListener('click', (e) => {
    e.preventDefault();
    myForm.reset();
    updatePreview();
    log('Form was reset');
});

log('Form events ready. Try typing, selecting or submitting');
