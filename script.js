
const DISPLAY_PANEL = document.querySelector('#panel');
const OPERATOR_DISPLAY = document.querySelector('#operator-display');
const EXPRESSION_DISPLAY = document.querySelector('#expression-display');
const currentEXPRESSION = document.querySelector('#currentExpression');

const OPERATOR_BUTTON = document.querySelectorAll('.operator');
OPERATOR_BUTTON.forEach((button) => {
    button.addEventListener('click', () => {
        if (CALCULATOR.isOperatorEmpty) {
            OPERATOR_DISPLAY.innerHTML = button.value;
            CALCULATOR.operator = button.id;
            EXPRESSION_DISPLAY.innerText = '';
            CALCULATOR.isOperatorEmpty = false;
        }
    })
});

const NUM_BUTTON = document.querySelectorAll('.number');
NUM_BUTTON.forEach((button) => {
    button.addEventListener('click', () => {
        userInput(button.value);
    })
});

const BUTTON = document.querySelectorAll('.button');
BUTTON.forEach((button)  => {
    button.addEventListener('click', () => {
        (button.innerHTML !== 'Clear') ?
            currentEXPRESSION.innerHTML += button.innerHTML: null;
    })
});

function userInput(input) {
    let size = EXPRESSION_DISPLAY.innerText.length;
    (size <= 16) ? EXPRESSION_DISPLAY.innerText += input: alert('oh no!');
    (CALCULATOR.isOperatorEmpty) ? CALCULATOR.operandOne = parseInt((CALCULATOR.operandOne || '') + input): CALCULATOR.operandTwo = parseInt((CALCULATOR.operandTwo || '') + input);
}

const CALCULATOR = {
    operandOne: null,
    operandTwo: null,
    operator: '',
    isOperatorEmpty: true,
    computeExpression: () => {
        switch (CALCULATOR.operator) {
            case 'addition':
                CALCULATOR.operandOne = CALCULATOR.operandOne + CALCULATOR.operandTwo;
                break;
            case 'substract':
                CALCULATOR.operandOne = CALCULATOR.operandOne - CALCULATOR.operandTwo;
                break;
            case 'multiply':
                CALCULATOR.operandOne = CALCULATOR.operandOne * CALCULATOR.operandTwo;
                break;
            case 'division':
                CALCULATOR.operandOne = Math.round((CALCULATOR.operandOne / CALCULATOR.operandTwo) * 10) / 10;
                break;
            case 'power':
                CALCULATOR.operandOne = CALCULATOR.operandOne ** CALCULATOR.operandTwo;
                break;
            case 'remainder':
                CALCULATOR.operandOne = CALCULATOR.operandOne % CALCULATOR.operandTwo;
                break;
        }
        EXPRESSION_DISPLAY.innerText = CALCULATOR.operandOne;
        CALCULATOR.operandTwo = null;
        CALCULATOR.isOperatorEmpty = true;
        CALCULATOR.operator = '';
        OPERATOR_DISPLAY.innerHTML = '&#61';
    },
    clearPanel: () => {
        CALCULATOR.operandOne = null;
        CALCULATOR.operandTwo = null;
        CALCULATOR.isOperatorEmpty = true;
        currentEXPRESSION.innerHTML = '';
        OPERATOR_DISPLAY.innerHTML = '';
        EXPRESSION_DISPLAY.innerText = '';
    },
}