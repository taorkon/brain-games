import readlineSync from 'readline-sync';

export default (prompt) => {
    const userInput = readlineSync.question(prompt);
    return userInput;
}