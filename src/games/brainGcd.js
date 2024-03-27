import getUserName from '../cli.js';
import getRandomInteger from '../getRandomInteger.js';
import launchTheGame from '../index.js';

// Find the greatest common divisor
const calculateGcd = (firstNum, secondNum) => {
  const firstNumber = Math.abs(firstNum);
  const secondNumber = Math.abs(secondNum);

  let result = firstNumber;
  while (firstNumber % result !== 0 || secondNumber % result !== 0) {
    result -= 1;
  }

  return result.toString();
};

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const runBrainGcdGame = (min = 1, max = 200) => {
  const userName = getUserName();
  console.log(GAME_DESCRIPTION);

  const showTheQuestion = () => {
    const firstNum = getRandomInteger(min, max);
    const secondNum = getRandomInteger(min, max);

    const correctAnswer = calculateGcd(firstNum, secondNum);
    const question = `Question: ${firstNum} ${secondNum}`;

    return { correctAnswer, question };
  };

  launchTheGame(userName, showTheQuestion);
};

export default runBrainGcdGame;
