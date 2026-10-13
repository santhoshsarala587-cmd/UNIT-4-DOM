const output = document.getElementById('output');

const MIN_USERNAME = 4;
const MIN_PASSWORD = 8;

function log(msg, isError = false) {
    const p = document.createElement('p');
    p.textContent = msg;
    p.style.color = isError ? '#f87171' : '#4ade80';
    output.appendChild(p);
}

function clearLog() {
    output.innerHTML = '';
}

// shows or hides the red error state of one field
function setError(input, errorBox, hasError) {
    input.classList.toggle('error', hasError);
    errorBox.style.display = hasError ? 'block' : 'none';
}

function validateForm() {
    let isValid = true;

    // Username
    const username = document.getElementById('username');
    const badUser = username.value.trim().length < MIN_USERNAME;
    setError(username, document.getElementById('usernameError'), badUser);
    if (badUser) isValid = false;

    // Email
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const badEmail = !emailPattern.test(email.value);
    setError(email, document.getElementById('emailError'), badEmail);
    if (badEmail) isValid = false;

    // Password
    const password = document.getElementById('password');
    const badPass = password.value.length < MIN_PASSWORD;
    setError(password, document.getElementById('passwordError'), badPass);
    if (badPass) isValid = false;

    // Confirm password
    const confirmPwd = document.getElementById('confirmPassword');
    const badConfirm = confirmPwd.value !== password.value || confirmPwd.value === '';
    setError(confirmPwd, document.getElementById('confirmError'), badConfirm);
    if (badConfirm) isValid = false;

    return isValid;
}

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    clearLog();

    if (validateForm()) {
        log('✅ Form is valid! Submitting...');
        log(`Welcome ${document.getElementById('username').value.trim()}!`);
    } else {
        log('❌ Form has errors. Please fix them.', true);
    }
});

document.getElementById('validateBtn').onclick = () => {
    clearLog();
    if (validateForm()) {
        log('All fields are valid!');
    } else {
        log('Validation failed. Check the red fields', true);
    }
};
