import greet from "./modules/greet.js";
import gameMessages from "./modules/game-messages.js";
import getQuestion from "./modules/get-question.js";

import getUserInput from "./modules/get-user-input.js";
import checkUserAnswer from "./modules/check-user-answer.js";

export default (game) => {
    let userName = greet();

    if (game != 'brain-games') {
        const ITERATIONS = 3;
        let counter = 1;

        while (counter < ITERATIONS + 1) {
            if (counter === 1) {
                gameMessages.showInstruction(game);
            }

            let [question, correctAnswer] = getQuestion(game); 

            gameMessages.askQuestion(question);
            const userAnswer = getUserInput('Your answer: ');
            if (checkUserAnswer(correctAnswer, userAnswer)) {
                gameMessages.showCorrectMsg();
            } else {
                gameMessages.showWrongMsg(userAnswer, correctAnswer, userName);
                break;
            }

            if (counter === ITERATIONS) {
                gameMessages.congratulate(userName);
            }

            counter += 1;
        }
    }
}

