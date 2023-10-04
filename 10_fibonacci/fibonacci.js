const fibonacci = function(n) {
  // F3 = F1 + F2
  let a = 0, b = 1, c, i;
  if (n < 0)
    return 'OOPS';
  if (n == 0)
    return a;
  for (i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return b;
};

// Do not edit below this line
module.exports = fibonacci;
