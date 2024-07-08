import calcOperations from "./calc-operations.js";

export default (operationIdx, num1, num2) => {
    return calcOperations[operationIdx].func(num1, num2);
}