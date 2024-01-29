import readlineSync from 'readline-sync';
import getRandomInteger from './getRandomInteger.js';
import sayHello from './cli.js';

export default (min = 1, max = 20, gameAttempts = 3) => {
  const userName = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= gameAttempts; i += 1) {
    const randomNum = getRandomInteger(min, max);
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${randomNum}`);
    // console.log('Correct answer ---> ', correctAnswer); // TODO delete

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer && i === gameAttempts) {
      console.log('Correct!');
      console.log(`Congratulations, ${userName}!`);
    } else if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
};
