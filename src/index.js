import greet from './modules/greet.js';
import getRandomNumber from './modules/get-random-number.js';
import isEven from './modules/is-even.js';
import getUserInput from './modules/get-user-input.js';
import checkUserAnswer from './modules/check-user-answer.js';

import gameMessages from './modules/game-messages.js';

const MIN = 1;
const MAX = 100;
const ITERATIONS = 3;

let counter = 1;
let userName = greet();

export default () => {
  while (counter < ITERATIONS + 1) {
    if (counter === 1) {
      gameMessages.gameInstructions.showEvenInstruction();//?? better change to arg 
    }

    const randNum = getRandomNumber(MIN, MAX);
    const correctAnswer = isEven(randNum);
    gameMessages.askQuestion(randNum);
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
};
