const add = function(a, b) {
  return (a + b)
};

const subtract = function(a, b) {
	return (a - b)
};

const sum = function(arr) {
	let sum = 0
  arr.forEach(element => {
    sum += element
  });
  return sum
};

const multiply = function(arr) {
  let ans = 1
  arr.forEach(num => {
    ans *= num
  })
  return ans
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
	if (a === 0) {
    return 1
  }
  let sum = 1
  for (let i = 1; i <= a; i++) {
    sum *= i
  }
  return sum
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
