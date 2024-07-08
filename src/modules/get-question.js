import getEvenQuestion from "./brain-even/get-even-question.js";
import getCalcQuestion from "./brain-calc/get-calc-question.js";

export default (game) => {
    let question, correctAnswer;

    switch (game) {
        case 'brain-even':
            [question, correctAnswer] = getEvenQuestion();
            break;
        case 'brain-calc':
            [question, correctAnswer] = getCalcQuestion();
            break;
    }

    return [question, correctAnswer];
}