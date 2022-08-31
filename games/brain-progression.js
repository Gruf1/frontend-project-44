#!/usr/bin/env node
import getRandomNumber from '../src/getRandomNumber.js';
import core from '../src/index.js';

const task = 'What number is missing in the progression?';

const getAnswerQuestion = () => {
  const progressionArr = [];
  const progressionBegin = getRandomNumber();
  const stepOfProgression = getRandomNumber(10);

  for (let i = progressionBegin; progressionArr.length < 10; i += stepOfProgression) {
    progressionArr.push(i);
  }
  const randomIndex = Math.floor(Math.random() * progressionArr.length);
  const correctAnswer = progressionArr[randomIndex].toString();
  progressionArr[randomIndex] = '..';
  const question = progressionArr.join(' ');
  return [question, correctAnswer];
};
core(task, getAnswerQuestion);
