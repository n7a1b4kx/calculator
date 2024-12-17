
const DISPLAY_PANEL = document.querySelector('#panel');
const OPERATOR_DISPLAY = document.querySelector('#operator-display');
const EXPRESSION_DISPLAY = document.querySelector('#expression-display');
const currentEXPRESSION = document.querySelector('#currentExpression');

const OPERATOR_BUTTON = document.querySelectorAll('.operator');
OPERATOR_BUTTON.forEach((button) => {
    button.addEventListener('click', () => {
        OPERATOR_DISPLAY.innerHTML = button.value;
    })
});

const NUM_BUTTON = document.querySelectorAll('.number');
NUM_BUTTON.forEach((button) => {
    button.addEventListener('click', () => {
        userInput(button.value);
    })
});

function userInput(input) {
    let size = EXPRESSION_DISPLAY.innerText.length;
    (size <= 16) ? EXPRESSION_DISPLAY.innerText += input: alert('oh no!');
}

const CALCULATOR = {
    operandOne: null,
    operandTwo: null,
    isOperandOneEmpty: true,
    isOperandTwoEmpty: true,
    operator: '',
    isOperatorEmpty: true,
    clearPanel: () => {
        OPERATOR_DISPLAY.innerHTML = '';
        EXPRESSION_DISPLAY.innerText = '';
    },
}