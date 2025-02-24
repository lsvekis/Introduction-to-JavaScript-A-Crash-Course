// Pure function that adds two numbers
function add(a, b) {
return a + b;
}
console.log(add(2, 3)); // Output: 5
// Immutability: Instead of modifying an array, return a new one
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // New array with 4 added
console.log("Original:", numbers);   // [1, 2, 3]
console.log("New:", newNumbers);      // [1, 2, 3, 4]