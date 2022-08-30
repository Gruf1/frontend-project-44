#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const gameEven = () => {
  let counterCorrAnswer = 1;
  while (counterCorrAnswer <= 3) {
    const randomNumber = Math.ceil(Math.random() * 100);
    let correctAnswer;
    console.log(`Question: ${randomNumber}`);
    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      counterCorrAnswer += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}\nLet's try again, ${userName}!`);
      break;
    }
  }
  if (counterCorrAnswer > 3) {
    console.log(`Congratulations, ${userName}`);
  }
};
gameEven();
