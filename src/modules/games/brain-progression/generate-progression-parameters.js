import getRandomNumber from '../brain-even/get-random-number.js';

export default () => {
  const progrFirstEl = getRandomNumber(1, 100);
  const progrLen = getRandomNumber(5, 11);
  const progrStep = getRandomNumber(2, 10);
  const progrX = getRandomNumber(0, progrLen - 1);

  return [progrFirstEl, progrLen, progrStep, progrX];
};
