#!/usr/bin/env node
import { getRandomNumber, getRandomIndex } from '../utils.js';
import run from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return (x + y);
    case '-':
      return (x - y);
    case '*':
      return (x * y);
    default:
      throw new Error(`There is no such operator like '${operator}'!`);
  }
};

const getOperator = () => {
  const randomIndex = getRandomIndex(operators);
  return operators[randomIndex];
};

const generateRound = () => {
  const number1 = getRandomNumber(0, 50);
  const number2 = getRandomNumber(0, 50);
  const operator = getOperator();
  const question = (`${number1} ${operator} ${number2}`);
  const correctAnswer = calculate(number1, number2, operator);
  return [question, correctAnswer.toString()];
};

export default () => {
  run(description, generateRound);
};
