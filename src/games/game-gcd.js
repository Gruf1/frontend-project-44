#!/usr/bin/env node
import { getRandomNumber } from '../utils.js';
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (x, y) => {
  const smallestNumber = x > y ? y : x;
  for (let i = smallestNumber; i > 1; i -= 1) {
    if (x % i === 0 && y % i === 0) {
      return i;
    }
  }
  return 1;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGreatestCommonDivisor(number1, number2);
  return [question, correctAnswer.toString()];
};

export default () => {
  run(description, generateRound);
};
