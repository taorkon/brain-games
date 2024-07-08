import getRandomNumber from "./get-random-number.js";
import isEven from "./is-even.js";

export default () => {
    let question = getRandomNumber(1, 100);
    let correctAnswer = isEven(question);

    return [question, correctAnswer];
};