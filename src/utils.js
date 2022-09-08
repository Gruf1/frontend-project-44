const getRandomNumber = (min, max) => {
  const randomNuber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNuber;
};

const getRandomIndex = (arr) => {
  const randIndex = Math.floor(Math.random() * arr.length);
  return randIndex;
};

export { getRandomNumber, getRandomIndex };
