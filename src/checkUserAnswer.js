// Check user answer
const checkUserAnswer = (userAnswer, correctAnswer, counter, userName) => {
  let isResultOk;

  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    isResultOk = false;
  } else {
    console.log('Correct!');
    isResultOk = true;
  }

  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }

  return isResultOk;
};

export default checkUserAnswer;
