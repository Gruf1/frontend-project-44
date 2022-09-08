#!/usr/bin/env node
import { getRandomNumber } from '../utils.js';
import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateRound = () => {
  const randomNumber = getRandomNumber(0, 100);
  const question = randomNumber;
  const correctAnswer = isEven(randomNumber);
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
