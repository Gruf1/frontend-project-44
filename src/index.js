import readlineSync from 'readline-sync';

const getAnswer = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

export default (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const playerName = getAnswer('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);
  for (let i = 1; i <= 3; i += 1) {
    const bothQuestionAnswer = generateRound();
    console.log(`Question: ${bothQuestionAnswer[0]}`);
    const playerAnswer = getAnswer('Your answer: ');
    if (playerAnswer === bothQuestionAnswer[1]) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${bothQuestionAnswer[1]}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
