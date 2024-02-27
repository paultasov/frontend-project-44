const printSuccess = (userName) => {
  console.log('Correct!');
  console.log(`Congratulations, ${userName}!`);
};

const printCorrect = () => {
  console.log('Correct!');
};

const printTheError = (userName, userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

export { printSuccess, printCorrect, printTheError };
