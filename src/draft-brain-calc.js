import greet from './modules/greet.js';

import generateCalcExpression from './modules/generate-calc-expression.js';
import getStringExpression from './modules/get-string-expression.js';
import countCalcExpression from './modules/count-calc-expression.js'

import getUserInput from './modules/get-user-input.js';
import checkUserAnswer from './modules/check-user-answer.js';

import gameMessages from './modules/game-messages.js';


const ITERATIONS = 3;


let counter = 1;
let userName = greet();


while (counter < ITERATIONS + 1) {
  if (counter === 1) {
    gameMessages.gameInstructions.showCalcInstruction();
  }

  let generatedExpression = generateCalcExpression();
  let correctAnswerTMP = countCalcExpression(...generatedExpression)
  let strExpression = getStringExpression(...generatedExpression);

  gameMessages.askQuestion(strExpression);
  const userAnswer = getUserInput('Your answer: ');
  if (checkUserAnswer(correctAnswerTMP, userAnswer)) {
    gameMessages.showCorrectMsg();
  } else {
    gameMessages.showWrongMsg(userAnswer, correctAnswerTMP, userName);
    break;
  }

  if (counter === ITERATIONS) {
    gameMessages.congratulate(userName);
  }

  counter += 1;
}

