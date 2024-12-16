
const PANEL = document.querySelector('#panel');
const OPERATOR = document.querySelector('#operator');
const NUMBER = document.querySelector('number');

const ADDSYM = '&#43;';
const SUBSYM = '&#8722;';
const POWSYM = '&#94;';
const DIVSYM = '&#247;';
const MULSYM = '&#215;';

function setOperator(operator) {
    OPERATOR.innerHTML = operator;
}

const CALCULATOR = {
    clearPanel: () => {
        OPERATOR.innerHTML = '';
        Number.innerText = '';
    },
    addition: () => {
        setOperator(ADDSYM);
    },
    substraction: () => {
        setOperator(SUBSYM);
    },
    power: () => {
        setOperator(POWSYM);
    },
    division: () => {
        setOperator(DIVSYM);
    },
    multiply: () => {
        setOperator(MULSYM);
    }
}
