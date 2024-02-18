import sayHello from '../src/cli.js';
import getRandomInteger from '../src/getRandomInteger.js';
import isPrime from '../src/isPrime.js';
import getUserAnswer from '../src/index.js';

export default (min = 2, max = 4000) => {
  const userName = sayHello();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const showTheQuestion = () => {
    const randomNum = getRandomInteger(min, max);

    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
    const question = `Question: ${randomNum}`;

    return { correctAnswer, question };
  };

  getUserAnswer(userName, showTheQuestion);
};
