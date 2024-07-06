import greet from './modules/greet.js';
import getRandomNumber from './modules/get-random-number.js';
//import isEven from './modules/is-even.js';
import getUserInput from './modules/get-user-input.js';
import checkUserAnswer from './modules/check-user-answer.js';

import gameMessages from './modules/game-messages.js';

const MIN = 1;
const MAX = 100;
const ITERATIONS = 3;

function getCalcExpression() {
  return [
    getRandomNumber(0, 3),
    getRandomNumber(1, 100),
    getRandomNumber(1, 100),
  ]
}

let calcOperations = [
  {
    str: ' + ',
    func: (num1, num2) => num1 + num2
  },
  {
    str: ' - ',
    func: (num1, num2) => num1 - num2
  },
  {
    str: ' * ',
    func: (num1, num2) => num1 * num2
  },
]

let correctAnswerTMP = calcOperations[0].func(4, 5);// need as func? prolly not, will change arch when generalize logic

function getStringExpression(operation, num1, num2) {
  return num1.toString() + operation + num2.toString();
}

let counter = 1;
let userName = greet();
let operationIdx, num1, num2;


while (counter < ITERATIONS + 1) {
  if (counter === 1) {
    gameMessages.gameInstructions.showCalcInstruction();//?? better change to arg 
  }

  [operationIdx, num1, num2] = getCalcExpression();
  let correctAnswerTMP = calcOperations[operationIdx].func(num1, num2);//put intoa func to use spread as well as for str expr
  let strExpression = getStringExpression(calcOperations[operationIdx].str, num1, num2);

  //const randNum = getRandomNumber(MIN, MAX);
  //const correctAnswer = isEven(randNum);
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

