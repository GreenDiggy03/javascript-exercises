const sumAll = function(start, stop) {

  // Check start is smaller than stop
  if (start > stop) {
    let temp = start;
    start = stop;
    stop = temp;
  }
  
  // Check for negatives and non-integers
  if (start < 0 || stop < 0)
    return "ERROR";
  if (typeof start !== 'number' || typeof stop !== 'number') {
    return "ERROR";
  }

  // Begin addition loop
  let sum = 0;

  for (let i = start; i < stop + 1; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
