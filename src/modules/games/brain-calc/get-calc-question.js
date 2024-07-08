import generateCalcExpression from './generate-calc-expression.js';
import countCalcExpression from './count-calc-expression.js';
import getCalcStringExpression from './get-calc-string-expression.js';

export default () => {
  const generatedExpression = generateCalcExpression();
  const question = getCalcStringExpression(...generatedExpression);
  const correctAnswer = countCalcExpression(...generatedExpression);

  return [question, correctAnswer];
};
