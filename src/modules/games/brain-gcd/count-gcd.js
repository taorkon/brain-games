function countGCD(num1, num2) {
  if (!num2) {
    return num1;
  }
  return countGCD(num2, num1 % num2);
}
export default (num1, num2) => countGCD(num1, num2);
