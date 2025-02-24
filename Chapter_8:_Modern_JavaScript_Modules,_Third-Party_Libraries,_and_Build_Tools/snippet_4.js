// Importing functions with CommonJS
const { toUpperCase, toLowerCase } = require('./stringUtil');
console.log("Uppercase:", toUpperCase("hello")); // Output: HELLO
console.log("Lowercase:", toLowerCase("WORLD")); // Output: world