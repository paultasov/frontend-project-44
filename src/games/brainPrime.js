import getUserName from '../cli.js';
import getRandomInteger from '../getRandomInteger.js';
import checkIsPrime from '../isPrime.js';
import getUserAnswer from '../index.js';

const isPrime = (min = 2, max = 4000) => {
  const userName = getUserName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const showTheQuestion = () => {
    const randomNum = getRandomInteger(min, max);

    const correctAnswer = checkIsPrime(randomNum) ? 'yes' : 'no';
    const question = `Question: ${randomNum}`;

    return { correctAnswer, question };
  };

  getUserAnswer(userName, showTheQuestion);
};

export default isPrime;
