import getUserName from '../cli.js';
import getRandomInteger from '../getRandomInteger.js';
import getProgression from '../getProgression.js';
import getUserAnswer from '../index.js';

const findHiddenNumInProgression = () => {
  const userName = getUserName();
  console.log('What number is missing in the progression?');

  const showTheQuestion = () => {
    const firstTermProg = getRandomInteger(10, 40);
    const maxProgLength = getRandomInteger(60, 80);
    const progStep = getRandomInteger(2, 4);

    const { progression, hiddenNum } = getProgression(firstTermProg, maxProgLength, progStep);

    const correctAnswer = hiddenNum.join('');
    const question = `Question: ${progression.join(' ')}`;

    return { correctAnswer, question };
  };

  getUserAnswer(userName, showTheQuestion);
};

export default findHiddenNumInProgression;
