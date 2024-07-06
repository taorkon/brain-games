import greet from './modules/greet.js';
import gameInstructions from './modules/game-instructions.js';
import showInstruction from './modules/show-instruction.js';
import getRandomNumber from './modules/get-random-number.js';
import isEven from './modules/is-even.js';
import askQuestion from './modules/ask-question.js';
import getUserInput from './modules/get-user-input.js';
import checkUserAnswer from './modules/check-user-answer.js';
import showCorrectMsg from './modules/show-correct-msg.js';
import showWrongMsg from './modules/show-wrong-msg.js';
import congratulate from './modules/congratulate.js';

const MIN = 1;
const MAX = 100;
const NAME = greet();
const ITERATIONS = 3;

let counter = 1;

export default () => {
  while (counter < ITERATIONS + 1) {
    if (counter === 1) {
      showInstruction(gameInstructions['brain-even']);
    }

    const randNum = getRandomNumber(MIN, MAX);
    const correctAnswer = isEven(randNum);
    askQuestion(randNum);
    const userAnswer = getUserInput('Your answer: ');
    if (checkUserAnswer(correctAnswer, userAnswer)) {
      showCorrectMsg();
    } else {
      showWrongMsg();
      break;
    }

    if (counter === ITERATIONS) {
      congratulate(NAME);
    }

    counter += 1;
  }
};
