const sayHello = a => {
  return 'Hello, ' + a + '!';
};

const uppercase = c => {
  return c.toUpperCase();
};

const lowercase = c => {
  return c.toLowerCase();
};

const countCharacters = d => {
  return d.length;
};

const firstCharacter = e => {
  return e.charAt(0);
};

const firstCharacters = (a, b) => {
  return a.substring(0, b);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
