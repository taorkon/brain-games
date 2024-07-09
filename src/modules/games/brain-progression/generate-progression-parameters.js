import getRandomNumber from "../brain-even/get-random-number.js";

export default () => {
    let progrFirstEl = getRandomNumber(1, 100);
    let progrLen = getRandomNumber(5, 11);
    let progrStep = getRandomNumber(2, 10);
    let progrX = getRandomNumber(0, progrLen - 1);

    return [progrFirstEl, progrLen, progrStep, progrX];
}