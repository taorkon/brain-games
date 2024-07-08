import generateCalcExpression from './generate-calc-expression.js';
import countCalcExpression from './count-calc-expression.js';
import getStringExpression from './get-string-expression.js';

export default () => {
  const generatedExpression = generateCalcExpression();
  const question = getStringExpression(...generatedExpression);
  const correctAnswer = countCalcExpression(...generatedExpression);

  return [question, correctAnswer];
};
