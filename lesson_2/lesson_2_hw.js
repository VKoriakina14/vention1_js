// --- Resolving Expressions ---
// Task 1: Experiment with different arithmetic expressions
console.log(3 * '5'); // What happens when a string is multiplied by a number?
console.log('5' - 2); // What happens when a string is subtracted by a number?
console.log("5" ** 2); // What happens when a string is exponentiated?
console.log(5 + 3 * 2); // What happens when multiplication is done before addition?

// Task 2: Investigate logical operators with different data types
console.log(false && "apple"); // What is the result of AND between boolean and string?
console.log(true || 0); // What happens when OR is used between boolean and number?
console.log('hello' && 10); // What happens when AND is used between string and number?
console.log(null || 7); // What happens when OR is used with null?

// --- Conditional Statements ---

// Task 3: Determine the discount on an item based on price. Create your rules for discoun.
const price = 220; // Replace with different values to test
let discount = 0;

switch (true) {
  case (400 < price):
    discount = 50;
    break;
  case (300 < price):
    discount = 30;
    break;
  case (200 < price):
    discount = 20;
    break;
  case (100 < price ):
    discount = 10;
    break;
}

console.log(`The discount is: $${discount}`);

// Task 4: Determine if a number is divisible by both 3 and 5
const num1 = 30; // Replace with any number

if (num1 % 3 == 0 && num1 % 5 == 0) {
    console.log("Dividable by 3 and 5");
} else {
    console.log("Error: not divisible");
}

// Task 5: Write a program to check the grade: A(form 90 to 100)
//  B(from 80 to 90), C(from 70 to 80), D(60 to 70), F(0 to 60) based on the score
const score = 85; // Replace with different scores
let grade = "F";
switch (true) {
    case (90 <= score):
      grade = "A";
    break;
    case (80 <= score):
      grade = "B";
    break;
    case (70 <= score):
      grade = "C";
    break;
    case (60 <= score):
      grade = "D";
    break;
  }
  console.log(grade);

// // Task 6: Determine the Day of the Week
// Example number of the day
const dayNumber = 3; // Replace this with any number from 1(Monday) to 7(Sunday)
// Using a switch statement to determine the day
let dayName = "Choose the number from 1 to 7";
switch (true) {
    case (dayNumber === 7):
      dayName = "Sunday";
    break;
    case (dayNumber === 6):
      dayName = "Saturday";
    break;
    case (dayNumber === 5):
        dayName = "Friday";
    break;
    case (dayNumber === 4):
        dayName = "Thursday";
    break;
    case (dayNumber === 3):
        dayName = "Wednesday";
    break;
    case (dayNumber === 2):
        dayName = "Tuesday";
    break;
    case (dayNumber === 1):
        dayName = "Monday";
    break;
} 

// Output the result
console.log(dayName);


// --- Loops ---

// Task 7: Print numbers from 100 down to 1 using a `while` loop

let num2 = 100;

for ( let i = num2; i >= 1; i--) {
    console.log(i);
}


// Task 8: Calculate the factorial of a number (e.g., 5) using a `for` loop
const num3 = 10;

let sum = 1;
for (let i=2; i<=num3; i++) {
 sum = sum * i;
}
console.log("Factorial: " +sum);


// --- Advanced Task: Nested Loops ---

// Task 9: Create a multiplication table for numbers 1-10 using nested loops
for ( let i = 0; i<=9; i++) {
    for ( let j = 0; j<=9; j++) {
       console.log( i + "*" +  j + "=" + i*j);
    }
}
// Task 10: Draw a checkerboard pattern using nested loops
for (let i = 0; i < 8; i++) {
    let line="";

    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            line += "H";
        } else {
            line += " ";
        }
     }
    console.log(line);
}

// Task 11: Find the smallest number in a set of numbers (without using arrays)
const num5 = 45;
const num6 = 8;
const num7 = 23;
const num8 = 78;

const smallest = Math.min(num5, num6, num7, num8);
console.log("The smallest number is:", smallest);
