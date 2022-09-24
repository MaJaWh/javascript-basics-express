const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
  return undefined;
};
const addToArray2 = (element, array) => {
  const newArray = [...array];
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  const newArray = numbers.map(num => {
    return String(num);
  });
  return newArray;
};

const uppercaseWordsInArray = strings => {
  const newArray = strings.map(element => {
    return element.toUpperCase();
  });
  return newArray;
};

const reverseWordsInArray = strings => {
  const newArray = strings.map(e => {
    return e
      .split([])
      .reverse()
      .join('');
  });
  return newArray;
};

function onlyEven(numbers) {
  const newArray = numbers.filter(e => e % 2 === 0);
  return newArray;
}

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(str => /^[aeiou]/i.test(str));
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((prev, curr) => {
    return prev + curr;
  });
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => {
    return a[a.length - 1] > b[b.length - 1] ? 1 : -1;
  });
  // const lastLetterofA =
  // const lastLetterofB =
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
