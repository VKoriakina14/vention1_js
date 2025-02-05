// Resolving Expressions
console.log('number' + 3 + 3); //
console.log(null + 3); //
console.log(5 && 'qwerty'); //
console.log(+'40' + +'11' + 'javaSсript'); //
console.log('10' - 5 === 6); //
console.log(true + false); //
console.log('4px' - 3); //
console.log('4' - 3); // 1
console.log('6' + 3 * 3); //
console.log(12 / '6'); //
console.log('5' + 1 === 6); //
console.log(null == undefined); //
console.log(3 ** (9 / 3)); //
console.log(0 || ('0' && 1)); //
console.log((+null == false) < 1); // 0 == 0 , true 1<1
console.log((false && true) || true); // false || true
console.log(false && (false || true)); // false && true
console.log((+null == false) < 1 ** 5); // true < 1

//--------------------------------------------------------------------------------------------------
// --- Conditional Statements ---

// IF

// Example 1: Basic IF statement
let cost = 0;
const subscription = 'basic';

if (subscription === 'pro') {
  cost = 100; // If the condition is true, set cost to 100
}

console.log(cost);

// Using a ternary operator for the same logic:ё
const subscription = 'pro';
const cost1 = subscription === 'pro' ? 100 : 0;
console.log(cost1);

// IF...ELSE

// Example 2: Using IF and ELSE
let cost2;
const subscription2 = 'pro';

if (subscription2 === 'pro') {
  cost2 = 100; // If subscription is "pro", set cost to 100
} else {
  cost2 = 0; // Otherwise, set cost to 0
}

console.log(cost2); //

// ELSE...IF

// Example 3: Using ELSE IF for multiple conditions
let cost3;
const subscription3 = 'premium';

if (subscription3 === 'free') {
  cost3 = 0; // Free subscription costs 0
} else if (subscription3 === 'pro') {
  cost3 = 100; // Pro subscription costs 100
} else if (subscription3 === 'premium') {
  cost3 = 500; // Premium subscription costs 500
} else {
  console.log('Invalid subscription type');
}

console.log(cost3);

// TERNARY OPERATOR

// Example 4: Simplifying IF...ELSE using a ternary operator
const age = 20;
const type = age >= 18 ? 'adult' : 'child';
console.log(type); //

// Example 5: Finding the bigger number
const num1 = 5;
const num2 = 10;
const bigNumber = num1 > num2 ? num1 : num2;
console.log(bigNumber); // Output: 10

// SWITCH

// Example 6: Using SWITCH for multiple conditions
let cost4;
const subscription4 = 'free';

switch (
  subscription4 // "premium ===
) {
  case 'free': // "premium" ===  "free"
    cost4 = 0;
    break;
  case 'pro': // "premium" === "pro"
    cost4 = 100;
    break;
  case 'premium': // "premium" === "premium" true
    cost4 = 500;
    break;
  default:
    console.log('Invalid subscription type');
}

console.log(cost4); //

// TRY...CATCH

// Example 11: Handling errors in code
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  } catch (error) {
    console.error('Error: ' + error.message);
    return null; //
  }
}

const result = divide(10, 0);
if (result === null) {
  console.log('Division failed.');
} else {
  console.log('Result: ' + result);
}

// Example 12: Catching errors in undefined functions
/* try {
    let result = someFunction(); // This function does not exist
    console.log(result);
} catch (error) {
    console.log("An error occurred: " + error.message);
} */

// TRY...CATCH...FINALLY

// Example 13: Code with a finally block
try {
  // Code that might throw an error
  let result = 10 / 2; // This is fine
  console.log(result);
} catch (error) {
  // Handle the error
  console.log('Error:', error.message);
} finally {
  // This block always runs
  console.log('This block always executes');
}

// TASKS

// Task 1: Write a program that checks if a number is even or odd.
const number = 8; // Replace with any number
let result = number % 2 === 0 ? 'even' : 'odd';
console.log(`The number is ${result}`);

if (number % 2 === 0) {
  result = 'even';
  console.log(`The number is ${result}`);
} else {
  result = 'odd';
  console.log(`The number is ${result}`);
}

// Task 2: Write a program that calculates the cost of a movie ticket based on age.
const age2 = 6; // Replace with any age

// 1. create veriables fir result
// 2. Conditional statement
// child(0-16), students (17-25), adult (25-55), seniors(55-100)

let ticketCost;
if (age2 <= 16) {
  ticketCost = 5;
} else if (age2 > 16 && age2 < 25) {
  ticketCost = 7;
} else if (age2 >= 25 && age2 < 55) {
  ticketCost = 12;
} else {
  ticketCost = 4;
}

console.log(`The Ticket cost is ${ticketCost}`);

// Task 3: Write a program that finds the largest of three numbers.
const numA = 51;
const numB = 54;
const numC = 42;

let largest;
if (numA > numB) {
  if (numA > numC) {
    largest = numA;
  } else {
    largest = numC;
  }
} else {
  if (numB > numC) {
    largest = numB;
  } else {
    largest = numC;
  }
}
console.log(largest);

// Task 4: Write a program that determines if a number is positive, negative, or zero.
const numD = -5; // Replace with any number
if (numD < 0) {
  console.log('Negative number');
} else if (numD === 0) {
  console.log('Zero');
} else {
  console.log('Positive number');
}
console.log(numD);

/*
Loops in JavaScript
A loop is a control structure in high-level programming languages, used to organize 
the repeated execution of a set of instructions.

Loop body: A sequence of instructions meant for repeated execution.

Iteration: A single execution of the loop body.

Exit condition: A condition that determines whether the loop will run again or terminate.

Counter: A variable that keeps track of the current iteration number.

A loop does not always require a counter, and its exit condition may depend on multiple variables 
that are modified during the loop.
*/

