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

const age = 20;

if (age > 18) {
  
}