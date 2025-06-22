===================================================================
Lets learn about function in JavaScript in a very simple way       
===================================================================

🧠 What is a Function?
-> A function is a reusable block of code that does something when you call it.

function sayHello() {
  console.log("Hello Sajid!");
}
sayHello(); // Output: Hello Sajid!


Types of Functions in JavaScript
Let’s break them down into 7 main types : 👇🏼
----------------------------

1. Function Declaration (Named Function) ✅
2. Function Expression ✅
3. Anonymous Function ✅
4. Arrow Function (ES6+) ✅
5. Callback Function ✅
6. Recursive Function ✅
7. Immediately Invoked Function Expression (IIFE) ✅


// Lets see each type of function in depth with an example
_______________________________________________________________


1. Function Declaration (Named Function) ✅

-> This is the most common way to create a function. It starts with the "function" keyword, followed by a name, and then parentheses () for parameters.

// example 👇🏼
function sayHello() {
  console.log("Hello Sajid!");
}
sayHello(); // Calls the function


💡 Key Points:

-> It has a name (sayHello)
-> You can call it any time using its name.
-> It's hoisted, meaning you can use it even before it's defined in code.

_________________________________________________________________________________


2. Function Expression ✅

-> A function is created and stored inside a variable (function becomes a value).

// example 👇🏼
const greet = function() {
  console.log("Hi there!");
};
greet(); // Output: Hi there!


💡 Key Points:

-> Function has no name, it's assigned to a variable.
-> Not hoisted — you must define it before using it.
-> Good for assigning functions to variables dynamically.

______________________________________________________________________________


3. Anonymous Function ✅

-> A function without a name — used on the spot, usually as a callback.

// example 👇🏼
setTimeout(function() {
  console.log("Hello after 2 seconds");
}, 2000);


💡 Key Points:

-> Doesn’t have a name.
-> Can’t be reused later unless stored in a variable.
-> Often used in events, timeouts, etc.

____________________________________________________________________________


4. Arrow Function (ES6+ feature) ✅

-> Short and modern way to write functions. No "function" keyword and no "this" binding.

// example 👇🏼
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // Output: 5


🔹 If the function returns only one value, you can also write it in one line:

const square = x => x * x;
console.log(square(4)); // Output: 16


💡 Key Points:

-> Doesn’t have its own "this" keyword (uses parent's context).
-> Cleaner and great for simple functions.
-> Commonly used in modern code, like React or Angular.

________________________________________________________________________________


5. Callback Function ✅

-> A function that is passed as an argument to another function. The main function calls back the passed    function when needed.

// example 👇🏼
function greeting(){
  console.log("Welcome to JavaScript!");
}

function greetUser(name, callback) {
  console.log("Hi " + name);
  callback(); // this is the callback function
}

greetUser("Sajid", greeting);


💡 Key Points:

-> Great for asynchronous operations.
-> Very common in JavaScript (e.g. event handling, API calls).

__________________________________________________________________________


6. Recursive Function ✅

-> A function that calls itself from inside its own code. Useful for tasks that repeat 
until a condition is met.

// example 👇🏼
function countDown(n) {
  if (n <= 0) return; // stopping condition
  console.log(n);
  countDown(n - 1); // calls itself
}

countDown(3); // Output: 3, 2, 1


💡 Key Points:

-> Needs a base case to stop recursion.
-> Used for loops, tree traversal, and repeating tasks.

_________________________________________________________________________





