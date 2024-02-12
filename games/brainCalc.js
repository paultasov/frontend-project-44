import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';
import { checkTheAnswer, getRandomInteger } from '../src/index.js';

export default (min = 1, max = 100) => {
  const userName = sayHello();
  console.log('What is the result of the expression?');

  const mathOperators = ['+', '-', '*'];

  for (let gameAttempts = 1; gameAttempts <= 3; gameAttempts += 1) {
    const firstNum = getRandomInteger(min, max);
    const secondNum = getRandomInteger(min, max);
    const randomIndex = getRandomInteger(0, 2);

    let correctAnswer = 0;

    switch (mathOperators[randomIndex]) {
      case '+':
        correctAnswer += firstNum + secondNum;
        // console.log('Correct answer ---> ', correctAnswer); // TODO delete
        console.log(`Question: ${firstNum} + ${secondNum}`);
        break;
      case '-':
        correctAnswer += firstNum - secondNum;
        // console.log('Correct answer ---> ', correctAnswer); // TODO delete
        console.log(`Question: ${firstNum} - ${secondNum}`);
        break;
      case '*':
        correctAnswer += firstNum * secondNum;
        // console.log('Correct answer ---> ', correctAnswer); // TODO delete
        console.log(`Question: ${firstNum} * ${secondNum}`);
        break;
      default:
        console.log('The math operator doesn\'t correspond to the declared one');
        break;
    }

    const userAnswer = Number(readlineSync.question('Your answer: '));

    const result = checkTheAnswer(userAnswer, correctAnswer, gameAttempts, userName);
    if (result === false || result === true) break;
  }
};
