export default (progrFirstEl, progrLen, progrStep, progrX) => {
  let correctAnswer;
  const progression = [];
  let progrElement = progrFirstEl;

  for (let i = 0; i < progrLen; i += 1) {
    if (i === progrX) {
      progression.push('..');
      correctAnswer = progrElement;
    } else {
      progression.push(progrElement);
    }
    progrElement += progrStep;
  }

  const question = progression.join(' ');
  return [question, correctAnswer];
};
