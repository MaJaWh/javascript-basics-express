const createPerson = (name, age) => {
  return { age: age, name: name };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};
const hasProperty = (property, object) => {
  if (object[property]) {
    return true;
  }
  return false;
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(e => e.age);
};

const findByName = (name, people) => {
  return people.find(e => e.name === name);
};

const findHondas = cars => {
  return cars.filter(e => e.manufacturer === 'Honda');
};

const averageAge = people => {
  const peop = people.reduce((acc, currentValue) => {
    return acc + currentValue.age;
  }, 0);

  return peop / people.length;
};

const createTalkingPerson = (name, age) => {
  const person = {
    name,
    age,
    introduce: personName => {
      return `Hi ${personName}, my name is ${person.name} and I am ${person.age}!`;
    }
  };
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
