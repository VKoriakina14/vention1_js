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
const price = 120; // Replace with different values to test
let discount = 0;
if (price >= 100) {
    discount = 0.25;
} else if (price >= 50 && price < 100) {
    discount = 0.10;
} else if (price < 50) {
    discount = 0.05;
}
console.log(`The discount is: ${discount}`);

// Task 4: Determine if a number is divisible by both 3 and 5
const num1 = 15; // Replace with any number
if ((num1 % 3 === 0) && (num1 % 5 === 0)) {
    console.log(`${num1} is divisible by both 3 and 5`);
} else {
    console.log(`${num1} is not divisible by both 3 and 5`);


// Task 5: Write a program to check the grade: A(form 90 to 100)
//  B(from 80 to 90), C(from 70 to 80), D(60 to 70), F(0 to 60) based on the score
const score = 85; // Replace with different scores
let grade;
if (score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 80 && score < 90) {
    grade = 'B';
} else if (score >= 70 && score < 80) {
    grade = 'C';
} else if (score >= 60 && score < 70) {
    grade = 'D';
} else if (score >= 0 && score < 60) {
    grade = 'F';
} else {
    grade = 'Invalid score';
}
console.log(`For score ${score} is ${grade}`);

// // Task 6: Determine the Day of the Week
// Example number of the day
const dayNumber = 3; // Replace this with any number from 1(Monday) to 7(Sunday)
// Using a switch statement to determine the day
let dayName;
switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number";
}
// Output the result
console.log(dayName);


// --- Loops ---

// Task 7: Print numbers from 100 down to 1 using a `while` loop
let num2 = 100;
while (1 <= num2) {
    console.log(num2);
    num2--;
}


// Task 8: Calculate the factorial of a number (e.g., 5) using a `for` loop
let num3 = 5;
let result = 1;
for (let i = 1; i <= num3; i++) {
    result *= i;
}
console.log(result);

// --- Advanced Task: Nested Loops ---

// Task 9: Create a multiplication table for numbers 1-10 using nested loops

for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication Table for ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// Task 10: Draw a checkerboard pattern using nested loops

let size = 10; // checkerboard size

for (let row = 0; row < size; row++) {
    let pattern = '';
    for (let column = 0; column < size; column++) {
        if ((row + column) % 2 === 0) {
            pattern = pattern + '#';
        } else {
            pattern = pattern + ' ';
        }
    }
    console.log(pattern);
}

// Task 11: Find the smallest number in a set of numbers (without using arrays)
const num5 = 45;
const num6 = 8;
const num7 = 23;
const num8 = 78;

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
