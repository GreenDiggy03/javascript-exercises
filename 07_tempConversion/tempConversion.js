function round(value, precision) {
  // var multiplier = Math.pow(10, precision || 0);
  // return Math.round(value * multiplier) / multiplier;
  return Math.round(value * 10) / 10;
}

const convertToCelsius = function(degree) {
  return round((degree - 32) * (5/9), 1);
};

const convertToFahrenheit = function(degree) {
  return round((degree * 1.8) + 32, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
