#!/usr/bin/env node
import getRandomNumber from '../src/getRandomNumber.js';
import core from '../src/index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getAnswerQuestion = () => {
  const firstNumber = getRandomNumber(10);
  const secondNumber = getRandomNumber(10);
  const question = `${firstNumber} ${secondNumber}`;
  const smallestNumber = firstNumber > secondNumber ? secondNumber : firstNumber;
  let correctAnswer;

  for (let i = 1; i <= smallestNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      correctAnswer = i;
    }
  }
  correctAnswer = correctAnswer.toString();
  return [question, correctAnswer];
};
core(task, getAnswerQuestion);
