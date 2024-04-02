// initialize variables
let num1 = '';
let num2 = '';
let operator = '';
let firstOperator=true;

// set up display window
let displayValue = 0;
const display = document.querySelector(".display");
function updateDisplay() {
    // round display value to the 3rd decimal place
    display.innerHTML = Math.round(displayValue * 1000) / 1000;
}
updateDisplay();
// clear button function
const clear = document.querySelector(".clear");
function clearAll() {
    num1 = '';
    num2 = '';
    operator = '';
    displayValue = 0;
    firstOperator = true;
    canDecimalNum1 = true;
    canDecimalNum2 = true;
    updateDisplay();
}
clear.addEventListener("click", clearAll);

// digit buttons and operators
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");

// call each digit button
digits.forEach(digit => {
    digit.addEventListener("click", e => {
        if (operator === '') {
            clearAll();
            num1 += e.target.innerText;
            displayValue = num1;
            updateDisplay();
        } else {
            num2 += e.target.innerText;
            displayValue = num2;
            updateDisplay();
        }
    });
});

// call each operator button
operators.forEach(op => {
    op.addEventListener ("click", e => {
        if (firstOperator != true) {
            console.log("not first operator")
            execution(num1,num2,operator);
            operator = e.target.value;
            canDecimalNum1 = true;
            canDecimalNum2 = true;
        } else 
        {
            console.log("first operator")
            operator = e.target.value;
            firstOperator = false;
        }
    })
})

// basic functions
function readyNextOperation () {
    num2 ='';
    operator = '';
}
function add(a, b) {
    num1 = parseFloat(a) + parseFloat(b);
    displayValue = num1;
    updateDisplay();
    readyNextOperation();
    return num1;
  };
function subtract (a, b) {
    num1 = parseFloat(a) - parseFloat(b);
    displayValue = num1;
    updateDisplay();
    readyNextOperation();
    return num1;
  };
function multiply(a, b) {
    num1 = parseFloat(a) * parseFloat(b);
    displayValue = num1;
    updateDisplay();
    readyNextOperation();
    return num1;
  };
function divide(a, b) {
    num1 = parseFloat(a) / parseFloat(b);
    displayValue = num1;
    updateDisplay();
    readyNextOperation();
    return num1;
}



// execute function using equal sign
const equal = document.querySelector(".equal");
function execution(a, b, o) {
    a = parseFloat(num1);
    b = parseFloat(num2);
    o = operator;
    console.log(a + " " + o + " " + b);
    if (o === "divide" && b === 0) {
        num1 = '';
        num2 = '';
        operator = '';
        display.innerHTML = "ERR0R";
    } else {
    if (o === "add") {
        return add(a, b);
    }
    else if (o === "subtract") {
        return subtract(a, b);
    }
    else if (o === "multiply") {
        return multiply(a, b);
    }
    else if (o === "divide") {
        return divide (a, b);
    }
    else {
        display.innerHTML = "ERROR";
    }}
}
equal.addEventListener("click", (a,b,o) => {
    execution(a,b,o);
    canDecimalNum1 = true;
    canDecimalNum2 = true;
});

// add decimal button
const decimal = document.querySelector(".decimal");
let canDecimalNum1 = true;
let canDecimalNum2 = true;
decimal.addEventListener("click", e => {
    if (canDecimalNum1 === true && canDecimalNum2 === true) {
    if (operator === '') {
        num1 += e.target.innerText;
        displayValue = num1;
        updateDisplay();
        canDecimalNum1 = false;
    } else {
        num2 += e.target.innerText;
        displayValue = num2;
        updateDisplay();
        canDecimalNum2 = false;
    }
} else if (canDecimalNum1 === false && canDecimalNum2 === true){
    if (operator === '') {
        updateDisplay();
        console.log("can't have more than 1 decimal in a number (num1)")
    } else {
        num2 += e.target.innerText;
        displayValue = num2;
        updateDisplay();
        canDecimalNum2 = false;
    }
} else if (canDecimalNum1 === true && canDecimalNum2 === false) {
    if (operator === '') {
        num1 += e.target.innerText;
        displayValue = num1;
        updateDisplay();
        canDecimalNum1 = false;
    } else {
        updateDisplay();
        console.log("can't have more than 1 decimal in a number (num2)")
    }
} else {
    if (operator === '') {
        updateDisplay();
        console.log("can't have more than 1 decimal in a number (num1)")
    } else {
        updateDisplay();
        console.log("can't have more than 1 decimal in a number (num2)")
    }}}
    )