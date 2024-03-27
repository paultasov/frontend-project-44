import getUserName from '../cli.js';
import getRandomInteger from '../getRandomInteger.js';
import launchTheGame from '../index.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';

const runBrainCalcGame = (min = 1, max = 100) => {
  const userName = getUserName();
  console.log(GAME_DESCRIPTION);

  const mathOperators = ['+', '-', '*'];

  const showTheQuestion = () => {
    const firstNum = getRandomInteger(min, max);
    const secondNum = getRandomInteger(min, max);
    const randomIndex = getRandomInteger(0, 2);

    let correctAnswer = '';
    let question = '';

    switch (mathOperators[randomIndex]) {
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

  launchTheGame(userName, showTheQuestion);
};

export default runBrainCalcGame;
