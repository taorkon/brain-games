//main logic
import gameMessages from "./modules/game-messages";
import getQuestion from "./modules/get-question";


let userName = greet();

if (game != 'brain-games') {
    const ITERATIONS = 3;
    let counter = 1;

    while (counter < ITERATIONS + 1) {
        if (counter === 1) {
            gameMessages.showInstruction('brain-calc');
        }
    
        let [question, correctAnswer] = getQuestion('brain-calc') //WRITE QUESTION FUNCTION

        gameMessages.askQuestion(strExpression);
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


