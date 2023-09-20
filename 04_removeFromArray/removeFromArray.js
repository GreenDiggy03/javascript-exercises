const removeFromArray = function(inputArray, ...removals) {

  let outputArray = [...inputArray];

  for (let i = 0; i < removals.length; i++) {
    for (let k = 0; k < outputArray.length; k++) {

      if (outputArray[k] === removals[i]) {
        outputArray.splice(k, 1);
      }
    }
  }

  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
