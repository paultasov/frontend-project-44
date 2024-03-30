import getUserName from '../cli.js';
import getRandomInteger from '../getRandomInteger.js';
import createGameAttempts from '../createGameAttempts.js';
import { DOTS } from '../constVariables.js';

// Generate arithmetic progression
const getProgression = (firstTermProg, maxProgLength, progStep) => {
  const progressionArr = [];

  let counter = firstTermProg;

  for (; counter <= maxProgLength; counter += progStep) {
    progressionArr.push(counter);
  }

  return progressionArr;
};

const GAME_DESCRIPTION = 'What number is missing in the progression?';

const runBrainProgressionGame = () => {
  const userName = getUserName();
  console.log(GAME_DESCRIPTION);

  const showTheQuestion = () => {
    const firstTermProg = getRandomInteger(10, 40);
    const maxProgLength = getRandomInteger(60, 80);
    const progStep = getRandomInteger(2, 4);

    const progression = getProgression(firstTermProg, maxProgLength, progStep);
    const hiddenIndexNum = getRandomInteger(0, progression.length - 1);

    const [hiddenNum] = progression.splice(hiddenIndexNum, 1, DOTS);

    const correctAnswer = hiddenNum.toString();
    const question = `Question: ${progression.join(' ')}`;

    return { correctAnswer, question };
  };

  createGameAttempts(userName, showTheQuestion);
};

export default runBrainProgressionGame;
