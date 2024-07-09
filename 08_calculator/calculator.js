const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, value) => {return sum += value;}, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, value) => {return product *= value;}, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num == 1 || num == 0)
    return 1;
	return num * factorial(num - 1);
  // return result;
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
