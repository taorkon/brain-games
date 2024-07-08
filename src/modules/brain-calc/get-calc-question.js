import generateCalcExpression from "./generate-calc-expression.js";
import countCalcExpression from "./count-calc-expression.js";
import getStringExpression from "./get-string-expression.js";

export default () => {

    let generatedExpression = generateCalcExpression();
    let question = getStringExpression(...generatedExpression);
    let correctAnswer = countCalcExpression(...generatedExpression);

    return [question, correctAnswer];

}