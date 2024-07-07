import calcOperations from "./calc-operations.js";

export default (operationIdx, num1, num2) => {
    return num1.toString() + calcOperations[operationIdx].str + num2.toString();
  }