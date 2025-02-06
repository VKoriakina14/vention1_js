/* ------ Exercise 1 - leapYears
Create a function that determines whether or not a given year is a leap year. 
Leap years are determined by the following rules:

Leap years are years divisible by four (like 1984 and 2004). 
However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
(Yes, it's all pretty confusing)
Hints
use an if statement and && to make sure all the conditions are met properly*/

const leapYears = (year) => (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
console.log(leapYears(2000)); // true
console.log(leapYears(1985)); // false
console.log(leapYears(1900)); // false
console.log(leapYears(1600)); // true
console.log(leapYears(2024)); // true

/* ------ Exercise 2 - Fibonacci
Create a function that returns a specific member of the Fibonacci sequence:

A series of numbers in which each number ( Fibonacci number ) 
is the sum of the two preceding numbers. In this exercise, 
the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc. 
To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence */

const fibonacci = function(n) {
  if (n <= 0) return 0;
  if (n === 1 || n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(10));

/* ------ Exercise 3 - Filter Sting. Arrays
Create a function that takes a list of non-negative integers and strings
 and returns a new list with the strings filtered out.

Example 

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 */

const filterList = (arr) => arr.filter(element => typeof element === 'number');
console.log(filterList([1, 2, 'a', 'b'])); // [1, 2]

/* ------ Exercise 4 - Positive Sum. Arrays
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 */

const sumOfPositiveValues = (arr) => arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
console.log(sumOfPositiveValues([1, -4, 7, 12]));

/*  ------ Exercise 5 - Abbreviate. Strings

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
 */

const transformFullNameToInitials = function(fullName) {
 return fullName.split(" ").map((element) => {return element.charAt(0).concat(".")}).join(" ");
}
let str = transformFullNameToInitials("Sam Harris");
console.log(str);

/* ----- Exercise 06 - Reverse a String
Pretty simple, write a function called reverseString that returns its input, reversed!

 
Hints
Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first.. 
do the reversal and then join it back together into a string.*/

const reverseString = function(myString) {
 return myString.split("").reverse().join("");
};
let newString = reverseString('hello there');
console.log(newString); // returns 'ereht olleh'


/* Exercise 07 - removeFromArray
Implement a function that takes an array and some other arguments then removes the other arguments from that array:


Hints
The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

you can manipulate the original array you pass into the function call or create a new array that is returned as the result.
how to remove a single element from an array
how to deal with multiple optional arguments in a javascript function
For more information, check out MDN's page on function arguments - scroll down to the bit about Array.from or the spread operator. You can also check out MDN's page on rest parameters. */
const removeFromArray = function(array, number) {
 return array.filter((element) => element !== number);
};
let newArray = removeFromArray([1, 2, 3, 4], 3);
console.log(newArray);

/* Task 08: Array Methods
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

/* Task 09: Object Transformation
Create a function that takes an object of student scores
and returns an object with the same keys but with pass/fail values
(pass if score >= 60)
Example: { John: 80, Jane: 45 } should return { John: 'pass', Jane: 'fail' }
*/

// Your solution here
const getPassFail = (scores) => {
    let newObjArr = Object.entries(scores).map(([key, value]) => {
        if(value >= 60) {
            return [key, 'pass'];
        } else {
            return [key, 'fail'];
        }
    });
    return Object.fromEntries(newObjArr);
};
let obj = { John: 80, Jane: 45 };
let newObj = getPassFail(obj);
console.log(newObj);
