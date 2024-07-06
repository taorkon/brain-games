export default (correctAnswer, userAnswer) => {
    if (correctAnswer.toString() === userAnswer.toString()) {
      return true;
    }
    return false;
  }