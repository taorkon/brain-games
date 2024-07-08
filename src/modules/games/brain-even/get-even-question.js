import getRandomNumber from './get-random-number.js';
import isEven from './is-even.js';

export default () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question);

  return [question, correctAnswer];
};
