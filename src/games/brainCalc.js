import getUserName from '../cli.js';
import getRandomInteger from '../getRandomInteger.js';
import createGameAttempts from '../createGameAttempts.js';
import { MATH_OPERATORS } from '../constVariables.js';

const generateTheQuestion = (firstNum, secondNum, randomIndex) => {
  let correctAnswer = '';
  let question = '';

  switch (MATH_OPERATORS[randomIndex]) {
    case '+':
      correctAnswer += `${firstNum + secondNum}`;
      question += `Question: ${firstNum} + ${secondNum}`;
      break;
    case '-':
      correctAnswer += `${firstNum - secondNum}`;
      question += `Question: ${firstNum} - ${secondNum}`;
      break;
    case '*':
      correctAnswer += `${firstNum * secondNum}`;
      question += `Question: ${firstNum} * ${secondNum}`;
      break;
    default:
      console.log("The math operator doesn't correspond to the declared one");
      break;
  }

  return { correctAnswer, question };
};

const GAME_DESCRIPTION = 'What is the result of the expression?';

const runBrainCalcGame = (min = 1, max = 100) => {
  const userName = getUserName();
  console.log(GAME_DESCRIPTION);

  const showTheQuestion = () => {
    const firstNum = getRandomInteger(min, max);
    const secondNum = getRandomInteger(min, max);
    const randomIndex = getRandomInteger(0, MATH_OPERATORS.length - 1);

    return generateTheQuestion(firstNum, secondNum, randomIndex);
  };

  createGameAttempts(userName, showTheQuestion);
};

export default runBrainCalcGame;
