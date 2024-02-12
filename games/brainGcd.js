import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';
import { checkTheAnswer, getRandomInteger, findGcd } from '../src/index.js';

export default (min = 1, max = 200) => {
  const userName = sayHello();
  console.log('Find the greatest common divisor of given numbers.');

  for (let gameAttempts = 1; gameAttempts <= 3; gameAttempts += 1) {
    const firstNum = getRandomInteger(min, max);
    const secondNum = getRandomInteger(min, max);

    const correctAnswer = findGcd(firstNum, secondNum);
    // console.log('Correct answer ---> ', correctAnswer); // TODO delete

    console.log(`Question: ${firstNum} ${secondNum}`);

    const userAnswer = Number(readlineSync.question('Your answer: '));

    const result = checkTheAnswer(userAnswer, correctAnswer, gameAttempts, userName);
    if (result === false || result === true) break;
  }
};
