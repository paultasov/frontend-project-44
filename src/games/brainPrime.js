import getUserName from '../cli.js';
import getRandomInteger from '../getRandomInteger.js';
import createGameAttempts from '../createGameAttempts.js';

// Check if given number is prime
const checkIsPrime = (num) => {
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

const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runBrainPrimeGame = (min = 2, max = 4000) => {
  const userName = getUserName();
  console.log(GAME_DESCRIPTION);

  const showTheQuestion = () => {
    const randomNum = getRandomInteger(min, max);

    const correctAnswer = checkIsPrime(randomNum) ? 'yes' : 'no';
    const question = `Question: ${randomNum}`;

    return { correctAnswer, question };
  };

  createGameAttempts(userName, showTheQuestion);
};

export default runBrainPrimeGame;
