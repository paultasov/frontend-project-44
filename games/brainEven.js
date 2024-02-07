import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';
import { checkTheAnswer, getRandomInteger } from '../src/index.js';

export default (min = 1, max = 20) => {
  const userName = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let gameAttempts = 1; gameAttempts <= 3; gameAttempts += 1) {
    const randomNum = getRandomInteger(min, max);
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${randomNum}`);
    // console.log('Correct answer ---> ', correctAnswer); // TODO delete

    const userAnswer = readlineSync.question('Your answer: ');

    const result = checkTheAnswer(userAnswer, correctAnswer, gameAttempts, userName);
    if (result === false || result === true) break;
  }
};
