#!/usr/bin/env node
import getRandomNumber from '../utils.js';
import run from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const getRandomOperator = (arr) => {
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
};

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return (firstNumber + secondNumber).toString();
    case '-':
      return (firstNumber - secondNumber).toString();
    case '*':
      return (firstNumber * secondNumber).toString();
    default:
      return 'there is no such operator';
  }
};

const generateRound = () => {
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const randomOperator = getRandomOperator(operators);
  const question = (`${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`);
  const correctAnswer = calculate(firstRandomNumber, secondRandomNumber, randomOperator);
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
