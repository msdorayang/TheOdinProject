const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  if (a === 0 || a === 1)
  return 1;
// start the loop one less than the input value, and decrement i after each iteration
  for (var i = a - 1; i >=1; i--) {
    // store the value of a at each iteration
    a = a * i;
  }
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
