// --- Resolving Expressions ---
// Task 1: Experiment with different arithmetic expressions
console.log(3 * '5'); // What happens when a string is multiplied by a number?    
// Result - 15
console.log('5' - 2); // What happens when a string is subtracted by a number?
//Result - 3
console.log("5" ** 2); // What happens when a string is exponentiated?
//Result - 25
console.log(5 + 3 * 2); // What happens when multiplication is done before addition?
//Result - 11

// Task 2: Investigate logical operators with different data types
console.log(false && "apple"); // What is the result of AND between boolean and string?
//Result - false

console.log(true || 0); // What happens when OR is used between boolean and number?
//Result - true

console.log('hello' && 10); // What happens when AND is used between string and number?
//Result - true

console.log(null || 7); // What happens when OR is used with null?
//Result - 7

// --- Conditional Statements ---

// Task 3: Determine the discount on an item based on price. Create your rules for discoun.
// Rule 1 - 1-100 ->  0%
// Rule 2 - 101-200  -> 10%
// Rule 3 - < 201 -> 20%

const price = 1020; // Replace with different values to test
let discount = 0;

if (  price >=1 && price <= 100) {
    discount = 0;
    console.log(`The discount is ${discount}%`);
} else if (price >=101 && price <= 200) {
    discount = 10;
    console.log(`The discount is ${discount}%`);
} else {
    discount = 20
    console.log(`The discount is ${discount}%`);
}


// Task 4: Determine if a number is divisible by both 3 and 5
const num1 = 5; // Replace with any number

if (num1%15 === 0) {
    console.log(`Number is divisible by 3 and 5!`)
} else
{
    console.log(`Number is not divisible by 5 and 3!`);
}


// Task 5: Write a program to check the grade: A(form 90 to 100)
//  B(from 80 to 90), C(from 70 to 80), D(60 to 70), F(0 to 60) based on the score
const score = 80; // Replace with different scores

if(score >=0 && score <=60) {
     console.log('The grade is F') 
} else if (score >=61 && score <=70) {
     console.log('The grade is D')
} else if (score >=71 && score <= 80) {
     console.log('The grade is C')
}else if (score >=81 && score <= 90) {
     console.log('The grade is B')
}else if (score >=91 && score <= 100) {
     console.log('The grade is A')
}


// // Task 6: Determine the Day of the Week
// Example number of the day
const dayNumber = 7; // Replace this with any number from 1(Monday) to 7(Sunday)
// Using a switch statement to determine the day

switch (dayNumber) { 
        case 1:
            console.log('It is Monday');
            break;
        case 2:
            console.log('It is Thusday');
            break;
        case 3:
            console.log('It is Wednesday');
           break;
        case 4:
            console.log('It is Thursday');
            break;
        case 5: 
            console.log('It is Friday');
            break;
        case 6: 
            console.log('It is Saturday');
            break;
        case 7:
            console.log('It is Sunday');
            break;
 }

// Output the result
console.log(dayName);


// --- Loops ---

// Task 7: Print numbers from 100 down to 1 using a `while` loop
let num2 = 100;

while (num2 > 0 ) {
console.log(num2);
num2 --;
}


// Task 8: Calculate the factorial of a number (e.g., 5) using a `for` loop
const num3 = 6;
const arr1 = [];

for(let i = 1; i <= num3; i++) {
    arr1.push(i);
    if (i === num3) {
      let factorial =  arr1.reduce((acc, curr)=> acc*curr, 1)
        console.log(`The factorial of ${num3} is ${factorial}!`);
    }
}



// --- Advanced Task: Nested Loops ---

// Task 9: Create a multiplication table for numbers 1-10 using nested loops

for(let i = 1; i<=10; i++) {
    let row = "";
    for(let j = 1; j<=10; j++) {

        row = row + (i*j).toString().padEnd(4, " ")
       
    }
    console.log(row);
}




// Task 10: Draw a checkerboard pattern using nested loops

for (let i = 1; i <= 10; i++) {
    let row = "";
    
    for (let j = 1; j <= 10; j++) {
        // Use (i + j) % 2 to alternate `#` and space
        if ((i + j) % 2 === 0) {
            row = row + "#".padEnd(3, " "); // `#` with spacing for alignment
        } else {
            row = row+ "O".padEnd(3, " "); // Space for alignment
        }
    }
    
    console.log(row);
}


// Task 11: Find the smallest number in a set of numbers (without using arrays)                  
const num5 = 45;
const num6 = 1008;
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

console.log("Smallest number:", smallest);



// --- Loops ---

// TASKS FOR PRACTICE

// Task 1: Counting Down
// Write a program using a `while` loop that counts down from 10 to 1 and prints each number.
// After the countdown ends, print "Liftoff!".

let num = 10;

while (num >= 1) {
    console.log(num);
    num--; 
        if (num ===0){
            console.log("Liftoff!");
         }
} 
 

// Task 2: Password Validation
// Using a `do...while` loop, ask the user to enter a password until they provide a password
// that is at least 6 characters long. After the user enters a valid password, print "Password accepted!".

let password = "jjhbiiuiuij";

do {
    if (password.length>=6) {
        console.log("Password accepted!");
        break;
    }
    console.log("Write correct lenght of password!")
    break;
  
}while (password.length< 6)


// Task 3: Sum of Numbers
// Write a program using a `for` loop that calculates the sum of all numbers from 1 to 50
// and prints the result.

let addNumber = 0; 

for(let i =1; i<=50; i++) {
    addNumber = addNumber +i;
   if (i === 50)  {
    console.log(`Total sum of numbers is: ${addNumber}`);
}   
}


// Task 4: Multiplication Table
// Create a multiplication table for any number (e.g., 7) using a `for` loop.

let tableNumber = 7;


for(let i = 1; i<=tableNumber; i++) {
    let row = "";
    for(let j = 1; j<=tableNumber; j++) {

        row = row + (i*j) + " "
       
    }
    console.log(row);
}


// Task 5: Odd Numbers Only
// Write a program using a `for` loop that prints only the odd numbers between 1 and 20.
// Use the `continue` statement to skip even numbers.

for(let i= 1; i<=20; i++) {
    if(i%2 === 0) {
      continue
    } 
    console.log(i);
}


// Task 6: Find the First Divisible Number
// Write a program that finds the first number divisible by 7 in the range from 1 to 100.
// Use a `for` loop with the `break` statement to stop as soon as the number is found.

for(let i =1; i<=100; i++) {
    if(i%7 === 0) {
        console.log(`First divisible number by 7 is from 1 to 100 is ${i}`);
        break;
    }
}


// Task 7: Nested Loop - Multiplication Table
// Using nested loops, create a complete multiplication table for numbers from 1 to 5.

let tableNumber01 = 5;


for(let i= 1; i<= tableNumber01 ;i++) {
    let row = "";
    for(let j = 1; j<= tableNumber01; j++) {
        row  = row + (j*i).toString().padEnd(4, " ");
  
    }
    console.log(row);
}


