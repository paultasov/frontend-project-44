import sayHello from '../src/cli.js';
import getRandomInteger from '../src/getRandomInteger.js';
import getUserAnswer from '../src/index.js';

export default (min = 1, max = 100) => {
  const userName = sayHello();
  console.log('What is the result of the expression?');

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

  getUserAnswer(userName, showTheQuestion);
};
