const log = console.log;
log('');
log('Functions: three ways to write them: exercise');
log('================================================');
log('');
//take two numbers
//each number will be squared (multiplied with itself)
//the squared numbers will be added together
//this sum will be squared again
//the resulting value is returned

let numberOne = 5;
let numberTwo = 5;
let SquareMakerTool = num => num * num;// tool to check the outcomes of the numbers to be squart.
log('');





log('==================function declaration==============================');
function squareMaker(num1, num2) {
    let squaredNumber = Math.pow(num1, 2) + Math.pow(num2, 2);
    let result = Math.pow(squaredNumber, 2);
    return result;
}
let resultsquaredNumbers = squareMaker(numberOne, numberTwo);
log(`The outcome from the function Declaration = : ${resultsquaredNumbers}`);
log('');








log('==================function expression==============================');
const squareMaker2 = function add(num1, num2) {
    let squaredNumber = Math.pow(num1, 2) + Math.pow(num2, 2);
    let result = Math.pow(squaredNumber, 2);
    return result;
};
let resultsquaredNumbers2 = squareMaker2(numberOne, numberTwo);
log(`The outcome from the function Expression = : ${resultsquaredNumbers2}`);
log('');









log('==================arrow function==============================');
const squareMaker3 = (num1, num2) => {
    let squaredNumber = Math.pow(num1, 2) + Math.pow(num2, 2);
    let result = Math.pow(squaredNumber, 2);
    return result;
};
let resultsquaredNumbers3 = squareMaker3(numberOne, numberTwo);
log(`The outcome from the Arrow function = : ${resultsquaredNumbers3}`);
log('');