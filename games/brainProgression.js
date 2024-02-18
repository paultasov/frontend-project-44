import sayHello from '../src/cli.js';
import getProgression from '../src/getProgression.js';
import getUserAnswer from '../src/index.js';

export default () => {
  const userName = sayHello();
  console.log('What number is missing in the progression?');

  const showTheQuestion = () => {
    const { progression, hiddenNum } = getProgression();

    const correctAnswer = hiddenNum.join('');
    const question = `Question: ${progression.join(' ')}`;

    return { correctAnswer, question };
  };

  getUserAnswer(userName, showTheQuestion);
};
