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
        } else 
        {
            console.log("first operator")
            operator = e.target.value;
            firstOperator = false;
        }
    })
})


operators.forEach(op => {
    op.addEventListener("click", e => {
        operator = e.target.value;
        firstOperator = false;
        function execution(a,b,o)
        {            execution(a,b,o)
    }});
});

// basic functions
function readyNextOperation () {
    num2 ='';
    operator = '';
}
function add(a, b) {
    num1 = parseInt(a) + parseInt(b);
    displayValue = num1;
    updateDisplay();
    readyNextOperation();
    return num1;
  };
function subtract (a, b) {
    num1 = parseInt(a) - parseInt(b);
    displayValue = num1;
    updateDisplay();
    readyNextOperation();
    return num1;
  };
function multiply(a, b) {
    num1 = parseInt(a) * parseInt(b);
    displayValue = num1;
    updateDisplay();
    readyNextOperation();
    return num1;
  };
function divide(a, b) {
    num1 = parseInt(a) / parseInt(b);
    displayValue = num1;
    updateDisplay();
    readyNextOperation();
    return num1;
}



// execute function using equal sign
const equal = document.querySelector(".equal");
function execution(a, b, o) {
    a = parseInt(num1);
    b = parseInt(num2);
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
});



// Next Steps
// round answers to 2 decimals
// display error message when user tries to divide by 0
// const decimal = document.querySelector(".decimal");