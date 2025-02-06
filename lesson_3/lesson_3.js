let x = 5; //6
let y = ++x; // 6
console.log(x)
console.log(y)

let x = 5; // 6
let y = x++; // 5 
console.log(x)
console.log(y)

// JavaScript Practice Exercises for Loops, Conditions, and Functions

// Exercise 1
// Question: What will be the last value displayed? Why?
let i = 7;
while (i) {
    console.log(i--);
}
console.log("i = " + i);

// Exercise 2
// Question: What values will this while loop print?
let w = 0;
while (w++ < 5) {
    console.log(w);
}

// Exercise 3
// Question: Is else needed in this function?
function checkAge(age) {
    if (age) {
        return true;
    } else {
        return console.log("Ask your parents");
    }
}

checkAge("");


// Exercise 4
// Question: Why is this loop infinite?
let j = 0;
while (j != 10) {
    j += 0.2;
}


// Exercise 5
// Question: What will be printed to console?
for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}

// Exercise 6
// Question: What will be printed to console?
let a = 10;
do {
    a += 1;
    console.log(a);
} while (a < 5);


// Exercise 7
// Question: What will be printed to console?
let b = 10;
if (b) {
    let b = 3;
    b *= b;
}
console.log(b);

// Exercise 8
// Question: What will be printed to console?
function sum(num1, num2 = num1) {
    console.log(num1 + num2);
}
sum(10);    // Prints: 20 (10 + 10)
sum(10, 5); // Prints: 15 (10 + 5)




/* A method is essentially a function that belongs to an object or a class. 
Think of it as an action that can be performed on or by that object.
*/

// Built-in Methods
// Custom Methods
// Class Methods


// String Methods:
let str = "Hello World some other"; // H = 0, e = 1, l = 2, l = 3
str.length                 // 11
str.toUpperCase()         // "HELLO WORLD"
str.toLowerCase()         // "hello world"
str.trim()               // Removes whitespace
str.slice(0, 5)          // "Hello"
console.log(str.split(""))           // ["Hello", "World"]
str.replace("Hello", "Hi")// "Hi World"
str.includes("Hello")     // true
str.indexOf("World")      // 6
str.charAt(6)            // "H"
str.substring(0, 5)      // "Hello"


// Number Methods:
let num = "123.456";
num.toString()           // "123.456"
num.toFixed(2)          // "123.46"
num.toPrecision(4)      // "123.5"
Number.isInteger(num)    // false
Number.isFinite(num)     // true
Number.parseInt("123")   // 123
Number.parseFloat("123.456") // 123.456

// Boolean Methods:
let bool = true;
bool.toString()          // "true"
Boolean(1)              // true
Boolean("")             // false

// Math Object Methods (for working with numbers):
Math.round(3.5)         // 4
Math.floor(3.9)         // 3
Math.ceil(3.1)          // 4
Math.abs(-5)            // 5
Math.max(1, 2, 3)       // 3
Math.min(1, 2, 3)       // 1
Math.random()           // Random number between 0 and 1 
Math.pow(2, 3)          // 8
Math.sqrt(16)           // 4

// ==========================================
//  Arrays, Objects, and Functions
// ==========================================

// PART 1: ARRAY METHODS
// --------------------

// Creating an array
let fruits = ['apple', 'banana', 'orange'];


// 1. Basic Array Methods

// push() - adds element to the end
fruits.push('grape');
console.log('After push:', fruits);

// pop() - removes last element
let lastFruit = fruits.pop();
console.log('Popped element:', lastFruit);
console.log('After pop:', fruits);

// unshift() - adds element to the beginning
fruits.unshift('mango');
console.log('After unshift:', fruits);

// shift() - removes first element
let firstFruit = fruits.shift();
console.log('Shifted element:', firstFruit);
console.log('After shift:', fruits);


// 2. Array Transformation Methods
let numbers = [1, 2, 3, 4, 5];

// map() - creates new array with results of callback
// let doubled = numbers.map(num => num * 2); // 
// console.log('Original array:', numbers);
// console.log('Mapped array (doubled):', doubled);

// filter() - creates new array with elements that pass test
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Filtered array (even numbers):', evenNumbers);


let numbers = [1, 2, 3, 4, 5];
// reduce() - reduces array to single value
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Reduced array (sum):', sum);

//     Current V      Accumulator     Action  
// 1.     1              0             1+0 = 1
// 2.     2              1             1 + 2 = 3
// 3.     3               3            3+3 = 6
// 4.     4             6             6+4 = 10
// 5.     5               10           5 + 10 = 15


// PART 2: OBJECT METHODS
// ---------------------
let person = {
    name: 'John',
    age: 30,
    profession: 'developer'
};

// Object.keys() - returns array of keys
console.log('Object keys:', Object.keys(person));

// Object.values() - returns array of values
console.log('Object values:', Object.values(person));

// Object.entries() - returns array of [key, value] pairs
console.log('Object entries:', Object.entries(person));



// PART 3: FUNCTIONS
// ----------------

