const reverseString = function(string) {
  let input  = string.split("");
  console.log(input.toString());
  let output = [];

  for (let i = input.length - 1; i >= 0; i--) {
    output.push(input[i]);
  }

  return output.join("");
};

// Do not edit below this line
module.exports = reverseString;