// While Loop

/*
A "while" loop is a pre-condition loop. It keeps running as long as a specified condition is true.
The condition is checked before executing the loop body, so the loop may not execute even once
if the condition is false initially.

Syntax:
while (condition) {
  // code to execute (loop body)
}
*/

/*
Example 1: Simple while loop
*/
let i = 0; //1 , 2
while (i < 5) {
  console.log('i = ' + i); // 0; 1; 2; 3;
  i++; // i= i+1 // 1 , 2 ,
}

/*
Example 2: A loop that might not start
*/
while (false) {
  console.log('This will never execute');
}
console.log('Outside the loop');

/*
Example 3: Loop with a `break`
*/
while (true) {
  console.log('This runs once');
  break; // Stops the loop
}
console.log('Outside the loop');

/*
Example 4: Using a counter to control the loop
*/
let counter = 10;
while (counter > 0) {
  console.log(counter);
  counter--;
}

/*
Practical example: Filling up hotel rooms
*/
let clients = 18;
const maxRooms = 25;
while (clients <= maxRooms) {
  console.log(`Currently filled: ${clients}`);
  clients++;
}

// Do...While Loop

/*
A "do...while" loop is a post-condition loop. The loop body is always executed at least once 
because the condition is checked after the loop body is executed.

Syntax:
do {
  // code to execute
} while (condition);
*/

/*
Example 1: Basic do...while loop
*/
let j = 0;
do {
  console.log('j = ' + j); // 0 1 2
  j++; // 1 / 2 /3
} while (j < 3); //1 /2  3

console.log('After the loop, j = ' + j);

/*
Example 2: A loop that executes only once
*/
do {
  console.log('This executes once!');
} while (false);

// Practical Example: Asking for a password
let password = '';
do {
  password = prompt('Enter a password longer than 4 characters', '');
} while (password.length < 5);

console.log('Your password: ', password);

// For Loop

/*
A "for" loop is a counter-based loop. It specifies the starting point, the ending condition, 
and the step for the counter. The loop runs until the condition becomes false.

Syntax:
for (initialization; condition; step) {
  // code to execute
}
*/

/*
Example 1: A basic for loop

*/
for (let i = 0; i <= 10; i += 2) {
  // i = i + 2
  console.log(i); // 0; 2; 4; 6; 8; 10
}

/*
Example 2: Calculating the sum of numbers up to a target value
*/
const target = 5;
let sum = 0;
for (let i = 1; i <= target; i++) {
  sum += i; // sum = sum +1
}
console.log('Sum: ', sum);

/*
Example 3: Using modulo to find remainders
*/
const max = 10;
for (let i = 1; i <= max; i++) {
  console.log(`${max} % ${i} = `, max % i);
}

// The `break` Statement

/*
The `break` statement completely stops the loop and transfers control 
to the code immediately after the loop.
*/
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    console.log('Found 3, stopping the loop');
    break;
  }
  console.log(i);
}
console.log('Loop ended');

// The `continue` Statement

/*
The `continue` statement skips the current iteration of the loop and proceeds with the next one.
*/
const number = 10;
for (let i = 3; i < number; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log('Odd number: ', i);
}

/*
Example: Multiplication table for 5
*/
const num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}

/*
Nested Loops
A loop inside another loop is called a nested loop.
*/
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
  console.log('End of inner loop');
}

// Labels for Loops

/*
Labels allow you to name a loop and use `break` or `continue` statements to control outer loops.
*/
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue outerLoop; // Skip to the next iteration of the outer loop
    }
    if (i === 2 && j === 2) {
      break outerLoop; // Exit both loops
    }
    console.log(`i=${i}, j=${j}`);
  }
}

// --- Loops ---

// TASKS FOR PRACTICE

// Task 1: Counting Down
// Write a program using a `while` loop that counts down from 10 to 1 and prints each number.
// After the countdown ends, print "Liftoff!".

let y = 10;
while (y > 0) {
  console.log(y);
  y--;
}
console.log('Liftoff');

// Task 2: Password Validation
// Using a `do...while` loop, ask the user to enter a password until they provide a password
// that is at least 6 characters long. After the user enters a valid password, print "Password accepted!".

let passwordId = '';
do {
  passwordId = prompt('Enter a password longer than 6 characters', '');
} while (passwordId < 6);
{
  alert('Your password is too short');
}
console.log('Password accepted!');

// Task 3: Sum of Numbers
// Write a program using a `for` loop that calculates the sum of all numbers from 1 to 50
// and prints the result.

let counter1 = 1;
let summ = 0;
for (let i = 1; i <= 50; i++) {
  summ += counter1;
  counter1++;
}
console.log(summ); // 1275

// Task 4: Multiplication Table
// Create a multiplication table for any number (e.g., 7) using a `for` loop.

let mulTableOn = 9;
let resultMult;
for (let i = 1; i <= 10; i++) {
  resultMult = i * mulTableOn;
  console.log(`${i}*${mulTableOn} = ${resultMult}`);
}

// Task 5: Odd Numbers Only
// Write a program using a `for` loop that prints only the odd numbers between 1 and 20.
// Use the `continue` statement to skip even numbers.

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log('Odd number: ', i);
}

// Task 6: Find the First Divisible Number
// Write a program that finds the first number divisible by 7 in the range from 1 to 100.
// Use a `for` loop with the `break` statement to stop as soon as the number is found.

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(`The first number divisible by 7 is: ${i}`);
    break; // Exit the loop once the number is found
  }
}

// Task 7: Nested Loop - Multiplication Table
// Using nested loops, create a complete multiplication table for numbers from 1 to 5.

let resultMult1;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    resultMult1 = i * j;
    console.log(`${i}*${j} = ${resultMult1}`);
  }
}
