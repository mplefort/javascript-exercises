const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(arr) {
	if (arr === []) return 0;
  else return arr.reduce((sum, value) => sum + value, 0)

};

const multiply = function(arr) {

  return arr.reduce((multipied, value) => multipied * value, 1)
  
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(val) {
  if (val === 0) return 1;
  else return val * factorial(val - 1);
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
