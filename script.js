
const DISPLAY_PANEL = document.querySelector('#panel');
const OPERATOR_DISPLAY = document.querySelector('#operator-display');
const EXPRESSION_DISPLAY = document.querySelector('#expression-display');
const currentEXPRESSION = document.querySelector('#currentExpression');

const ADDSYM = '&#43;';
const SUBSYM = '&#8722;';
const POWSYM = '&#94;';
const DIVSYM = '&#247;';
const MULSYM = '&#215;';
const REMSYM = '&#37;';
const EQUSYM = '&#61;';

const OPERATOR_BUTTON = document.querySelectorAll('.operator');
OPERATOR_BUTTON.forEach((button) => {
    button.addEventListener('click', () => {
        OPERATOR_DISPLAY.innerHTML = button.value;
    })
});

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