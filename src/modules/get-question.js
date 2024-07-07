import getRandomNumber from "./get-random-number";
import isEven from "./is-even";

import generateCalcExpression from "./generate-calc-expression";
import countCalcExpression from "./count-calc-expression";
import getStringExpression from "./get-string-expression";

export default (game) => {
    let question, correctAnswer;

    switch(game){
        case 'brain-even':
            question = getRandomNumber(1, 100);
            correctAnswer = isEven(question);
            break;
        case 'brain-calc':
            let generatedExpression = generateCalcExpression();
            question = getStringExpression(...generatedExpression);
            correctAnswer = countCalcExpression(...generatedExpression)
            break;
    }

    return [question, correctAnswer];
}