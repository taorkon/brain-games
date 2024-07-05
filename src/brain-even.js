import readlineSync from 'readline-sync';
import greet from './greet.js';
import congratulate from './congratulate.js';

function getRandomNumber(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function isEven(randNum) {
  if (randNum % 2 === 0) return 'yes';
  return 'no';
}

function askQuestion(randNum) {
  console.log(`Question: ${randNum}`);
}

function getUserAnswer() {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
}

function checkUserAnswer(correctAnswer, userAnswer, userName) {
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
  return false;
}

const MIN = 1;
const MAX = 100;
const NAME = greet();
const ITERATIONS = 3;

let proceed = true;
let counter = 1;

export default () => {
  while (proceed === true && counter < ITERATIONS + 1) {
    if (counter === 1) {
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
    }

    const randNum = getRandomNumber(MIN, MAX);
    const correctAnswer = isEven(randNum);
    askQuestion(randNum);
    const userAnswer = getUserAnswer();
    proceed = checkUserAnswer(correctAnswer, userAnswer, NAME);

    if (counter === ITERATIONS) {
        congratulate(NAME);
    }

    counter += 1;
  }
};
