import sayHello from '../src/cli.js';
import getRandomInteger from '../src/getRandomInteger.js';
import findGcd from '../src/findGcd.js';
import getUserAnswer from '../src/index.js';

export default (min = 1, max = 200) => {
  const userName = sayHello();
  console.log('Find the greatest common divisor of given numbers.');

  const showTheQuestion = () => {
    const firstNum = getRandomInteger(min, max);
    const secondNum = getRandomInteger(min, max);

    const correctAnswer = findGcd(firstNum, secondNum);
    const question = `Question: ${firstNum} ${secondNum}`;

    return { correctAnswer, question };
  };

  getUserAnswer(userName, showTheQuestion);
};
