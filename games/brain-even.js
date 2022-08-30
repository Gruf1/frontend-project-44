#!/usr/bin/env node
import getRandomNumber from '../src/getRandomNumber.js';
import isEven from '../src/isEven.js';
import core from '../src/index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getAnswerQuestion = () => {
  const randomNumber = getRandomNumber();
  const question = randomNumber;
  const correctAnswer = isEven(randomNumber);
  return [question, correctAnswer];
};
core(task, getAnswerQuestion);
