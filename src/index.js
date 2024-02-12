// Get random integer
export const getRandomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

// Check user answer
export const checkTheAnswer = (userAnswer, correctAnswer, gameAttempts, userName) => {
  let boolValue;

  if (userAnswer === correctAnswer && gameAttempts === 3) {
    console.log('Correct!');
    console.log(`Congratulations, ${userName}!`);
    boolValue = true;
  } else if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    boolValue = true;
  }

  return boolValue;
};

// Find the greatest common divisor
export const findGcd = (firstNum, secondNum) => {
  let firstNumber = Math.abs(firstNum);
  let secondNumber = Math.abs(secondNum);

  let result;

  if (secondNumber > firstNumber) {
    const temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
  }

  while (firstNum !== 0 || secondNum !== 0) {
    if (secondNumber === 0) {
      result = firstNumber; break;
    }

    firstNumber %= secondNumber;

    if (firstNumber === 0) {
      result = secondNumber; break;
    }

    secondNumber %= firstNumber;
  }

  return result;
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

// Check if given number is prime
export const isPrimeNumber = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
