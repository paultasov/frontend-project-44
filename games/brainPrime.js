import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';
import { checkTheAnswer, getRandomInteger, isPrimeNumber } from '../src/index.js';

export default (min = 2, max = 4000) => {
  const userName = sayHello();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let gameAttempts = 1; gameAttempts <= 3; gameAttempts += 1) {
    const randomNum = getRandomInteger(min, max);

    const correctAnswer = isPrimeNumber(randomNum) ? 'yes' : 'no';
    console.log('Correct answer ---> ', correctAnswer); // TODO delete

    console.log(`Question: ${randomNum}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const result = checkTheAnswer(userAnswer, correctAnswer, gameAttempts, userName);
    if (result === false || result === true) break;
  }
};
