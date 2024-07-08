import getRandomNumber from '../brain-even/get-random-number.js';

export default () => {
  let num1 = getRandomNumber(1, 100);
  let num2 = getRandomNumber(1, 100);

  if (num2 > num1) {
    [num1, num2] = [num2, num1];
  }

  return [num1, num2];
};
