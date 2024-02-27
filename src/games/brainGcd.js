import getUserName from '../cli.js';
import getRandomInteger from '../getRandomInteger.js';
import calculateGcd from '../calculateGcd.js';
import getUserAnswer from '../index.js';

const findGcd = (min = 1, max = 200) => {
  const userName = getUserName();
  console.log('Find the greatest common divisor of given numbers.');

  const showTheQuestion = () => {
    const firstNum = getRandomInteger(min, max);
    const secondNum = getRandomInteger(min, max);

    const correctAnswer = calculateGcd(firstNum, secondNum);
    const question = `Question: ${firstNum} ${secondNum}`;

    return { correctAnswer, question };
  };

  getUserAnswer(userName, showTheQuestion);
};

export default findGcd;
