// Find the greatest common divisor
export default (firstNum, secondNum) => {
  const firstNumber = Math.abs(firstNum);
  const secondNumber = Math.abs(secondNum);

  let result = firstNumber;
  while (firstNumber % result !== 0 || secondNumber % result !== 0) {
    result -= 1;
  }

  return result.toString();
};
