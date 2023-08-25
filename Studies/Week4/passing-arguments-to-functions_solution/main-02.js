/*
Instructions
- Create a calculator function
- By using a switch statement, ask for each case to find out what's the operator being passed to the function, then set the result of that operation by using value1 and value2

function c(value1,operator,value2){

}
*/
//your code

function calculator(value1, operator, value2) {
  switch (operator) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    case "/":
      return value1 / value2;
      break;
    default:
      console.log(`Sorry, operator not supported`);
  }
}

//uncomment next lines one by one, then check the console for results
console.log(calculator(1, "+", 1));
console.log(calculator(3, "-", 2));
console.log(calculator(3, "*", 2));
console.log(calculator(30, "/", 2));
console.log(calculator(5, "/", 0));

//don't change this line.

  module.exports = calculator;
