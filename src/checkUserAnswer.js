import { GAME_ATTEMPTS } from './constVariables.js';

// Check user answer
const checkUserAnswer = (userAnswer, correctAnswer, counter, userName) => {
  let isResultOk;

  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    isResultOk = false;
  } else {
    console.log('Correct!');
    isResultOk = true;
  }

  if (counter === GAME_ATTEMPTS) {
    console.log(`Congratulations, ${userName}!`);
  }

  return isResultOk;
};

export default checkUserAnswer;
