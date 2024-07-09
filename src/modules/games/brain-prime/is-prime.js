import primeNumbers from './prime-numbers.js';

export default (num) => {
  const idxInPrimeList = primeNumbers.indexOf(num);

  if (idxInPrimeList > -1) {
    return true;
  }
  return false;
};
