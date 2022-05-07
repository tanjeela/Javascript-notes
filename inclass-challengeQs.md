Javascript Challenges

Boolean expression challenge!
// Write boolean expressions for the following scenarios:
// If it is raining and cold I should bring a coat
// If I'm hungry I should eat
// If my petrol tank is below one quarter I should get gas
// If I have had 2 coffees today, I shouldn't have another
// If I own 5 cats, I don't need more cats
// If the discount is greater than 20% or the jacket is really cool, I will buy it

Challenge: Odds & Evens
MVP:
Check if a number is odd or even
Create variable n
Write an if / else block
If the number passed in is even return a string "n is even"
If the number is odd return a string "n is odd"

Challenge: Comparing Numbers
MVP:
Check for the smallest value
Create two variables x & y
Write an if / else block
It should compare a number x to another number y
It should print ("x is greater than y") in the console
Or "x is smaller than y"
Or "x is equal to y"
Depending on the value of x and y
BONUS: Find the largest value out of x, y and z

Function challenge
Challenge: Calculating Moon Orbits
MVP
Write a function that takes in a number of earth days, and returns the number of orbits the moon can perform given days.
moonOrbits(54) => 2
moonOrbits(365) => 13.359
Challenge: Working with Circles
MVP
Write a function that takes the radius of a circle and return its area.
Write a function that takes the radius of a circle and return its perimeter.
circleArea(10) => 314.16
circlePerimeter(10) => 62.83
Challenge: Years to Days & Seconds
MVP
Create a function that takes your age in years and returns your age in days.
Create a function that takes your age in years and returns your age in seconds.
ageInDays(32) => 11680
ageInSeconds(32) => 1009152000
Caveat: Your functions are not allowed to use console.log()!

Afternoon challenges
Challenge: Basketball Points
MVP
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
Challenge: Less Than 100?
MVP
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
lessThan100(22, 15) ➞ true
// 22 + 15 = 37

lessThan100(83, 34) ➞ false
// 83 + 34 = 117

lessThan100(3, 77) ➞ true


Challenge: Listing Hobbies
MVP
Create an array with 3 of your hobbies
Print in the console the first hobby in the array
Remove that first hobby from the array and store that hobby in a variable
Store the length of the array in a variable
Add another hobby at the end of the array
Print that last hobby in the console
Bonus:

Join all your hobbies in a single string each hobby being comma separated (i.e. "My hobbies are: hobby1, hobby2, hobby2")

Challenge: Grocery Lists
MVP
Create an array containing 5 grocery items you often buy
Log this list to the console, make sure the output is pipe delimited
['apple', 'pear', 'papaya', 'mango'] => 'apple|pear|papaya|mango'

Challenge: Sum of n
MVP:
Create a function with a for loop that will add all the numbers up to n
You should create a variable to set the upper limit of your loop
Your loop should increment by 1 on each iteration
Your loop should print the final result
sum(10) => 55
Bonus:
Try writing the function again with the same inputs and outputs Without using a loop. (You may need to google some formulas!)

Objects key challenge:
// Challenge
// Write a function named fill that takes in an object and a string
// The function creates a copy of the object
// And adds the string (which is a beverage) to the object
// as a new contents key
// The function should then log "The mug is now full of tea"
// Bonus: If your object does not have a capacity key
//   It is not a watertight vessel and you should NOT add the beverage
// Bonus bonus: If your object already contains a beverage
//   It should first console log "Pouring out existing tea"
Note: Inside of the function, object is the argument, so you need to use whatever it is you receive.

MVP
Create a function called delayedIncDec(n, mode, timeout)
n: Initial number
mode: mode should take in either inc or dec, and should change whether the function increments or decrements
timeout: the delay time, should default to 2.5 seconds
Call this function three times with different numbers, callbacks and timeouts
After each promise resolves print the output number to the console

MVP
Create a function called delayedFilter(array, callback, timeout)
array: array to be filtered
callback: function to filter with
timeout: the delay time, should default to 2.5 seconds
Call this function twice with different arrays, callbacks and timeouts
After each promise resolves print the list to the console

Cat fact challenge
// Use the https://catfact.ninja/ API!!!
// by accessing catfact.ninja/fact you will get one random fact
// fetch that url to receive a promise
// await that promise to get the response
// await the .json() of that response to get the js object
// Find the parts of the js object you want (console.log, read documentation, or access it in your browser)
// And then add it to an h1 in your html
// alternatively, play around with the /breeds API