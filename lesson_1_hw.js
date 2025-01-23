// Task 1: Choose appropriate names for variables and create them in the code.
// 1. Create a variable to store the creation date of the file.
let fileDate;
// 2. Create a variable to store the file name.
let fileName;
// 3. Create a variable to store the number of errors.
let numberOfErrors;

// Task 2: Declare two variables: login and name
// 1. Assign your name to the variable 'name'
// 2. Copy the value from 'name' into 'login'
// 3. Print the value of the 'login' variable to the console
let login;
let myName; 
myName = "Ľubka";
login = myName;
console.log(login);


// Task 3: Create 3 variables in one line with different values
let num1 = 1, num2 = 2, num3 = 3;


// Task 4: Create a variable named myUndefined and set its value to undefined without using the word "undefined"
let myUndefined;
console.log(myUndefined);


// Task 5: You need to write the string "I'm lovin' it!" to the variable resultLine
// Do not modify the values of the variables line1, line2, and line3.

let line1 = "Lovin";
let line2 = "It!";
let line3 = "I'm";

let resultLine = `${line3} ${line1} ${line2}`;  
console.log(resultLine);  // Outputs: "I'm Lovin It!"

// Task 6: You need to store the string "70" in the variable digits
// Use the variables x, y, z, an empty string, and string concatenation.

let x = 3;
let y = 4;
let z = 0;

let digits = x+y +""+ z;  // Concatenate the variables to form the string "70"
console.log(digits);  // Outputs: "70"

// Task 7: 
// You need to assign the number 100500 to the variable hugeAmount.
// Use the variables bigAmount, greatAmount, and convert the strings to numbers.
// Declare and initialize the hugeAmount variable in a single statement.

// --- Do not modify the values of the variables bigAmount and greatAmount.
// --- Use bigAmount, greatAmount, and the Integer() method to initialize the hugeAmount variable.

let bigAmount = "500";
let greatAmount = "100000";

let hugeAmount = Number(greatAmount) + Number(bigAmount);  // change this line      //I am not sure what is ment by Integer() method -> was it ment parseInt() ?
console.log(hugeAmount);  // Outputs: 100500

// Task 8: Modify the code so that instead of the string values, the length of each string is printed
// Do not modify the value of the emptyString variable.
// For the three strings passed to console.log, call the length method.

let emptyString = "";

console.log(emptyString.length);  // Outputs: 0
console.log("Think Different".length);  //  15
console.log((emptyString.length + 2 + 2 + "22".length));  //   6 

// Task 9: Modify the code so that all letters in these strings are in lowercase
// Do not modify the values of the title, degree, and career variables.
// For the four strings passed to console.log, call the toLowerCase() method.

let title = "Senior Lead Principal Data Analyst";
let degree = "In college, I Majored in Economics Science and Minored in Musician Studies.";
let career = "Data Scientist With 3+ Years of Experience in Big Data Analytics.";

console.log("RESUME".toLocaleLowerCase());
console.log("TITLE: ".toLocaleLowerCase() + title.toLocaleLowerCase());  // OR console.log(`TITLE:  ${title}`.toLocaleLowerCase());
console.log("DEGREE: ".toLocaleLowerCase() + degree.toLocaleLowerCase());   // OR console.log(`DEGREE:  ${degree}`.toLocaleLowerCase())
console.log("CAREER: ".toLocaleLowerCase() + career.toLocaleLowerCase());       // OR console.log(`CAREER:  ${career}`.toLocaleLowerCase())

// Task 10: Modify the code so that all letters in these strings are in uppercase
// Do not modify the values of the caps and usa variables.
// Call the toUpperCase() method for the three strings passed to console.log.

let caps = "if I type in caps ";
let fbi = "fbi";

console.log(fbi.toUpperCase());
console.log("Гекльберрі Фінн".toLocaleUpperCase());
console.log(caps.toLocaleUpperCase() + "they know I mean business".toLocaleUpperCase());

