import readlineSync from 'readline-sync';

// Check user answers
const checkTheAnswer = (userAnswer, correctAnswer, gameAttempts, userName) => {
  let isResultOk;

  if (userAnswer === correctAnswer && gameAttempts === 3) {
    console.log('Correct!');
    console.log(`Congratulations, ${userName}!`);
    isResultOk = true;
  } else if (userAnswer === correctAnswer) {
    console.log('Correct!');
    isResultOk = true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    isResultOk = false;
  }

  return isResultOk;
};

// Show the questions
export default (userName, showTheQuestion) => {
  for (let gameAttempts = 1; gameAttempts <= 3; gameAttempts += 1) {
    const obj = showTheQuestion();
    const { correctAnswer, question } = obj;

    console.log(question);
    // console.log('Correct answer ---> ', correctAnswer); // TODO delete

    const userAnswer = readlineSync.question('Your answer: ');

    const result = checkTheAnswer(userAnswer, correctAnswer, gameAttempts, userName);
    if (!result) return result;
  }

  return null;
};
