import getUserName from '../cli.js';
import getRandomInteger from '../getRandomInteger.js';
import getUserAnswer from '../index.js';

const isEven = (min = 1, max = 20) => {
  const userName = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const showTheQuestion = () => {
    const randomNum = getRandomInteger(min, max);

    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    const question = `Question: ${randomNum}`;

    return { correctAnswer, question };
  };

  getUserAnswer(userName, showTheQuestion);
};

export default isEven;
