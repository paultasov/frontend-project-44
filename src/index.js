import readlineSync from 'readline-sync';
import { printSuccess, printCorrect, printTheError } from './printTheAnswers.js';

// Check user answers
const checkTheAnswer = (userAnswer, correctAnswer, counter, userName) => {
  let isResultOk;

  if (userAnswer === correctAnswer && counter === 3) {
    printSuccess(userName);
    isResultOk = true;
  } else if (userAnswer === correctAnswer) {
    printCorrect();
    isResultOk = true;
  } else {
    printTheError(userName, userAnswer, correctAnswer);
    isResultOk = false;
  }

  return isResultOk;
};

const GAME_ATTEMPTS = 3;

// Show the questions
const getUserAnswer = (userName, showTheQuestion) => {
  let counter;

  for (counter = 1; counter <= GAME_ATTEMPTS; counter += 1) {
    const { correctAnswer, question } = showTheQuestion();

    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');

    const result = checkTheAnswer(userAnswer, correctAnswer, counter, userName);
    if (!result) return;
  }
};

export default getUserAnswer;
