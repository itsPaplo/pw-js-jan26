/* Assignment Requirements:
1. Create a function named `isOddOrEven` that takes a number as a parameter
2. Declare and initialize the variable
3. Use a conditional statement to check if the number is divisible by 2
4. Call the function and print the result */

function isOddOrEven(number){
    if(number % 2 === 0) return "Even";
    else return "Odd";
}

console.log(isOddOrEven(5)); // Output: Odd
console.log(isOddOrEven(8)); // Output: Even