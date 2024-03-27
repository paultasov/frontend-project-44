import readlineSync from 'readline-sync';
import checkUserAnswer from './checkUserAnswer.js';

const GAME_ATTEMPTS = 3;

// Launch each game and show the questions
const launchTheGame = (userName, showTheQuestion) => {
  let counter;

  for (counter = 1; counter <= GAME_ATTEMPTS; counter += 1) {
    const { correctAnswer, question } = showTheQuestion();

    console.log(question);
    console.log('Correct answer ---> ', correctAnswer); // TODO delete

    const userAnswer = readlineSync.question('Your answer: ');

    const result = checkUserAnswer(userAnswer, correctAnswer, counter, userName);
    if (!result) return;
  }
};

export default launchTheGame;
