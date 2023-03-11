'use strict';

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    document.querySelector('.notification').classList.remove('notification');
    const textStr = JSON.stringify({
        text: input,
    });
    localStorage.setItem('text', textStr);
}

document.querySelector('.input').addEventListener('keydown', (e) => {
    if (e.code == 'Enter') {
        submitForm();
    }
});

console.log(document.querySelector('.one').innerText);
