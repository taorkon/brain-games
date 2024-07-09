import generatePrimeQuestionNum from './generate-prime-question-num.js';
import isPrime from './is-prime.js';

export default () => {
  const question = generatePrimeQuestionNum();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
