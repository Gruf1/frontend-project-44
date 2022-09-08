#!/usr/bin/env node
import { getRandomNumber, getRandomIndex } from '../utils.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = getRandomNumber(5, 10);

const getProgression = () => {
  const progressionArr = [];
  const progressionBegin = getRandomNumber(1, 100);
  const stepProgression = getRandomNumber(1, 10);
  for (let i = progressionBegin; progressionArr.length < progressionLength; i += stepProgression) {
    progressionArr.push(i);
  }
  return progressionArr;
};

const generateRound = () => {
  const progressionArr = getProgression();
  const randomIndex = getRandomIndex(progressionArr);
  const correctAnswer = progressionArr[randomIndex];
  progressionArr[randomIndex] = '..';
  const question = progressionArr.join(' ');
  return [question, correctAnswer.toString()];
};

export default () => {
  run(description, generateRound);
};
