const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const power = (a, b) => {
  return a ** b;
};

const round = (a, b) => {
  return Math.round(a, b);
};

const roundUp = (a, b) => {
  return Math.ceil(a, b);
};

const roundDown = (a, b) => {
  return Math.floor(a, b);
};

const absolute = (a, b) => {
  return Math.abs(a, b);
};

const quotient = (a, b) => {
  return Math.trunc(a / b);
};

const remainder = (a, b) => {
  return a % b;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
};
