import readlineSync from 'readline-sync';
import checkUserAnswer from './checkUserAnswer.js';
import { GAME_ATTEMPTS } from './constVariables.js';

// Create game attempts and show the questions
const createGameAttempts = (userName, showTheQuestion) => {
  let counter;

  for (counter = 1; counter <= GAME_ATTEMPTS; counter += 1) {
    const { correctAnswer, question } = showTheQuestion();

    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');

    const result = checkUserAnswer(userAnswer, correctAnswer, counter, userName);
    if (!result) return;
  }
};

export default createGameAttempts;