//  WHAT IS A FUNCTION?
// ---------------------
// A function is a reusable block of code that performs a specific task
// Think of it as a "machine" that:
// - Can take inputs (parameters)
// - Processes them
// - Returns an output (or performs an action)

// Function Declaration

// 1. Declaring the function multiply
function multiply(a, b) {
    // Function body
    console.log("This is a log at the moment of calling the function multiply");
  }
  
  // 2. Calling the multiply function
  multiply(); // 'This is a log at the moment of calling the function multiply'
  multiply(); // 'This is a log at the moment of calling the function multiply'
  multiply(); // 'This is a log at the moment of calling the function multiply'
   

/* Parameters are local variables available only in the function body. 
   They are separated by commas. 
   There can be several parameters or none at all, 
   in which case you simply write empty parentheses. */

// 1. Declaring parameters x, y, z
function multiply(x, y, z) {
    console.log(`The result of multiplication is ${x * y * z}`);
  }
  
  // 2. Passing arguments
  multiply(2, 3, 5); // The result of multiplication is 30
  multiply(4, 8, 12); // The result of multiplication is 384
  multiply(17, 6, 25); // The result of multiplication is 2550
    

/* Returning values

The return operator is used to send a value from the function body to external code. 
When the interpreter encounters return, it immediately exits the function (stops its execution) 
and sends the specified value to the location in the code where the function was called.
 */

function multiply(x, y, z) {
    console.log("Code before return is executed as normal");
  
    // Returning the result of the multiplication
    return x * y * z;
  
    console.log("This log will never execute, it is after the return");
  }
  
  // The result of the function can be saved in a variable
  let result = multiply(2, 3, 5);
  console.log(result); // 30
  
  result = multiply(4, 8, 12);
  console.log(result); // 384
  
  result = multiply(17, 6, 25);
  console.log(result); // 2550
   

// There can be more than one return

 function checkAge() {
    let age = 10;
    if (age >= 18) {
        return console.log("Permission granted");
    } else {
        return console.log("Ask your parents");
    }
}

checkAge(); 


// 1. Function Declaration
console.log(greet('Alice'));

function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Function Expression
const goodbye = function(name) {
    return `Goodbye, ${name}!`;
};
console.log(goodbye('Bob'));

// 3. Arrow Functions
const multiply = (a, b) => a * b;
console.log('2 x 3 =', multiply(2, 3));

// Arrow function with multiple lines
const calculateArea = (width, height) => {
    const area = width * height;
    return area;
};
console.log('Area 5x3 =', calculateArea(5, 3));

// Callback (a function that calls another function)

function greet(name) {
    return `Welcome ${name}.`;
  }
  
  // Calling the greet function and logging the result to the console
  console.log(greet("Mango")); // Welcome Mango.
  
  // Logging the greet function to the console without calling it
  console.log(greet); // ƒ greet() { return `Welcome ${name}.`; }
  

/* A callback function is a function that is passed to another function as an argument, 
   and that function, in turn, calls the passed function. */

// Callback function
function greet(name) {
    console.log(`Welcome ${name}.`);
  }
  
  // Higher-order function
  function registerGuest(name, callback) {
    console.log(`Registering guest ${name}.`);
    callback(name);
  }
  
  registerGuest("Mango", greet);


// We passed a reference to the greet function as an argument, so it will be assigned to the callback parameter 
// and called inside the registerGuest function using parentheses. The name of the parameter for the callback 
// can be arbitrary, but it's important to remember that its value will be a function.



// PRACTICE TASKS
// -------------

/* Task 1: Array Methods
Create a function that takes an array of numbers and returns a new array
where each number is multiplied by its index + 1
Example: [1, 2, 3] should return [1, 4, 9]
*/

// Your solution here
const multiplyByIndex = (arr) => {
    return arr.map((element, index) => {
        return element * (index + 1);
    });
};
console.log(multiplyByIndex([1, 2, 3]))

/* Task 2: Object Transformation
Create a function that takes an object of student scores
and returns an object with the same keys but with pass/fail values
(pass if score >= 60)
Example: { John: 80, Jane: 45 } should return { John: 'pass', Jane: 'fail' }
*/

// Your solution here
const getPassFail = (scores) => {
    return Object.entries(scores).map(([key, value]) => {
        if(value >= 60) {
            return [key, 'pass'];
        } else {
            return [key, 'fail'];
        }
    });
};
let obj = { John: 80, Jane: 45 };
let newObj = Object.fromEntries(getPassFail(obj));
console.log(newObj);

/*---------------------------------------------------*/

const convertToCelsius = function (temp) {
    return (temp - 32)*5/9 ;
}
console.log(convertToCelsius(32))


const polindromes = function (str) {
// 1. convert visa verso 
// 2. check and back true or false
let strReverse = str.split('').reverse().join('');
console.log(strReverse)
if (str === str.split('').reverse().join('')) {
    return true;
} else {
    return false
}
}

console.log(polindromes("animal loots foliated detail of stool lamina"))
