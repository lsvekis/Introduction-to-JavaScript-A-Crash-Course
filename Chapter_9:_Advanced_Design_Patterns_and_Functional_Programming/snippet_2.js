const nums = [1, 2, 3, 4, 5];
// Using map to create a new array with squared numbers
const squares = nums.map(num => num * num);
console.log("Squares:", squares); // [1, 4, 9, 16, 25]
// Using filter to get even numbers
const evens = nums.filter(num => num % 2 === 0);
console.log("Evens:", evens); // [2, 4]
// Using reduce to sum numbers
const sum = nums.reduce((total, num) => total + num, 0);
console.log("Sum:", sum); // 15
Coding Exercises