// Task 11: Add multiplication, division, and subtraction operations.
// Display the results in two ways: using concatenation and using template strings.

let inputX = 2;
let inputY = 3;

let multiplyConcat = "Multiply output is" + " " + inputX*inputY;
let multiplyTemplate = `Multiply output is ${inputX*inputY}`;
console.log(multiplyConcat, multiplyTemplate)

let divisionConcat = "Division output is" + " " + inputX/inputY;
let divisionTemplate = `Division output is ${inputX/inputY}`;
console.log(divisionConcat, divisionTemplate);

let substractionConcat = "Substraction output is" + " " + (inputX - inputY);
let substractionTemplate = `Substraction output is ${inputX - inputY}`;
console.log(substractionConcat, substractionTemplate);



// Task 12: Initialize the message variable. The value should be created using both template strings and concatenation.
// The string value should be based on the variables name, age, company, and position.

let name = "Maxim";
let age = 29;
let company = "Apple";
let position = "QA";

let message = `My name is ${name}, I am ${age} years old, I work at ${company} at the ` + position  + " position!";
console.log(message);

// Task 13: Using typeof Operator
// 1. Declare variables to store the following values: a number, a string, a boolean, an undefined value, and a null value.
// 2. Use the typeof operator to check the data type of each variable.
// 3. Print the data types to the console.

let numberData = 5;
let stringData = "Test";
let booleanData = true;
let undefinedData;
let nullData = null;

console.log(typeof(numberData), typeof(stringData), typeof(booleanData), typeof(undefinedData), typeof(nullData));

// Task 14: Arithmetic Operations
// 1. Declare two variables with numeric values.
// 2. Perform addition, subtraction, multiplication, division, and modulus operations on them.
// 3. Print the results to the console.

let numA = 5;
let numB = 10;

let addition = numA + numB;
let substraction = numA - numB;
let multiplication = numA * numB;
let division = numA/numB;
let modulus = numB%numA;

console.log(addition, substraction, multiplication, division, modulus);

// Task 15: Using Logical AND (&&)
// 1. Declare two boolean variables with any values (true or false).
// 2. Use the && operator to combine the variables and store the result in a new variable.
// 3. Print the result.

let booleanA = true;
let booleanB = false;

let result1 = booleanA && booleanB;
console.log(result1);

// // Task 16: Using Logical OR (||)
// 1. Declare two boolean variables with any values (true or false).
// 2. Use the || operator to combine the variables and store the result in a new variable.
// 3. Print the result.

let booleanC = false;
let booleanD = true;

let result2 = booleanC || booleanD;
console.log(result2);

// Task 17: Logical NOT (!)
// 1. Declare a boolean variable and assign it any value (true or false).
// 2. Use the ! operator to invert the value and store it in a new variable.
// 3. Print both the original and inverted values.

let booleanE = false;

let result3 = !booleanE;
console.log(result3);

// Task 18: Using typeof with Expressions
// 1. Perform any arithmetic operation (e.g., addition, subtraction).
// 2. Use the typeof operator to find the type of the result.
// 3. Print the result and its type.

let num4 = 5;
let num5 = 10;

let result4 = num4 + num5;

console.log(result4, typeof(result4))

// Task 19: Combining Logical and Arithmetic Operators
// 1. Declare three variables: two numbers and one boolean.
// 2. Use arithmetic operators to create an expression (e.g., add the two numbers).
// 3. Use a logical operator to combine the result with the boolean value.
// 4. Print the final result.

let num6 = 15;
let num7 = 22;
let booleanF = true;

let result5 = num6 && num7 && booleanF;
console.log(result5, typeof(result5));

// Task 20: Exploring typeof with Strings and Numbers
// 1. Declare a variable with a string that looks like a number (e.g., "42").
// 2. Check the type of the variable.
// 3. Perform an arithmetic operation on the string and print the result and its new type.

let newVariable = "55";

console.log(newVariable, typeof(newVariable));

let result6 = newVariable/2;

console.log(result6, typeof(result6));
