//intro
alert(`Welcome to my simple Calculator! 
You can add, subtract, multiply, divide and many more. 
Enjoy! 😀`);

//ask user for two numbers
let number1 = Number(prompt('Enter your first number'));
let number2 = Number(prompt('Enter your second number'));

while (isNaN(number1) || isNaN(number2)) {
  number1 = Number(prompt('Enter your first number'));
  number2 = Number(prompt('Enter your second number'));
}

//ask user for the type of operation
let operation = prompt('Choose the operation: +, -, *, /, ^, % (remainder)');

let result;
if (operation === '+') {
  result = number1 + number2;
} else if (operation === '-') {
  result = number1 - number2;
} else if (operation === '*') {
  result = number1 * number2;
} else if (operation === '/') {
  result = number1 / number2;
} else if (operation === '^') {
  result = Math.pow(number1, number2);
} else if (operation === '%') {
  result = number1 % number2;
} else {
  result = 'Invalid operation';
}

//Display the result to the user
alert(`The result of your operation is: ${result}`);
