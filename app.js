'use strict';

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
}

document.querySelector('.input').addEventListener('keydown', (e) => {
    if (e.code == 'Enter') {
        submitForm();
    }
});
