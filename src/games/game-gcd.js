#!/usr/bin/env node
import getRandomNumber from '../utils.js';
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  const smallestNumber = firstNumber > secondNumber ? secondNumber : firstNumber;
  for (let i = smallestNumber; i > 1; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      return i;
    }
  }
  return 1;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(10);
  const secondNumber = getRandomNumber(10);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber).toString();
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
