const palindromes = function (palindrome) {
  let trimmedString = palindrome.replaceAll(/[\!\.\s\,]/ig, '').toLowerCase();

  // In the solution provided, it just returns this statement
  if (trimmedString.split('').reverse().join('') === trimmedString)
    return true;

  return false;
};

// Do not edit below this line
module.exports = palindromes;
