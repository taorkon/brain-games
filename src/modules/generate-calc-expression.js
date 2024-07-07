import getRandomNumber from "./get-random-number.js";

export default () => {
    return [
      getRandomNumber(0, 3),
      getRandomNumber(1, 100),
      getRandomNumber(1, 100),
    ]
  }