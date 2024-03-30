import getUserName from '../cli.js';
import getRandomInteger from '../getRandomInteger.js';
import createGameAttempts from '../createGameAttempts.js';

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const runBrainEvenGame = (min = 1, max = 20) => {
  const userName = getUserName();
  console.log(GAME_DESCRIPTION);

  const showTheQuestion = () => {
    const randomNum = getRandomInteger(min, max);

    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    const question = `Question: ${randomNum}`;

    return { correctAnswer, question };
  };

  createGameAttempts(userName, showTheQuestion);
};

export default runBrainEvenGame;
