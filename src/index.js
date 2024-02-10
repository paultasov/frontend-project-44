// Get random integer
export const getRandomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

// Check user answer
export const checkTheAnswer = (...rest) => {
  const [userAnswer, correctAnswer, gameAttempts, userName] = rest;

  if (userAnswer === correctAnswer && gameAttempts === 3) {
    console.log('Correct!');
    console.log(`Congratulations, ${userName}!`);
    return true;
  } else if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
};

// Find the greatest common divisor
export const findGcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);

  if (b > a) {
    const temp = a;
    a = b;
    b = temp;
  }

  while (true) {
    if (b == 0) return a;
    a %= b;
    if (a == 0) return b;
    b %= a;
  }
};

// Generate arithmetic progression
export const getProgression = () => {
  const dots = '..';

  const result = [];
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

  result.push(progressionArr, hiddenNum);

  return result;
};
