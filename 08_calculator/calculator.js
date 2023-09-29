const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(...args) {
	let sum = 0;
  var numberArray = args.flat().map(Number);
  
  for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }

  return sum;
};

const multiply = function(...args) {
  let numberArray = args.flat().map(Number);
  let product = numberArray[0];


  for (let i = 1; i < numberArray.length; i++) {
    product *= numberArray[i];
  }
  
  return product;
};

const power = function(number, power) {
  return number ** power;
};

const factorial = function(num) {
  if (num === 1 || num === 0)
    return 1;

  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }

  return num;
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
