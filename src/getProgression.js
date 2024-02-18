import getRandomInteger from './getRandomInteger.js';

// Generate arithmetic progression
export default () => {
  const dots = '..';

  const result = {};
  const progressionArr = [];

  const firstProgressionNum = getRandomInteger(10, 40);
  const lastProgressionNum = getRandomInteger(60, 80);

  const progressionStep = getRandomInteger(2, 4);

  let counter = firstProgressionNum;

  while (counter <= lastProgressionNum) {
    progressionArr.push(counter);
    counter += progressionStep;
  }

  const hiddenIndexNum = getRandomInteger(0, progressionArr.length - 1);
  const hiddenNum = progressionArr.splice(hiddenIndexNum, 1, dots);

  result.progression = progressionArr;
  result.hiddenNum = hiddenNum;

  return result;
};
