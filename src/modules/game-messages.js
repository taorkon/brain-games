export default {
    welcome(){
        console.log('Welcome to the Brain Games!');
    },
    sayHello(userName){
        console.log(`Hello, ${userName}!`);
    },
    gameInstructions: {
        showEvenInstruction(){
            console.log('Answer "yes" if the number is even, otherwise answer "no".');
        },
        showCalcInstruction(){
            console.log('What is the result of the expression?');
        },
    },
    askQuestion(expression){
        console.log(`Question: ${expression}`);
    },
    showCorrectMsg(){
        console.log('Correct!');
    },
    showWrongMsg(userAnswer,correctAnswer,userName){
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
    },
    congratulate(userName){
        console.log(`Congratulations, ${userName}!`);
    },
}