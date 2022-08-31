#!/usr/bin/env node
import getRandomNumber from '../src/getRandomNumber.js';
import core from '../src/index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getAnswerQuestion = () => {
  const randomNumber = getRandomNumber(100);
  const question = randomNumber;
  let boolean = true;
  for (let i = 2; i <= randomNumber / 2; i += 1) {
    if (randomNumber % i === 0) {
      boolean = false;
    }
  }
  const correctAnswer = boolean === true ? 'yes' : 'no';
  return [question, correctAnswer];
};
core(task, getAnswerQuestion);
