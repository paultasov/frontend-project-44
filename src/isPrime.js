// Check if given number is prime
export default (num) => {
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
