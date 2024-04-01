function add(a, b) {
    return a + b;
  };
  
function subtract (a, b) {
    return a - b;
  };

function multiply(a, b) {
    return a * b;
  };

function divide(a, b) {
    return a / b;
}

// create variables for each part of an operation
// first number
var num1;
// second number
var num2;
// operator
var operator = [add, subtract, multiply, divide];

// operate function
function operate(num1, operator, num2) {
    return operator(num1, num2);
}

// display storage
var displayValue;
function display(array) {
    
}