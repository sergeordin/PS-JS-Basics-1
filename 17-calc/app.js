let operation = '';
const btns = {
    plus: document
        .getElementById('plus')
        .addEventListener('click', (event) => setOperator(event)),
    minus: document
        .getElementById('minus')
        .addEventListener('click', (event) => setOperator(event)),
    times: document
        .getElementById('times')
        .addEventListener('click', (event) => setOperator(event)),
    divide: document
        .getElementById('divide')
        .addEventListener('click', (event) => setOperator(event)),
};

function setOperator(event) {
    operation = event.target.value;
}

function formReset() {
    const input1 = document.getElementById('num1');
    input1.value = '';
    const input2 = document.getElementById('num2');
    input2.value = '';
}

function calcRes() {
    let result = 0;
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    switch (operation) {
        case 'plus':
            result = num1 + num2;
            break;
        case 'minus':
            result = num1 - num2;
            break;
        case 'times':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
    }
    document.getElementById('result').innerHTML = result;
    num1 = '';
    num2 = '';
    formReset();
}
