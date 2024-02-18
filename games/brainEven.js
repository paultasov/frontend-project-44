import sayHello from '../src/cli.js';
import getRandomInteger from '../src/getRandomInteger.js';
import getUserAnswer from '../src/index.js';

export default (min = 1, max = 20) => {
  const userName = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const showTheQuestion = () => {
    const randomNum = getRandomInteger(min, max);

    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    const question = `Question: ${randomNum}`;

    return { correctAnswer, question };
  };

  getUserAnswer(userName, showTheQuestion);
};
