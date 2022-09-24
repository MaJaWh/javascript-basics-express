const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) => {
  return !(a === b);
};

const truthiness = a => {
  return Boolean(a);
};

const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = a => {
  return a % 2 === 1;
};

const isEven = a => {
  return a % 2 === 0;
};

const isSquare = a => {
  return Math.sqrt(a) % 1 === 0;
};

const startsWith = (s, f) => {
  return f.charAt(0) === s;
};

const vowels = ['a', 'e', 'i', 'o', 'u'];
const containsVowels = v => {
  let count = 0;
  for (let letter of v.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count === 1;
};

const isLowerCase = c => {
  return c == c.toLowerCase() && c != c.toUpperCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
