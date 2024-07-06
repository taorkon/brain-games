import getUserInput from './get-user-input.js';
import gameMessages from './game-messages.js';

export default function greet() {
  gameMessages.welcome();
  const userName = getUserInput('May I have your name? ');
  gameMessages.sayHello(userName);
  return userName;
}
