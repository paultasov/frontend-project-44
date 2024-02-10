import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';
import { checkTheAnswer, getRandomInteger, getProgression } from '../src/index.js';

export default () => {
  const userName = sayHello();
  console.log('What number is missing in the progression?');

  for (let gameAttempts = 1; gameAttempts <= 3; gameAttempts += 1) {
    const [progression, hiddenNum] = getProgression();

    const correctAnswer = Number(hiddenNum.join(''));
    // console.log('Correct answer ---> ', correctAnswer); // TODO delete

    console.log(`Question: ${progression.join(' ')}`);

    const userAnswer = Number(readlineSync.question('Your answer: '));
    // TODO 1. Проработать кейс, когда значение преобразуется NaN
    // 2. Когда значение преобразуется в 0 (при пустой строке)

    const result = checkTheAnswer(userAnswer, correctAnswer, gameAttempts, userName);
    if (result === false || result === true) break;
  }
};
