export default (progrFirstEl, progrLen, progrStep, progrX) => {
    let question, correctAnswer;
    let progression = [];
    let progrElement = progrFirstEl;

    for (let i = 0; i < progrLen; i++) {
        if (i === progrX){
            progression.push('..');
            correctAnswer = progrElement;
        } else {
            progression.push(progrElement);
        }
        progrElement += progrStep;
    }

    question = progression.join(' ');
    return [question, correctAnswer];
}