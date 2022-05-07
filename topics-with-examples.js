// FUNCTIONS 
const name = "Tanjeela";
// Anything available in Global Scope is available in our Function scope

function adder(num1, num2) {
  console.log(num1 + num2);
}
// () add parameter, can inject variable or value and it will run withing curly brackets
// adding . will be able to call inbuilt calling to JS
// Function invoking
function adder(num1, num2) {
  console.log(num1 + num2);
}
adder(5,10);

function toUpper(canbeanythingyounameit) {
  const upperCased = canbeanythingyounameit.toUpperCase();
  console.log(upperCased);
}
toUpper(name);

// Preference
// => this is replacing the functions keyword
// Arrow is calling function

const multiply = (sum1, sum2) => {
console.log(sum1 * sum2);
}
multiply(5,10);


// IF/ELSE STATEMENTS
const age = 20;
if (age > 18) {


}
// else if --> used if you want to check another condition
// inside if brackets, something needs to be equal to something or if something is less than/equal to something
// You can have multiple conditions in one if statement 
// single = is used to assign something (usually a function)
// === is the way to GO, Aidan says that we don't want to encounter bugs, so safer to get used to, say if (age == '18), the console will say, yes we will run with that, even though the value is a string, not a number.
// REMEMBER! With && --> both conditions need to be true in order for it to run. for ||, one statement being true will allow it to run.

// String Concatanenation
// Backticks are ELITE
// ` (next to 1 on keyboard)
// ${} --> we can put the variable there

// Example
// Create a string that prints "Hello my name is X and my age is Y years old"
// Create variables for X and Y
const name2 = 'tanjeela';
const age2 = 25;
// Too much checking with the one below, creates error and long to write
// console.log("Hello my " + name2 + " and my age is " + age2 + " years old")  
// Awesome way to do simple string concatenation
console.log(`Hello my name is ${name2} and my age is ${age2} years old`)

// String and numbers can be funky together, so when you set a value to include a string and number, it'll return a string. It's always good to check what type your variable is like soooo:

const combined = name2 + age2;
console.log(typeof combined);
// shows string on console

// <-------- Arrays -------->
// A way of making lists, multiple values under a single variable name
// Can store anything
// Lets say we are making an array to create a schedule

const schedule = ['Wake up', 'Eat breakfast', 'Shower', 'Work'];
// Useful because we want to take this information and output onto the screen.

// Allows us to add an element to the end of the array
schedule.push('New thing got added');
console.log(schedule);

// Allows us to access the value in that index
console.log(schedule[1]);


// schedule.pop()
// Don't need to specify any parameters AS LAST VALUE IS MOVED

// schedule.shift();
// REMOVES FIRST INDEX

// schedule.unshift();
// can take moew than one argument
// REMOVES LAST INDEX

// going to look for the index and then print the index number 
console.log(schedule.indexOf("Eat breakfast"));
// very useful as we can create variable and store the value of indexOf

const eat = schedule.indexOf("Eat breakfast");
console.log(schedule[eat]);

// Array constructor
// How do we create a new array?
// 1. Start with declaring our variable
// 2.need to use the "new" keyword then space with Array with the () including the array items
// E.G
// Empty array
// const newArray = new Array();
// console.log(newArray)
// E.G
const students = new Array("tanj", "bec", "liz");
console.log(students);

// How to access first element
const firstElement = students[0];
console.log(firstElement);

// How to access last element
const lastElement = students[students.length -1];
// When you want to grab the last element, need to do length and then minus 1
// creates an array length of 5 with "something"
const arr5 = new Array(5).fill("something");
console.log(arr5);
//<-------------- Objects -------------->
const user = {
  name: 'Edwin',
  age: 24,
  married: false,
  purchases: ["phone", "car", "laptop"]
};

// THIS
console.log(this);
// Don't really understand --> Ask Aidan



