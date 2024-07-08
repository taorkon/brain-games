import generateGCD from './generate-gcd.js';
import getGCDString from './get-gcd-string.js';
import countGCD from './count-gcd.js';

export default () => {
  const generatedGCDNums = generateGCD();
  const question = getGCDString(...generatedGCDNums);
  const correctAnswer = countGCD(...generatedGCDNums);

  return [question, correctAnswer];
};
