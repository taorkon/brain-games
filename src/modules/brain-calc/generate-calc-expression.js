import getRandomNumber from '../brain-even/get-random-number.js';

export default () => {

  let operationIdx = getRandomNumber(0, 3);
  let num1 = getRandomNumber(1, 100);
  let num2 = getRandomNumber(1, 100);

  //make sure num1 bigger in subtraction
  if (operationIdx === 1 && num2 > num1) {
    [num1, num2] = [num2, num1];
  }

  return [operationIdx, num1, num2];
};
