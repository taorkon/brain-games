import getUserInput from './get-user-input.js';

export default function greet() {
  console.log('Welcome to the Brain Games!');
  const name = getUserInput('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}
