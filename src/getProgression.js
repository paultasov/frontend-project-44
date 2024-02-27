import getRandomInteger from './getRandomInteger.js';

const DOTS = '..';

// Generate arithmetic progression
const getProgression = (firstTermProg, maxProgLength, progStep) => {
  const result = {};
  const progressionArr = [];

  let counter = firstTermProg;

  while (counter <= maxProgLength) {
    progressionArr.push(counter);
    counter += progStep;
  }

  const hiddenIndexNum = getRandomInteger(0, progressionArr.length - 1);
  const hiddenNum = progressionArr.splice(hiddenIndexNum, 1, DOTS);

  result.progression = progressionArr;
  result.hiddenNum = hiddenNum;

  return result;
};

export default getProgression;
