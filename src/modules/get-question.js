import getEvenQuestion from './games/brain-even/get-even-question.js';
import getCalcQuestion from './games/brain-calc/get-calc-question.js';
import getGCDQuestion from './games/brain-gcd/get-gcd-question.js';
import getProgressionQuestion from './games/brain-progression/get-progression-question.js';

export default (game) => {
  let question; let
    correctAnswer;

  switch (game) {
    case 'brain-even':
      [question, correctAnswer] = getEvenQuestion();
      break;
    case 'brain-calc':
      [question, correctAnswer] = getCalcQuestion();
      break;
    case 'brain-gcd':
      [question, correctAnswer] = getGCDQuestion();
      break;
    case 'brain-progression':
      [question, correctAnswer] = getProgressionQuestion();
      break;
    default:
      break;
  }

  return [question, correctAnswer];
};
