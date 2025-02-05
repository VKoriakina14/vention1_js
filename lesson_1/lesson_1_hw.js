// Task 1: Choose appropriate names for variables and create them in the code.
// 1. Create a variable to store the creation date of the file.
// 2. Create a variable to store the file name.
// 3. Create a variable to store the number of errors.
const createDate = '20.02.2002';
let fileName = 'File name';
let numberOfErrors = 0;

// Task 2: Declare two variables: login and name
// 1. Assign your name to the variable 'name'
// 2. Copy the value from 'name' into 'login'
// 3. Print the value of the 'login' variable to the console
let myName = 'Vitalii';
let login = myName;
console.log(login);

// Task 3: Create 3 variables in one line with different values
let a = 0,
  b = 'x',
  c = true;

// Task 4: Create a variable named myUndefined and set its value to undefined without using the word "undefined"
let myUndefined;

// Task 5: You need to write the string "I'm lovin' it!" to the variable resultLine
// Do not modify the values of the variables line1, line2, and line3.
let line1 = 'Lovin';
let line2 = 'It!';
let line3 = "I'm";

let resultLine = `${line3} ${line1} ${line2}`;
console.log(resultLine); // Outputs: "I'm Lovin It!"

// Task 6: You need to store the string "70" in the variable digits
// Use the variables x, y, z, an empty string, and string concatenation.
let x = 3;
let y = 4;
let z = 0;

let digits = x + y + '' + z; // Concatenate the variables to form the string "70"
console.log(digits); // Outputs: "70"

// Task 7:
// You need to assign the number 100500 to the variable hugeAmount.
// Use the variables bigAmount, greatAmount, and convert the strings to numbers.
// Declare and initialize the hugeAmount variable in a single statement.

// --- Do not modify the values of the variables bigAmount and greatAmount.
// --- Use bigAmount, greatAmount, and the Integer() method to initialize the hugeAmount variable.
let bigAmount = '500';
let greatAmount = '100000';

let hugeAmount = Number(bigAmount) + Number(greatAmount); // change this line
console.log(hugeAmount); // Outputs: 100500

// Task 8: Modify the code so that instead of the string values, the length of each string is printed
// Do not modify the value of the emptyString variable.
// For the three strings passed to console.log, call the length method.
let emptyString = '';

console.log(emptyString.length); // Outputs: 0
console.log('Think Different'.length); // Outputs: 15
console.log((emptyString + 2 + 2 + '22').length); // Outputs: 4

// Task 9: Modify the code so that all letters in these strings are in lowercase
// Do not modify the values of the title, degree, and career variables.
// For the four strings passed to console.log, call the toLowerCase() method.
let title = 'Senior Lead Principal Data Analyst';
let degree =
  'In college, I Majored in Economics Science and Minored in Musician Studies.';
let career =
  'Data Scientist With 3+ Years of Experience in Big Data Analytics.';

console.log('RESUME'.toLowerCase());
console.log(('TITLE: ' + title).toLowerCase());
console.log(('DEGREE: ' + degree).toLowerCase());
console.log(('CAREER: ' + career).toLowerCase());

// Task 10: Modify the code so that all letters in these strings are in uppercase
// Do not modify the values of the caps and usa variables.
// Call the toUpperCase() method for the three strings passed to console.log.
let caps = 'if I type in caps ';
let fbi = 'fbi';

console.log(fbi.toUpperCase());
console.log('Гекльберрі Фінн'.toUpperCase());
console.log((caps + 'they know I mean business').toUpperCase());

// Task 11: Add multiplication, division, and subtraction operations.
// Display the results in two ways: using concatenation and using template strings.
let inputX = 2;
let inputY = 3;

let multiplication = inputX * inputY;
let division = inputX / inputY;
let subtraction = inputX - inputY;

// Display results using concatenation
console.log('Multiplication: ' + multiplication);
console.log('Division: ' + division);
console.log('Subtraction: ' + subtraction);

