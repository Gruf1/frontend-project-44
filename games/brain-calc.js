#!/usr/bin/env node
import getRandomNumber from '../src/getRandomNumber.js';
import getRandomOperator from '../src/getRandomOperator.js';
import core from '../src/index.js';

const task = 'What is the result of the expression?';

const getAnswerQuestion = () => {
  const operators = ['+', '-', '*'];
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const randomOperator = getRandomOperator(operators);
  const question = (`${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`);
  let correctAnswer;
  switch (randomOperator) {
    case '+':
      correctAnswer = (firstRandomNumber + secondRandomNumber).toString();
      break;
    case '-':
      correctAnswer = (firstRandomNumber - secondRandomNumber).toString();
      break;
    case '*':
      correctAnswer = (firstRandomNumber * secondRandomNumber).toString();
      break;
    default:
  }
  return [question, correctAnswer];
};
core(task, getAnswerQuestion);
