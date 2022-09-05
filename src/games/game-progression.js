#!/usr/bin/env node
import getRandomNumber from '../utils.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = () => {
  const progressionArr = [];
  const progressionBegin = getRandomNumber();
  const stepOfProgression = getRandomNumber(10);
  for (let i = progressionBegin; progressionArr.length < 10; i += stepOfProgression) {
    progressionArr.push(i);
  }
  return progressionArr;
};

const generateRound = () => {
  const progressionArr = getProgression();
  const randomIndex = Math.floor(Math.random() * progressionArr.length);
  const correctAnswer = progressionArr[randomIndex].toString();
  progressionArr[randomIndex] = '..';
  const question = progressionArr.join(' ');
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};
