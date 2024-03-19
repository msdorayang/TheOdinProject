const convertToCelsius = function(temp) {
  let converted = (temp -32) * (5/9);
  let rounded = Math.round(converted * 10) / 10
  return rounded;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
