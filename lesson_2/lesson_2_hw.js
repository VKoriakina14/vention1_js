// --- Resolving Expressions ---
// Task 1: Experiment with different arithmetic expressions
console.log(3 * '5'); // What happens when a string is multiplied by a number?
// 15
console.log('5' - 2); // What happens when a string is subtracted by a number?
//3
console.log('5' ** 2); // What happens when a string is exponentiated?
//25
console.log(5 + 3 * 2); // What happens when multiplication is done before addition?
// 11

// Task 2: Investigate logical operators with different data types
console.log(false && 'apple'); // What is the result of AND between boolean and string?
// FALSE
console.log(true || 0); // What happens when OR is used between boolean and number?
// TRUE
console.log('hello' && 10); // What happens when AND is used between string and number?
// 10
console.log(null || 7); // What happens when OR is used with null?
// 7

// --- Conditional Statements ---

// Task 3: Determine the discount on an item based on price. Create your rules for discoun.
const price = 120; // Replace with different values to test
let discount = 0;

if (price > 0 && price < 50) {
  discount = 0;
} else if (price >= 50 && price < 100) {
  discount = 5;
} else if (price >= 100) {
  discount = 10;
} else {
  console.log('The basket is empty ;((');
}
console.log(`The discount is: $${discount}`);

// Task 4: Determine if a number is divisible by both 3 and 5
const num1 = 15; // Replace with any number

if (num1 % 3 === 0 && num1 % 5 === 0) {
  console.log(`${num1} is divisible by both 3 and 5`);
} else {
  console.log('Divisible with reminder');
}

// Task 5: Write a program to check the grade: A(form 90 to 100)
//  B(from 80 to 90), C(from 70 to 80), D(60 to 70), F(0 to 60) based on the score
const score = 89; // Replace with different scores

// I think that the same nimbers can't in two intervals so:

if (score >= 90) {
  console.log(`Your grade is A`);
} else if (score >= 80 && score < 90) {
  console.log(`Your grade is B`);
} else if (score >= 70 && score < 80) {
  console.log(`Your grade is C`);
} else if (score >= 60 && score < 70) {
  console.log(`Your grade is D`);
} else if (score >= 0 && score < 60) {
  console.log(`Your grade is F`);
} else {
  console.log('Error');
}

// // Task 6: Determine the Day of the Week
// Example number of the day
const dayNumber = 7;
let dayName; // Replace this with any number from 1(Monday) to 7(Sunday)
// Using a switch statement to determine the day
switch (dayNumber) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  case 7:
    dayName = 'Sunday';
    break;
  default:
    console.log('Invalid subscription');
}
// Output the result
console.log(dayName);

// --- Loops ---

// Task 7: Print numbers from 100 down to 1 using a `while` loop
let num2 = 100;
while (num2 >= 1) {
  console.log(num2);
  num2--;
}

// Task 8: Calculate the factorial of a number (e.g., 5) using a `for` loop
const num3 = 5;
let factorial = 1;

for (let i = num3; i > 1; i--) {
  factorial *= i;
}
console.log(factorial);

// --- Advanced Task: Nested Loops ---

// Task 9: Create a multiplication table for numbers 1-10 using nested loops
let resultMult;
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    resultMult = i * j;
    console.log(`${i}*${j} = ${resultMult}`);
  }
}

// Task 10: Draw a checkerboard pattern using nested loops

const whiteSquare = '■';
const letterSize = 4;
const numberSize = 4;

for (let i = 1; i <= letterSize; i++) {
  console.log(
    whiteSquare +
      ' ' +
      whiteSquare +
      ' ' +
      whiteSquare +
      ' ' +
      whiteSquare +
      ' '
  );
  for (let j = 1; j <= numberSize; j++) {
    console.log(
      ' ' +
        whiteSquare +
        ' ' +
        whiteSquare +
        ' ' +
        whiteSquare +
        ' ' +
        whiteSquare
    );
  }
}

// Task 11: Find the smallest number in a set of numbers (without using arrays)
const num5 = 3;
const num6 = 8;
const num7 = 23;
const num8 = 1;

let smallest = num5;

if (num6 < smallest) {
  smallest = num6;
}
if (num7 < smallest) {
  smallest = num7;
}
if (num8 < smallest) {
  smallest = num8;
}

console.log(`The smallest number is: ${smallest}`);