// Display results using template strings
console.log(`Multiplication: ${multiplication}`);
console.log(`Division: ${division}`);
console.log(`Subtraction: ${subtraction}`);

// Task 12: Initialize the message variable. The value should be created using both template strings and concatenation.
// The string value should be based on the variables name, age, company, and position.
let hisName = 'Maxim';
let age = 29;
let company = 'Apple';
let position = 'QA';

let message = `${hisName} is ${age} years old ${position}`;
console.log(message + '. He is working for ' + company);

// Task 13: Using typeof Operator
// 1. Declare variables to store the following values: a number, a string, a boolean, an undefined value, and a null value.
// 2. Use the typeof operator to check the data type of each variable.
// 3. Print the data types to the console.
let numVar = 0;
let strVar = 'text';
let boolVar = true;
let undefinedVar = undefined;
let nullVar = null;

console.log(
  `Number type: ${typeof numVar} \nString type: ${typeof strVar}\nBoolean type: ${typeof boolVar}\nUndefined type: ${typeof undefinedVar}\nNull type: ${typeof nullVar}\n`
);

// Task 14: Arithmetic Operations
// 1. Declare two variables with numeric values.
// 2. Perform addition, subtraction, multiplication, division, and modulus operations on them.
// 3. Print the results to the console.
let varX = 7;
let varY = 3;

let addition = varX + varY;
let multiply = varX * varY;
let div = varX / varY;
let subtract = varX - varY;
let modul = varX % varY;

console.log('Addition: ' + addition);
console.log('Multiplication: ' + multiply);
console.log('Division: ' + div.toFixed(2));
console.log('Subtraction: ' + subtract);
console.log('Modulus: ' + modul);

// Task 15: Using Logical AND (&&)
// 1. Declare two boolean variables with any values (true or false).
// 2. Use the && operator to combine the variables and store the result in a new variable.
// 3. Print the result.
let isChanged = true;
let isSmart = false;

let isResult = isChanged && isSmart;
console.log(isResult); // result FALSE

// // Task 16: Using Logical OR (||)
// 1. Declare two boolean variables with any values (true or false).
// 2. Use the || operator to combine the variables and store the result in a new variable.
// 3. Print the result.
let isNew = true;
let isOld = false;

let isFine = isNew || isOld;
console.log(isFine); // result TRUE

// Task 17: Logical NOT (!)
// 1. Declare a boolean variable and assign it any value (true or false).
// 2. Use the ! operator to invert the value and store it in a new variable.
// 3. Print both the original and inverted values.
let isYes = true;
let isNo = false;

let isNotOk1 = !isYes;
let isNotOk2 = !isNo;
console.log(isYes); // result TRUE
console.log(isNo); // result FALSE
console.log(isNotOk1); // result FALSE
console.log(isNotOk2); // result TRUE

// Task 18: Using typeof with Expressions
// 1. Perform any arithmetic operation (e.g., addition, subtraction).
// 2. Use the typeof operator to find the type of the result.
// 3. Print the result and its type.
let test1 = 5;
let test2 = 8;

console.log(typeof (test2 - test1)); // result NUMBER

// Task 19: Combining Logical and Arithmetic Operators
// 1. Declare three variables: two numbers and one boolean.
// 2. Use arithmetic operators to create an expression (e.g., add the two numbers).
// 3. Use a logical operator to combine the result with the boolean value.
// 4. Print the final result.
let testVar1 = 7;
let testVar2 = 7;
let testVar3 = true;

let sum = testVar1 + testVar2;

console.log(sum && testVar3); // result TRUE

// Task 20: Exploring typeof with Strings and Numbers
// 1. Declare a variable with a string that looks like a number (e.g., "42").
// 2. Check the type of the variable.
// 3. Perform an arithmetic operation on the string and print the result and its new type.
let numVar1 = '69';
console.log(typeof numVar1);
console.log(typeof (numVar1 - 2));
