// ===================== @>25@:0 Gmail =====================
const input = document.getElementById('gmail_input');
const button = document.getElementById('gmail_button');
const result = document.getElementById('gmail_result');

const gmailRegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

button.addEventListener('click', () => {
    const value = input.value.trim();
    if (gmailRegExp.test(value)) {
        result.textContent = '>GB0 25@=0';
        result.style.color = 'green';
    } else {
        result.textContent = '>GB0 =5 25@=0';
        result.style.color = 'red';
    }
});

// ===================== @>25@:0 B5;5D>=0 =====================
const phoneInput = document.getElementById('phone_input');
const phoneButton = document.getElementById('phone_button');
const phoneResult = document.getElementById('phone_result');

const phoneRegExp = /^(\+7|8)[0-9]{10}$/;

phoneButton.addEventListener('click', () => {
    const value = phoneInput.value.trim();
    if (phoneRegExp.test(value)) {
        phoneResult.textContent = '"5;5D>= 25@=K9';
        phoneResult.style.color = 'green';
    } else {
        phoneResult.textContent = '"5;5D>= =5 25@=K9';
        phoneResult.style.color = 'red';
    }
});

// ===================== @>25@:0  =====================
const iinInput = document.getElementById('iin_input');
const iinButton = document.getElementById('iin_button');
const iinResult = document.getElementById('iin_result');

const iinRegExp = /^[0-9]{12}$/;

iinButton.addEventListener('click', () => {
    const value = iinInput.value.trim();
    if (iinRegExp.test(value)) {
        iinResult.textContent = ' 25@=K9';
        iinResult.style.color = 'green';
    } else {
        iinResult.textContent = ' =5 25@=K9';
        iinResult.style.color = 'red';
    }
});
